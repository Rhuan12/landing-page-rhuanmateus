"use client";

import { useState } from "react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#hero" className="font-mono text-sm text-terminal-green">
          rhuan@dev:~$
        </a>

        <nav aria-label="Navegação principal" className="hidden sm:block">
          <ul className="flex gap-6 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted transition-colors hover:text-terminal-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground sm:hidden"
        >
          <span aria-hidden>{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          className="border-t border-border bg-background sm:hidden"
        >
          <ul className="flex flex-col divide-y divide-border font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-3 text-muted hover:text-terminal-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
