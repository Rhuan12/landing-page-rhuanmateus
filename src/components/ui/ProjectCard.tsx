"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 20,
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
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: (index % 2) * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/50 [perspective:1000px]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        {!imageFailed ? (
          <Image
            src={project.image}
            alt={`Captura de tela do projeto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 560px, 92vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface-soft">
            <span className="font-display text-5xl font-bold text-accent">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold text-fg">{project.title}</h3>
        <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-fg-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
