"use client";

import { useTypedTerminal } from "@/hooks/useTypedTerminal";
import { terminalSteps } from "@/lib/terminalSteps";

export function TerminalPanel({ reducedMotion }: { reducedMotion: boolean }) {
  const { history, currentCommand, cursorVisible } = useTypedTerminal(
    terminalSteps,
    reducedMotion,
  );

  return (
    <div className="w-[280px] select-none overflow-hidden rounded-lg border border-terminal-green/30 bg-[#0a0e14] font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/50 sm:w-[340px] sm:text-xs">
      <div className="flex items-center gap-1.5 border-b border-border/60 bg-background-elevated px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-terminal-green-dim/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 text-[10px] text-muted">rhuan@portfolio:~</span>
      </div>
      <div className="flex h-44 flex-col gap-1 overflow-hidden px-3 py-3 sm:h-52">
        {history.map((line, index) => (
          <p
            key={index}
            className={
              line.type === "command" ? "text-terminal-green" : "text-foreground/70"
            }
          >
            {line.type === "command" ? `$ ${line.text}` : line.text}
          </p>
        ))}
        {!reducedMotion ? (
          <p className="text-terminal-green">
            {"$ "}
            {currentCommand}
            <span className={cursorVisible ? "opacity-100" : "opacity-0"}>
              ▌
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
