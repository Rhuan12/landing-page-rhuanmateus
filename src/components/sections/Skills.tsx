import { Section } from "@/components/ui/Section";

const categories = [
  {
    name: "Linguagens",
    items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    name: "Frameworks & Bibliotecas",
    items: ["React", "Node.js", "Tailwind"],
  },
  {
    name: "Dados & Infra",
    items: ["Supabase"],
  },
  {
    name: "Ferramentas & Práticas",
    items: ["Git", "Automação"],
  },
];

export function Skills() {
  return (
    <Section id="skills" title="skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {categories.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-amber">
              {category.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background-elevated px-3 py-1.5 font-mono text-sm text-foreground/90 transition-colors hover:border-terminal-green/60 hover:text-terminal-green"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
