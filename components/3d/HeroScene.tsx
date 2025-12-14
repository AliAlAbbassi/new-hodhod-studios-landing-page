"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";

function HeroMesh() {
    return (
        <mesh rotation={[0, 0, 0]}>
            <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
            <meshStandardMaterial
                color="#FF991A"
                roughness={0.2}
                metalness={0.8}
                wireframe={true}
                emissive="#FF1A66"
                emissiveIntensity={0.2}
            />
        </mesh>
    );
}

export const HeroScene = () => {
    return (
        <div className="h-full w-full absolute inset-0 -z-10 opacity-60">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                    <Float
                        speed={2}
                        rotationIntensity={0.5}
                        floatIntensity={0.5}
                        floatingRange={[-0.2, 0.2]}
                    >
                        <HeroMesh />
                    </Float>
                    <Environment preset="city" />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#FF991A" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#FF1A66" />
                </Suspense>
            </Canvas>
        </div>
    );
};
