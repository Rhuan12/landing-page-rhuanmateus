import { Section } from "@/components/ui/Section";
import { contacts } from "@/lib/contacts";

export function Contact() {
  return (
    <Section id="contato" title="contato">
      <p className="mb-8 max-w-xl text-foreground/80">
        Sem formulário — escolha o canal que preferir e me chame direto.
      </p>
      <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-lg border border-border bg-background-elevated">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 px-5 py-4 font-mono text-sm outline-none transition-colors hover:bg-background active:bg-background focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-amber sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-terminal-green">
                $ contato --{contact.label}
              </span>
              <span className="text-muted transition-colors group-hover:text-amber">
                {contact.value} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
