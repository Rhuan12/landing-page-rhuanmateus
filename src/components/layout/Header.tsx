"use client";

import { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

const focusRing =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-green";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const activeSection = useActiveSection(
    navLinks.map((link) => link.href.slice(1)),
  );

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#hero"
          className={`font-mono text-sm text-terminal-green ${focusRing}`}
        >
          rhuan@dev:~$
        </a>

        <nav aria-label="Navegação principal" className="hidden sm:block">
          <ul className="flex gap-6 font-mono text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`before:mr-1 before:content-['>'] transition-colors ${focusRing} ${
                      isActive
                        ? "text-terminal-green before:text-terminal-green"
                        : "text-muted before:text-transparent hover:text-terminal-green active:text-terminal-green"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className={`relative flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-terminal-green/60 active:scale-95 sm:hidden ${focusRing}`}
        >
          <span
            aria-hidden
            className={`absolute inset-0 flex items-center justify-center font-mono text-base ${
              reducedMotion ? "" : "transition-all duration-200"
            } ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
          >
            ☰
          </span>
          <span
            aria-hidden
            className={`absolute inset-0 flex items-center justify-center font-mono text-base ${
              reducedMotion ? "" : "transition-all duration-200"
            } ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          >
            ✕
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Navegação mobile"
          className={`border-t border-border bg-background sm:hidden ${
            reducedMotion
              ? ""
              : "transition-all duration-200 starting:-translate-y-2 starting:opacity-0"
          }`}
        >
          <ul className="flex flex-col divide-y divide-border font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 text-muted transition-colors hover:text-terminal-green active:text-terminal-green ${focusRing}`}
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
