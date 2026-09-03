"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { TerminalPanel } from "./TerminalPanel";

function FloatingTerminal({
  reducedMotion,
  enableParallax,
}: {
  reducedMotion: boolean;
  enableParallax: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;

    const active = enableParallax && !reducedMotion;
    const targetY = active ? state.pointer.x * 0.35 : 0;
    const targetX = active ? -state.pointer.y * 0.2 : 0;

    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetY, 0.05);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, targetX, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Html center transform distanceFactor={1.6}>
        <TerminalPanel reducedMotion={reducedMotion} />
      </Html>
    </group>
  );
}

export function TerminalScene({
  reducedMotion,
  isMobile,
}: {
  reducedMotion: boolean;
  isMobile: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={isMobile ? 1 : [1, 2]}
      gl={{ antialias: !isMobile }}
    >
      <ambientLight intensity={0.6} />
      {!isMobile ? <pointLight position={[3, 3, 3]} intensity={40} /> : null}
      <Sparkles
        count={isMobile ? 18 : 80}
        scale={[6, 4, 4]}
        size={2}
        speed={reducedMotion ? 0 : 0.3}
        color="#3fb950"
        opacity={0.5}
      />
      <FloatingTerminal
        reducedMotion={reducedMotion}
        enableParallax={!isMobile}
      />
    </Canvas>
  );
}
