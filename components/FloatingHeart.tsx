import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Sparkles } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/heart_optimized.glb');
  const groupRef = useRef<THREE.Group>(null);

  // 🔥 Corregir orientación (Blender Z-up → Three Y-up)
  useMemo(() => {
    scene.rotation.x = Math.PI / 2;
  }, [scene]);

  // Movimiento
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004; // giro lento
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.1; // flotación
    }
  });

  // 🔥 TU LÓGICA DE COLORES ORIGINAL (intacta)
  useMemo(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const name = child.name.toLowerCase();

        const isCenter =
          name.includes('gem') ||
          name.includes('crystal') ||
          name.includes('inner') ||
          name.includes('001') ||
          name.includes('heart');

        if (isCenter && !name.includes('rim') && !name.includes('border')) {
          child.material = new THREE.MeshPhysicalMaterial({
            color: '#8041eb',
            emissive: '#370793',
            emissiveIntensity: 0.5,
            metalness: 0.1,
            roughness: 0.05,
            transmission: 1.0,
            ior: 2.4,
            thickness: 2.0,
          });
        } else {
          child.material = new THREE.MeshStandardMaterial({
            color: '#ffffff',
            metalness: 1.0,
            roughness: 0.0,
            envMapIntensity: 2.5,
          });
        }
      }
    });
  }, [scene]);

  return (
    <primitive
      ref={groupRef}
      object={scene}
      scale={2.2}
    />
  );
}

export default function FloatingHeart() {
  return (
    <div className="w-full h-[500px] bg-white flex items-center justify-center overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
      >
        <Suspense fallback={null}>

          {/* Luces simples sin sombra */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />

          <Model />

          <Sparkles
            count={40}
            scale={6}
            size={2}
            speed={0.4}
            color="#ce88b0"
          />

        </Suspense>
      </Canvas>
    </div>
  );
}
