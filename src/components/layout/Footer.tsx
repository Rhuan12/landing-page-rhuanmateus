import { contacts } from "@/lib/contacts";

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Rhuan Mateus
        </p>

        <nav aria-label="Links rápidos">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="outline-none transition-colors hover:text-terminal-green active:text-terminal-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-4 font-mono text-xs text-muted">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-none transition-colors hover:text-amber active:text-amber focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
              >
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
