import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, href } = project;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background-elevated">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visitar site de ${title}`}
          className="group block aspect-video border-b border-border bg-background outline-none transition-colors hover:bg-background-elevated focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-green"
        >
          <div className="flex h-6 items-center gap-1.5 border-b border-border bg-background-elevated px-3">
            <span className="h-2 w-2 rounded-full bg-terminal-green-dim/60" />
            <span className="h-2 w-2 rounded-full bg-amber/60" />
            <span className="h-2 w-2 rounded-full bg-border" />
          </div>
          <div className="flex h-[calc(100%-1.5rem)] items-center justify-center px-4 text-center">
            <span className="font-mono text-xs text-muted transition-colors group-hover:text-terminal-green">
              ver projeto ↗
            </span>
          </div>
        </a>
      ) : (
        <div
          aria-hidden
          className="flex aspect-video items-center justify-center border-b border-border bg-[repeating-linear-gradient(45deg,var(--color-border)_0px,var(--color-border)_1px,transparent_1px,transparent_10px)]"
        >
          <span className="rounded-md border border-border bg-background px-3 py-1 font-mono text-xs text-muted">
            {"// privado"}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-mono text-base font-semibold">{title}</h3>
        <p className="flex-1 text-sm text-foreground/80">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="w-fit font-mono text-xs text-terminal-green outline-none transition-colors hover:text-amber active:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          >
            {href.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
          </a>
        ) : null}
      </div>
    </article>
  );
}
