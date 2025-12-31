/* eslint-disable @typescript-eslint/no-explicit-any */
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

// interface modelProp {
//   name: string;
//   modelPath: string;
//   scale: number;
//   rotation: [number, number, number];
//   position?: [number, number, number];
// }

const TechIcon = ({ model }: any) => {
  const scene = useGLTF(model.modelPath) as any;

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child: any) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }

    if (model.name === "Angular Developer") {
      scene.scene.traverse((child: any) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ color: "#BE1FAF" });
        }
      });
    }
  }, [model.name, scene]);

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: false }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <Suspense fallback={null}>
          <group
            scale={model.scale}
            rotation={model.rotation}
            position={model.position || [0, 0, 0]}
          >
            <primitive object={scene.scene} />
          </group>
        </Suspense>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
