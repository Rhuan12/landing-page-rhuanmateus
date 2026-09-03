import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <Section id="projetos" title="projetos">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
