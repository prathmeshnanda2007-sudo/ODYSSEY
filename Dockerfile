# Stage 1: Build the React + Vite frontend
FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Python Backend runtime
FROM python:3.11-slim
WORKDIR /app

# Install system dependencies for GDAL/rasterio and image processing
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Install PyTorch CPU-only first for fast download (~150MB instead of 2GB CUDA)
RUN pip install --no-cache-dir --extra-index-url https://download.pytorch.org/whl/cpu torch

# Install Python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY backend/ ./backend/
COPY datasets/ ./datasets/

# Copy built frontend assets from Stage 1 into frontend/dist
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Create output directories
RUN mkdir -p outputs datasets/raw datasets/processed datasets/sample

# Expose default port (7860 for Hugging Face Spaces, or customizable via $PORT on Render/Cloud Run)
ENV PORT=7860
EXPOSE 7860

# Launch server
CMD ["sh", "-c", "uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-7860}"]
