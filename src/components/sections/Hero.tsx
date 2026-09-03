"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { isWebglAvailable } from "@/lib/webgl";
import { BootIntro } from "@/components/hero/BootIntro";
import { TerminalPanel } from "@/components/hero/TerminalPanel";
import { CanvasErrorBoundary } from "@/components/hero/CanvasErrorBoundary";

const TerminalScene = dynamic(
  () => import("@/components/hero/TerminalScene").then((m) => m.TerminalScene),
  { ssr: false },
);

function StaticTerminalFallback({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <div className="flex h-full items-center justify-center">
      <TerminalPanel reducedMotion={reducedMotion} />
    </div>
  );
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [webglOk, setWebglOk] = useState(false);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // WebGL support can only be probed client-side; deferring to an effect
    // keeps the server/first-paint markup (the fallback panel) consistent
    // and avoids a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWebglOk(isWebglAvailable());
  }, []);

  const handleBootDone = useCallback(() => setBooted(true), []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden px-6 py-20"
    >
      <BootIntro reducedMotion={reducedMotion} onDone={handleBootDone} />

      <div
        className={`flex w-full max-w-5xl flex-col-reverse items-center gap-10 transition-opacity duration-500 sm:flex-row sm:justify-between ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
          <p className="font-mono text-sm text-terminal-green">
            {"> initializing..."}
          </p>
          <h1 className="font-mono text-3xl font-bold sm:text-5xl">
            Rhuan Mateus
          </h1>
          <p className="max-w-md text-muted">
            Desenvolvedor fullstack com foco em automação com Python.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <a
              href="#projetos"
              className="rounded-md border border-terminal-green bg-terminal-green/10 px-4 py-2 font-mono text-sm text-terminal-green transition-colors hover:bg-terminal-green/20"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-md border border-border px-4 py-2 font-mono text-sm text-muted transition-colors hover:border-amber hover:text-amber"
            >
              Contato
            </a>
          </div>
        </div>

        <div className="h-[300px] w-full max-w-md sm:h-[380px]">
          {!booted ? null : webglOk ? (
            <CanvasErrorBoundary
              fallback={<StaticTerminalFallback reducedMotion={reducedMotion} />}
            >
              <TerminalScene reducedMotion={reducedMotion} isMobile={isMobile} />
            </CanvasErrorBoundary>
          ) : (
            <StaticTerminalFallback reducedMotion={reducedMotion} />
          )}
        </div>
      </div>
    </section>
  );
}
