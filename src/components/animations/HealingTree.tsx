import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Improved Tree model with more natural elements
const TreeModel = () => {
  const trunkRef = useRef<THREE.Mesh>(null);
  const leavesRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (leavesRef.current) {
      leavesRef.current.rotation.y += delta * 0.1;
      // Add gentle swaying motion
      leavesRef.current.position.y = 1.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
    
    if (trunkRef.current) {
      trunkRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group
      position={[0, -1, 0]}
      scale={1.1} // Reduced from 1.2 to 1.1
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Tree trunk */}
      <mesh ref={trunkRef} position={[0, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.4, 2, 16]} />
        <meshStandardMaterial 
          color={new THREE.Color("#5D4037")} 
          roughness={0.8} 
          metalness={0.2}
        />
      </mesh>
      
      {/* Tree leaves - using the brand colors */}
      <mesh ref={leavesRef} position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
        <meshStandardMaterial 
          color={new THREE.Color(hovered ? "#9cdb43" : "#527f22")} 
          roughness={0.7}
          metalness={0.1}
          emissive={new THREE.Color(hovered ? "#4caf50" : "#00000000")}
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Healing orbs floating around the tree with brand colors */}
      <HealingOrbs count={12} radius={1.5} /> {/* Reduced count from 15 to 12 and radius from 1.6 to 1.5 */}

      {/* Base/ground */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[2, 32]} />
        <meshStandardMaterial 
          color={new THREE.Color("#e0d5c1")} 
          roughness={1}
        />
      </mesh>
    </group>
  );
};

interface OrbProps {
  position: [number, number, number];
  speed: number;
  size: number;
  color: string;
}

const Orb = ({ position, speed, size, color }: OrbProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(Math.random() * 100);
  
  useFrame((state, delta) => {
    time.current += delta * speed;
    
    if (ref.current) {
      // More complex orbital motion
      ref.current.position.y = position[1] + Math.sin(time.current) * 0.4;
      ref.current.position.x = position[0] + Math.sin(time.current * 0.7) * 0.15;
      ref.current.position.z = position[2] + Math.cos(time.current * 0.5) * 0.15;
      ref.current.scale.setScalar(1 + Math.sin(time.current * 2) * 0.1);
    }
  });
  
  return (
    <mesh ref={ref} position={position} castShadow>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={new THREE.Color(color)} 
        transparent 
        opacity={0.7} 
        emissive={new THREE.Color(color)} 
        emissiveIntensity={0.5} 
      />
    </mesh>
  );
};

interface HealingOrbsProps {
  count: number;
  radius: number;
}

const HealingOrbs = ({ count, radius }: HealingOrbsProps) => {
  const orbs = [];
  // Use the brand colors from the logo
  const colors = ['#d9dd3f', '#e0cf9c', '#a4e062', '#527f22', '#77a845', '#8ec9d2'];
  
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = 1 + Math.random() * 0.8;
    const speed = 0.5 + Math.random() * 1;
    const size = 0.08 + Math.random() * 0.08;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    orbs.push(
      <Orb 
        key={i} 
        position={[x, y, z]} 
        speed={speed} 
        size={size} 
        color={color} 
      />
    );
  }
  
  return <>{orbs}</>;
};

// Environment background
const Background = () => {
  return (
    <mesh position={[0, 0, -10]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial color={new THREE.Color("#f8f5ed")} side={THREE.DoubleSide} />
    </mesh>
  );
};

interface SceneProps {
  className?: string;
}

const HealingTree = ({ className }: SceneProps) => {
  return (
    <div className={`${className || ''} w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm`}>
      <Canvas 
        shadows 
        camera={{ position: [0, 2, 7], fov: 35 }} // Increased camera distance and reduced FOV for better fit
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#f8f5ed']} />
        <fog attach="fog" args={['#f8f5ed', 8, 20]} />
        
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <spotLight 
          position={[-5, 5, 5]} 
          intensity={0.8} 
          angle={0.4} 
          penumbra={0.5} 
          castShadow 
        />
        
        <TreeModel />
        <Background />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.4} // Reduced from 0.5 to 0.4 for gentler rotation
        />
      </Canvas>
    </div>
  );
};

export default HealingTree;
