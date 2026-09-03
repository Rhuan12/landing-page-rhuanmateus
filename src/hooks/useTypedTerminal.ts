"use client";

import { useEffect, useMemo, useState } from "react";

export type TerminalStep = { command: string; output: string[] };
export type TerminalLine = { type: "command" | "output"; text: string };

const TYPE_SPEED_MS = 45;
const OUTPUT_LINE_DELAY_MS = 200;
const STEP_PAUSE_MS = 1100;
const MAX_HISTORY_LINES = 12;

function toStaticLines(steps: TerminalStep[]): TerminalLine[] {
  return steps
    .flatMap((step) => [
      { type: "command" as const, text: step.command },
      ...step.output.map((line) => ({ type: "output" as const, text: line })),
    ])
    .slice(-MAX_HISTORY_LINES);
}

export function useTypedTerminal(
  steps: TerminalStep[],
  reducedMotion: boolean,
) {
  const staticLines = useMemo(() => toStaticLines(steps), [steps]);

  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) => {
      timeouts.push(setTimeout(() => !cancelled && fn(), delay));
    };

    let stepIndex = 0;

    function runStep() {
      const step = steps[stepIndex % steps.length];
      setCurrentCommand("");
      let charIndex = 0;

      function typeChar() {
        charIndex += 1;
        setCurrentCommand(step.command.slice(0, charIndex));
        if (charIndex < step.command.length) {
          schedule(typeChar, TYPE_SPEED_MS);
        } else {
          schedule(commitCommand, STEP_PAUSE_MS / 3);
        }
      }

      function commitCommand() {
        setHistory((prev) =>
          [...prev, { type: "command" as const, text: step.command }].slice(
            -MAX_HISTORY_LINES,
          ),
        );
        setCurrentCommand("");
        appendOutputLine(0);
      }

      // `outputIndex` is passed explicitly (not read from a shared closure
      // variable) because the setHistory updater below can run after this
      // function has already moved on to schedule the next line.
      function appendOutputLine(outputIndex: number) {
        if (outputIndex >= step.output.length) {
          stepIndex += 1;
          schedule(runStep, STEP_PAUSE_MS);
          return;
        }
        const text = step.output[outputIndex];
        setHistory((prev) =>
          [...prev, { type: "output" as const, text }].slice(
            -MAX_HISTORY_LINES,
          ),
        );
        schedule(() => appendOutputLine(outputIndex + 1), OUTPUT_LINE_DELAY_MS);
      }

      schedule(typeChar, TYPE_SPEED_MS);
    }

    runStep();

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, [steps, reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setCursorVisible((visible) => !visible), 500);
    return () => clearInterval(id);
  }, [reducedMotion]);

  if (reducedMotion) {
    return { history: staticLines, currentCommand: "", cursorVisible: false };
  }
  return { history, currentCommand, cursorVisible };
}
