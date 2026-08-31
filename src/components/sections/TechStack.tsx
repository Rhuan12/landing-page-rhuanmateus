"use client";

import type { ComponentType, CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiSupabase,
} from "react-icons/si";
import { TECH_STACK } from "@/lib/data";

const ICONS: Record<string, ComponentType<{ className?: string; style?: CSSProperties }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  tailwind: SiTailwindcss,
  supabase: SiSupabase,
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function TechStack() {
  return (
    <section id="stack" className="relative w-full border-t border-border bg-bg py-28">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="mb-14 text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Caixa de ferramentas
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-fg sm:text-5xl">
            Stack &amp; tecnologias
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {TECH_STACK.map((tech) => {
            const Icon = ICONS[tech.icon];
            return (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center transition-colors hover:border-accent/50"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-soft transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <Icon className="h-7 w-7" style={{ color: tech.color }} />
                </span>
                <span className="font-display text-sm font-bold text-fg">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
