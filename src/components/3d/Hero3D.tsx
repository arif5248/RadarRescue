import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Earth3D } from "./Earth3D";
import { Satellite3D } from "./Satellite3D";
import * as THREE from "three";

function StarField() {
  return (
    <Stars 
      radius={300} 
      depth={50} 
      count={5000} 
      factor={6} 
      saturation={0} 
      fade 
      speed={0.5}
    />
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        color="#ffffff"
      />
      <pointLight 
        position={[-10, -10, -5]} 
        intensity={0.5} 
        color="#7C5CFF"
      />
      
      {/* Earth at center */}
      <Earth3D scale={1.2} />
      
      {/* Satellites */}
      <Satellite3D orbitRadius={2.5} orbitSpeed={0.008} />
      <Satellite3D orbitRadius={3.2} orbitSpeed={-0.006} position={[0, 0.5, 0]} />
      <Satellite3D orbitRadius={2.8} orbitSpeed={0.01} position={[0, -0.3, 0]} />
      
      {/* Background stars */}
      <StarField />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI * 0.7}
          minPolarAngle={Math.PI * 0.3}
        />
      </Canvas>
    </div>
  );
}