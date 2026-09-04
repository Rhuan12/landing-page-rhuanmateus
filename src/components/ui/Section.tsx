"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const VIEW_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px",
};

export function Section({
  id,
  title,
  className,
  children,
}: {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>(VIEW_OPTIONS);

  const reveal = reducedMotion
    ? ""
    : `transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`;

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 ${reveal} ${className ?? ""}`}
    >
      <div className="mx-auto max-w-5xl">
        {title ? (
          <h2 className="mb-10 font-mono text-sm uppercase tracking-widest text-terminal-green">
            <span className="text-muted">$</span> {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
