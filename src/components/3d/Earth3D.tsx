import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface Earth3DProps {
  position?: [number, number, number];
  scale?: number;
}

export function Earth3D({ position = [0, 0, 0], scale = 1 }: Earth3DProps) {
  const earthRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  // Create textures (using procedural for now, could load real Earth textures)
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create Earth-like texture with blues and greens
    const gradient = ctx.createLinearGradient(0, 0, 512, 256);
    gradient.addColorStop(0, '#1e40af');
    gradient.addColorStop(0.3, '#0ea5e9');
    gradient.addColorStop(0.5, '#22c55e');
    gradient.addColorStop(0.7, '#16a34a');
    gradient.addColorStop(1, '#1e40af');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 256);
    
    // Add some landmass-like shapes
    ctx.fillStyle = '#16a34a';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 256;
      const size = Math.random() * 40 + 10;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  // Atmosphere glow material
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glowColor: { value: new THREE.Color(0x00e5ff) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        
        void main() {
          float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 glow = glowColor * intensity;
          
          // Add some pulse effect
          float pulse = sin(time * 2.0) * 0.1 + 0.9;
          glow *= pulse;
          
          gl_FragColor = vec4(glow, intensity * 0.5);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
  }, []);

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
    if (atmosphereRef.current) {
      atmosphereMaterial.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Earth */}
      <Sphere ref={earthRef} args={[1, 64, 32]}>
        <meshPhongMaterial 
          map={earthTexture}
          bumpScale={0.1}
          shininess={100}
        />
      </Sphere>
      
      {/* Atmosphere */}
      <Sphere ref={atmosphereRef} args={[1.05, 64, 32]} material={atmosphereMaterial} />
    </group>
  );
}