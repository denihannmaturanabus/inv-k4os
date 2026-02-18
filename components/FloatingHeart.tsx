import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Sparkles, Environment } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/heart_optimized.glb');
  const groupRef = useRef<THREE.Group>(null);

  // ✅ Centrar modelo (sin rotarlo raro)
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);
  }, [scene]);

  // ✅ Movimiento
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.1;
    }
  });

  // ✅ TU LÓGICA ORIGINAL DE COLORES — INTACTA
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
      scale={2}
    />
  );
}

export default function FloatingHeart() {
  return (
    <div className="w-full h-[450px] bg-white flex items-center justify-center overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>

          {/* 🔥 Environment SIN sombra */}
          <Environment preset="city" />

          {/* Luz suave */}
          <ambientLight intensity={0.8} />

          <Model />

          <Sparkles
            count={30}
            scale={5}
            size={2}
            speed={0.4}
            color="#ce88b0"
          />

        </Suspense>
      </Canvas>
    </div>
  );
}
