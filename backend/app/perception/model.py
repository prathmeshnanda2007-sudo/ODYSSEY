"""Lightweight Multi-Modal U-Net for Martian Terrain Segmentation.

Fuses optical spectral imagery (R, G, B) with elevation morphometry
(DEM height, slope, ruggedness TRI) into 5 terrain semantic classes:
0: Safe Bedrock
1: Loose Sand / Dune
2: Rocky Field / Boulders
3: Steep Hazard / Cliff
4: Shadow / Optical Dropout

Implements Monte Carlo Dropout for epistemic uncertainty quantification.
"""

import torch
import torch.nn as nn
import torch.nn.functional as F
from typing import Tuple, Optional


class ConvBlock(nn.Module):
    def __init__(self, in_ch: int, out_ch: int):
        super().__init__()
        self.conv = nn.Sequential(
            nn.Conv2d(in_ch, out_ch, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
            nn.Conv2d(out_ch, out_ch, kernel_size=3, padding=1, bias=False),
            nn.BatchNorm2d(out_ch),
            nn.ReLU(inplace=True),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.conv(x)


class MarsTerrainUNet(nn.Module):
    """6-channel input U-Net with Monte Carlo Dropout heads."""

    def __init__(self, in_channels: int = 6, num_classes: int = 5, dropout_rate: float = 0.2):
        super().__init__()
        self.in_channels = in_channels
        self.num_classes = num_classes
        self.dropout_rate = dropout_rate

        # Encoder
        self.enc1 = ConvBlock(in_channels, 16)
        self.pool1 = nn.MaxPool2d(2, 2)

        self.enc2 = ConvBlock(16, 32)
        self.pool2 = nn.MaxPool2d(2, 2)

        self.enc3 = ConvBlock(32, 64)
        self.pool3 = nn.MaxPool2d(2, 2)

        # Bottleneck with spatial dropout
        self.bottleneck = ConvBlock(64, 128)
        self.drop_bottleneck = nn.Dropout2d(p=dropout_rate)

        # Decoder
        self.up3 = nn.ConvTranspose2d(128, 64, kernel_size=2, stride=2)
        self.dec3 = ConvBlock(128, 64)

        self.up2 = nn.ConvTranspose2d(64, 32, kernel_size=2, stride=2)
        self.dec2 = ConvBlock(64, 32)

        self.up1 = nn.ConvTranspose2d(32, 16, kernel_size=2, stride=2)
        self.dec1 = ConvBlock(32, 16)

        # Segmentation Head with MC Dropout
        self.mc_dropout = nn.Dropout2d(p=dropout_rate)
        self.classifier = nn.Conv2d(16, num_classes, kernel_size=1)

    def forward(self, x: torch.Tensor, enable_mc_dropout: bool = False) -> torch.Tensor:
        # Encoder
        e1 = self.enc1(x)
        e2 = self.enc2(self.pool1(e1))
        e3 = self.enc3(self.pool2(e2))

        # Bottleneck
        b = self.bottleneck(self.pool3(e3))
        if enable_mc_dropout or self.training:
            b = self.drop_bottleneck(b)

        # Decoder
        d3 = self.up3(b)
        d3 = torch.cat([d3, e3], dim=1)
        d3 = self.dec3(d3)

        d2 = self.up2(d3)
        d2 = torch.cat([d2, e2], dim=1)
        d2 = self.dec2(d2)

        d1 = self.up1(d2)
        d1 = torch.cat([d1, e1], dim=1)
        d1 = self.dec1(d1)

        # Classifier
        if enable_mc_dropout or self.training:
            d1 = self.mc_dropout(d1)

        logits = self.classifier(d1)
        return logits


def get_model_parameter_count(model: nn.Module) -> int:
    return sum(p.numel() for p in model.parameters() if p.requires_grad)
