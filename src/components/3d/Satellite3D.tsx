import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder } from "@react-three/drei";
import * as THREE from "three";

interface Satellite3DProps {
  orbitRadius?: number;
  orbitSpeed?: number;
  position?: [number, number, number];
}

export function Satellite3D({ 
  orbitRadius = 3, 
  orbitSpeed = 0.01,
  position = [0, 0, 0] 
}: Satellite3DProps) {
  const satelliteRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
    if (satelliteRef.current) {
      // Slight rotation of the satellite itself
      satelliteRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group position={position}>
      <group ref={orbitRef}>
        <group ref={satelliteRef} position={[orbitRadius, 0, 0]}>
          {/* Main body */}
          <Box args={[0.2, 0.3, 0.15]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#d4d4d8" metalness={0.8} roughness={0.2} />
          </Box>
          
          {/* Solar panels */}
          <Box args={[0.05, 0.8, 0.4]} position={[-0.15, 0, 0]}>
            <meshStandardMaterial color="#1e3a8a" metalness={0.1} roughness={0.1} />
          </Box>
          <Box args={[0.05, 0.8, 0.4]} position={[0.15, 0, 0]}>
            <meshStandardMaterial color="#1e3a8a" metalness={0.1} roughness={0.1} />
          </Box>
          
          {/* Antenna */}
          <Cylinder args={[0.02, 0.02, 0.3]} position={[0, 0.3, 0]}>
            <meshStandardMaterial color="#ffffff" />
          </Cylinder>
          
          {/* Communication dish */}
          <Cylinder args={[0.08, 0.06, 0.03]} position={[0, 0.15, 0.1]} rotation={[Math.PI / 4, 0, 0]}>
            <meshStandardMaterial color="#e5e7eb" metalness={0.9} roughness={0.1} />
          </Cylinder>
        </group>
      </group>
    </group>
  );
}