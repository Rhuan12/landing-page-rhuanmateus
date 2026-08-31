"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, whatsappHref } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex w-[92%] max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? "border-border bg-bg/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            handleLinkClick("#hero");
          }}
          className="font-display text-lg font-bold tracking-tight text-fg"
        >
          Rhuan<span className="text-accent">.</span>Mateus
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                handleLinkClick(link.href);
              }}
              className="rounded-full px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent md:inline-block"
        >
          Vamos conversar
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          <div className="flex h-4 w-5 flex-col justify-between">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full origin-center rounded-full bg-fg"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-full rounded-full bg-fg"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full origin-center rounded-full bg-fg"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-3 flex w-[92%] max-w-6xl flex-col gap-1 rounded-3xl border border-border bg-bg/95 p-4 backdrop-blur-md md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="rounded-2xl px-4 py-3 text-base font-medium text-fg-muted hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-2xl bg-accent px-4 py-3 text-center text-base font-semibold text-accent-contrast"
            >
              Vamos conversar
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
