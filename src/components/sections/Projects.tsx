"use client";

import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative w-full border-t border-border bg-bg py-28">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Trabalho recente
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-fg sm:text-5xl">
            Projetos em destaque
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
