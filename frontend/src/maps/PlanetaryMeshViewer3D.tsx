import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Box, Layers, RotateCcw, Sliders, Maximize2, AlertCircle } from 'lucide-react';

interface PlanetaryMeshViewer3DProps {
  heightmapUrl?: string;
  textureUrl?: string;
  pathCoords: [number, number][];
  elevationRange?: { min: number; max: number };
}

export const PlanetaryMeshViewer3D: React.FC<PlanetaryMeshViewer3DProps> = ({
  heightmapUrl,
  textureUrl,
  pathCoords,
  elevationRange,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [exaggeration, setExaggeration] = useState<number>(1.8);
  const [loadingTerrain, setLoadingTerrain] = useState<boolean>(false);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const pathLineRef = useRef<THREE.Line | null>(null);
  const originalElevationsRef = useRef<Float32Array | null>(null);

  // Orbit control state
  const isDraggingRef = useRef<boolean>(false);
  const isPanningRef = useRef<boolean>(false);
  const prevMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cameraSphericalRef = useRef<{ radius: number; theta: number; phi: number }>({
    radius: 160,
    theta: Math.PI / 4,
    phi: Math.PI / 3.2,
  });
  const cameraTargetRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { radius, theta, phi } = cameraSphericalRef.current;
    const target = cameraTargetRef.current;

    cameraRef.current.position.x = target.x + radius * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = target.y + radius * Math.cos(phi);
    cameraRef.current.position.z = target.z + radius * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(target);
  };

  const handleResetCamera = () => {
    cameraSphericalRef.current = {
      radius: 160,
      theta: Math.PI / 4,
      phi: Math.PI / 3.2,
    };
    cameraTargetRef.current.set(0, 0, 0);
    updateCameraPosition();
  };

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0f);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    cameraRef.current = camera;
    updateCameraPosition();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // Lighting: Simulates Mars NW Sun angle
    const ambientLight = new THREE.AmbientLight(0xffeedd, 0.6);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5ea, 1.2);
    sunLight.position.set(-100, 120, -100);
    sunLight.castShadow = true;
    scene.add(sunLight);

    // Secondary fill light for shadows
    const fillLight = new THREE.DirectionalLight(0x446688, 0.4);
    fillLight.position.set(100, -50, 100);
    scene.add(fillLight);

    // Grid helper on base
    const gridHelper = new THREE.GridHelper(160, 16, 0x333344, 0x1f1f2e);
    gridHelper.position.y = -15;
    scene.add(gridHelper);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    animate();

    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 450;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  // Mouse Interaction for Orbit Controls
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) isDraggingRef.current = true;
      if (e.button === 2) isPanningRef.current = true;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - prevMousePosRef.current.x;
      const dy = e.clientY - prevMousePosRef.current.y;
      prevMousePosRef.current = { x: e.clientX, y: e.clientY };

      if (isDraggingRef.current) {
        // Rotate
        cameraSphericalRef.current.theta -= dx * 0.008;
        cameraSphericalRef.current.phi = Math.max(
          0.1,
          Math.min(Math.PI / 2.05, cameraSphericalRef.current.phi - dy * 0.008)
        );
        updateCameraPosition();
      } else if (isPanningRef.current) {
        // Pan
        const panSpeed = cameraSphericalRef.current.radius * 0.001;
        cameraTargetRef.current.x -= dx * panSpeed;
        cameraTargetRef.current.z += dy * panSpeed;
        updateCameraPosition();
      }
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
      isPanningRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraSphericalRef.current.radius = Math.max(
        30,
        Math.min(350, cameraSphericalRef.current.radius + e.deltaY * 0.12)
      );
      updateCameraPosition();
    };

    const onContextMenu = (e: MouseEvent) => e.preventDefault();

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('contextmenu', onContextMenu);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('contextmenu', onContextMenu);
    };
  }, []);

  // Build / update 3D Terrain Mesh from heightmap & texture
  useEffect(() => {
    if (!sceneRef.current || !heightmapUrl) return;
    const scene = sceneRef.current;
    setLoadingTerrain(true);

    const segments = 127;
    const geometry = new THREE.PlaneGeometry(100, 100, segments, segments);
    geometry.rotateX(-Math.PI / 2); // Orient horizontal in X-Z plane

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = heightmapUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = segments + 1;
      canvas.height = segments + 1;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, segments + 1, segments + 1);
      const imgData = ctx.getImageData(0, 0, segments + 1, segments + 1).data;

      const posAttr = geometry.attributes.position;
      const vertexCount = posAttr.count;
      const elevations = new Float32Array(vertexCount);

      // Extract normalized elevations [0, 1]
      for (let i = 0; i < vertexCount; i++) {
        // Red channel of grayscale heightmap
        const val = imgData[i * 4] / 255.0;
        elevations[i] = val;
        // In PlaneGeometry rotated -90 deg X: X=x, Y=elevation, Z=z
        posAttr.setY(i, val * 12.0 * exaggeration);
      }

      originalElevationsRef.current = elevations;
      geometry.computeVertexNormals();

      // Texture loader for surface material
      const texLoader = new THREE.TextureLoader();
      const applyTexture = (texture: THREE.Texture) => {
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;

        const material = new THREE.MeshStandardMaterial({
          map: texture,
          wireframe: wireframe,
          roughness: 0.85,
          metalness: 0.15,
        });

        if (meshRef.current) {
          scene.remove(meshRef.current);
          meshRef.current.geometry.dispose();
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        meshRef.current = mesh;
        setLoadingTerrain(false);
      };

      if (textureUrl) {
        texLoader.load(textureUrl, applyTexture);
      } else {
        texLoader.load(heightmapUrl, applyTexture);
      }
    };

    img.onerror = () => {
      setLoadingTerrain(false);
    };
  }, [heightmapUrl, textureUrl]);

  // Update wireframe mode
  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.MeshStandardMaterial).wireframe = wireframe;
    }
  }, [wireframe]);

  // Update exaggeration scaling dynamically
  useEffect(() => {
    if (!meshRef.current || !originalElevationsRef.current) return;
    const geometry = meshRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const elevations = originalElevationsRef.current;

    for (let i = 0; i < posAttr.count; i++) {
      posAttr.setY(i, elevations[i] * 12.0 * exaggeration);
    }
    posAttr.needsUpdate = true;
    geometry.computeVertexNormals();
  }, [exaggeration]);

  // Render 3D Path Waypoint Ribbon
  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    if (pathLineRef.current) {
      scene.remove(pathLineRef.current);
      pathLineRef.current.geometry.dispose();
      pathLineRef.current = null;
    }

    if (pathCoords.length > 1 && originalElevationsRef.current) {
      const points: THREE.Vector3[] = [];
      const elevations = originalElevationsRef.current;
      const segments = 127;

      for (let i = 0; i < pathCoords.length; i++) {
        const [r, c] = pathCoords[i];
        // Normalize 0-511 coords to [-50, 50] 3D mesh space
        const x3d = (c / 512.0) * 100 - 50;
        const z3d = (r / 512.0) * 100 - 50;

        // Sample elevation
        const gridR = Math.min(segments, Math.floor((r / 512.0) * segments));
        const gridC = Math.min(segments, Math.floor((c / 512.0) * segments));
        const elevIdx = gridR * (segments + 1) + gridC;
        const rawElev = elevations[elevIdx] || 0.0;
        const y3d = rawElev * 12.0 * exaggeration + 0.8; // Floating slightly above terrain

        points.push(new THREE.Vector3(x3d, y3d, z3d));
      }

      const pathGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const pathMaterial = new THREE.LineBasicMaterial({
        color: 0x10b981,
        linewidth: 4,
      });

      const line = new THREE.Line(pathGeometry, pathMaterial);
      scene.add(line);
      pathLineRef.current = line;
    }
  }, [pathCoords, exaggeration]);

  return (
    <div className="flex flex-col h-full bg-mars-900 rounded-xl border border-mars-700/60 overflow-hidden relative">
      {/* 3D Header Toolbar */}
      <div className="bg-mars-800/80 px-4 py-2 border-b border-mars-700/50 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center space-x-2 text-slate-300">
          <Box className="w-4 h-4 text-cyan-400" />
          <span className="font-semibold text-white">PLANETARY 3D DIGITAL SURFACE MODEL</span>
          {elevationRange && (
            <span className="text-[11px] text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800/60">
              {elevationRange.min}m → {elevationRange.max}m
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Sliders className="w-3.5 h-3.5 text-mars-400" />
            <span className="text-slate-400 text-[11px]">Exagg:</span>
            <input
              type="range"
              min="0.5"
              max="4.0"
              step="0.1"
              value={exaggeration}
              onChange={(e) => setExaggeration(parseFloat(e.target.value))}
              className="w-20 accent-mars-500 cursor-pointer h-1.5 bg-mars-700 rounded-lg"
            />
            <span className="text-white w-7 text-[11px]">{exaggeration.toFixed(1)}x</span>
          </div>

          <button
            onClick={() => setWireframe(!wireframe)}
            className={`px-2.5 py-1 rounded border text-[11px] transition ${
              wireframe
                ? 'bg-mars-600 text-cyan-300 border-cyan-500'
                : 'bg-mars-700/60 text-slate-300 border-mars-600 hover:bg-mars-600'
            }`}
          >
            Wireframe
          </button>

          <button
            onClick={handleResetCamera}
            className="p-1 rounded bg-mars-700/60 text-slate-300 border border-mars-600 hover:bg-mars-600 transition"
            title="Reset 3D Camera"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div className="w-full flex-1 min-h-[440px] relative cursor-grab active:cursor-grabbing overflow-hidden">
        <div ref={mountRef} className="absolute inset-0 w-full h-full" />

        {loadingTerrain && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center space-x-2 text-cyan-400 text-xs font-mono z-10 pointer-events-none">
            <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span>Generating 3D Martian terrain mesh...</span>
          </div>
        )}

        {!heightmapUrl && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-mono text-xs space-y-2 pointer-events-none">
            <AlertCircle className="w-8 h-8 text-slate-600" />
            <span>DEM elevation heightmap required for 3D visualization</span>
          </div>
        )}

        {/* Orbit Helper overlay */}
        <div className="absolute bottom-2 right-2 bg-mars-950/80 backdrop-blur border border-mars-700/50 rounded px-2 py-1 text-[10px] font-mono text-slate-400 pointer-events-none">
          Left Drag: Rotate | Right Drag: Pan | Scroll: Zoom
        </div>
      </div>
    </div>
  );
};
