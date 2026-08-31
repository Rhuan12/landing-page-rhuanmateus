"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { gsap } from "@/lib/gsap";
import { SITE, whatsappHref } from "@/lib/data";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const SECONDARY_LINKS = [
  { label: "E-mail", href: `mailto:${SITE.email}`, Icon: MdEmail },
  { label: "LinkedIn", href: SITE.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: SITE.github, Icon: FaGithub },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
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
      id="contact"
      className="relative w-full overflow-hidden border-t border-border bg-bg py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="relative mx-auto flex w-[92%] max-w-4xl flex-col items-center gap-8 text-center">
        <p className="contact-reveal font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Vamos conversar
        </p>
        <h2 className="contact-reveal font-display text-4xl font-bold leading-tight text-fg sm:text-6xl">
          Tem um projeto em mente?
          <br />
          Bora conversar no WhatsApp.
        </h2>
        <p className="contact-reveal max-w-xl text-lg text-fg-muted">
          Me chama e vamos entender juntos como transformar sua ideia em uma
          solução real — sem enrolação, direto no ponto.
        </p>

        <motion.a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="contact-reveal pulse-ring flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-bold text-accent-contrast"
        >
          <FaWhatsapp className="h-6 w-6" />
          Chamar no WhatsApp
        </motion.a>

        <div className="contact-reveal mt-4 flex items-center gap-6">
          {SECONDARY_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
