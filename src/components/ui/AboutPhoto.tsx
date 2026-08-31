"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PHOTO_CANDIDATES = ["/images/rhuan.jpg", "/images/rhuan.jpeg"];

export default function AboutPhoto() {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const imageFailed = candidateIndex >= PHOTO_CANDIDATES.length;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 18,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="[perspective:1200px]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="group relative mx-auto aspect-[3/4] w-full max-w-sm rounded-[2.5rem] [transform-style:preserve-3d]"
      >
        <div
          aria-hidden
          className="absolute -inset-px -z-10 rounded-[2.5rem] bg-accent/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border bg-surface">
          {!imageFailed ? (
            <Image
              key={PHOTO_CANDIDATES[candidateIndex]}
              src={PHOTO_CANDIDATES[candidateIndex]}
              alt="Foto de Rhuan Mateus"
              fill
              sizes="(min-width: 1024px) 384px, 80vw"
              className="object-cover grayscale"
              onError={() => setCandidateIndex((i) => i + 1)}
              priority
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-surface-soft text-fg-muted">
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.5" />
                <path
                  d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </svg>
              <p className="px-6 text-center text-sm font-medium">
                Foto em breve — adicione em{" "}
                <code className="rounded bg-border/60 px-1.5 py-0.5">/public/images/rhuan.jpg</code>{" "}
                (ou <code className="rounded bg-border/60 px-1.5 py-0.5">.jpeg</code>)
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
