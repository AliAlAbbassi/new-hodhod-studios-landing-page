"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

function BrainParticles(props: any) {
    const ref = useRef<any>(null);

    // Generate particles in a spherical shape to simulate a "brain" or node cluster
    const particles = useMemo(() => {
        const count = 2000;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 1.5 * Math.cbrt(Math.random()); // Cube root for uniform distribution

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#FF1A66"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export const BrainScene = () => {
    return (
        <div className="w-full h-full min-h-[300px] relative">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <BrainParticles />
                </Suspense>
            </Canvas>
            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-zinc-500 pointer-events-none">

            </div>
        </div>
    );
};
