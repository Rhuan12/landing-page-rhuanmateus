"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import AboutPhoto from "@/components/ui/AboutPhoto";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const FACTS = [
  {
    title: "Formação",
    text: "Graduando em Ciências da Computação na UECE, penúltimo semestre.",
  },
  {
    title: "Origem",
    text: "Nascido em 27 de outubro de 2003, em Fortaleza-CE.",
  },
  {
    title: "Fé",
    text: "Cristão, discípulo de Jesus e músico na minha igreja.",
  },
  {
    title: "Do meu jeito",
    text: "Comunicativo, gosto de ouvir opiniões, ajudar o próximo e trabalhar em equipe.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full border-t border-border bg-bg py-28"
    >
      <div className="mx-auto grid w-[92%] max-w-6xl gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
        <div className="about-reveal">
          <AboutPhoto />
        </div>

        <div className="flex flex-col gap-6">
          <p className="about-reveal font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Sobre mim
          </p>
          <h2 className="about-reveal font-display text-4xl font-bold leading-tight text-fg sm:text-5xl">
            Tecnologia com propósito
          </h2>
          <p className="about-reveal text-lg leading-relaxed text-fg-muted">
            Sou apaixonado por tecnologia e gosto de desenvolver soluções para
            problemas reais das pessoas. Curto o processo de desenvolvimento em
            si — seja mexendo no back-end, no front-end ou automatizando
            tarefas repetitivas para tornar o trabalho de alguém mais leve.
          </p>

          <dl className="grid gap-4 sm:grid-cols-2">
            {FACTS.map((fact) => (
              <div
                key={fact.title}
                className="about-reveal rounded-2xl border border-border bg-surface p-5"
              >
                <dt className="font-display text-sm font-bold text-accent">{fact.title}</dt>
                <dd className="mt-1 text-sm text-fg-muted">{fact.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
