import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#3b82f6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WaterDroplets() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => (
        <Float
          key={i}
          speed={2 + Math.random() * 2}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 30,
            ]}
          >
            <sphereGeometry args={[0.1 + Math.random() * 0.2, 16, 16]} />
            <meshStandardMaterial
              color="#22d3ee"
              emissive="#3b82f6"
              emissiveIntensity={0.5}
              transparent
              opacity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function AnimatedCamera() {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 2;
    state.camera.position.y = Math.cos(state.clock.getElapsedTime() * 0.15) * 2;
    state.camera.lookAt(0, 0, 0);
  });
  
  return null;
}

export const SpaceBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 75 }}
        style={{ background: 'linear-gradient(135deg, #0A1929 0%, #1e3a5f 50%, #152238 100%)' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#22d3ee" />
        
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <FloatingParticles />
        <WaterDroplets />
        <AnimatedCamera />
      </Canvas>
    </div>
  );
};
