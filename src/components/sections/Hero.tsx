"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "@/lib/gsap";
import { whatsappHref } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 0.15 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(80% 60% at 50% 30%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(80% 60% at 50% 30%, black 0%, transparent 75%)",
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-[92%] max-w-6xl gap-8">
        <div className="max-w-2xl">
          <p className="hero-reveal mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-display text-xs font-medium uppercase tracking-[0.25em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponível para novos projetos
          </p>
          <h1 className="hero-reveal font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-fg sm:text-[8vw] lg:text-[5.2vw]">
            Rhuan Mateus
          </h1>
          <p className="hero-reveal mt-6 max-w-xl text-lg text-fg-muted sm:text-xl">
            Desenvolvedor front-end/full-stack apaixonado por criar soluções
            que resolvem problemas reais — do design à automação, do front ao
            back.
          </p>
          <div className="hero-reveal mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="pulse-ring rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-contrast"
            >
              Vamos criar algo juntos
            </motion.a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-full border border-border px-8 py-4 text-base font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted"
      >
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="3" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}
