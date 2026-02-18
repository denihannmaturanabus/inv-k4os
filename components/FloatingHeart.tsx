import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Stage, PresentationControls, Sparkles } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/heart_optimized.glb');
  const groupRef = useRef<THREE.Group>(null);

  // 🔥 CORREGIR ORIENTACIÓN UNA SOLA VEZ
  useMemo(() => {
    scene.rotation.x = Math.PI / 2; 
  }, [scene]);

  // Movimiento
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Giro lento horizontal (de frente)
      groupRef.current.rotation.y += 0.004;

      // Flotación suave
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.1;
    }
  });

  // 🔥 TU LÓGICA ORIGINAL DE COLORES (NO TOCADA)
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
    <div className="w-full h-[250px] md:h-[400px] cursor-grab active:cursor-grabbing relative bg-black overflow-hidden">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 40 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} shadows={false}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[0, 0]} // Bloquea arriba/abajo para que no se acueste con el mouse
              azimuth={[-Math.PI, Math.PI]} // Permite giro manual infinito de izquierda a derecha
            >
              <Float speed={2} rotationIntensity={0} floatIntensity={1}>
                <Model />
              </Float>
            </PresentationControls>
          </Stage>
          
          <Sparkles count={50} scale={10} size={2} speed={0.4} color="#ce88b0" />
        </Suspense>
      </Canvas>
    </div>
  );
}