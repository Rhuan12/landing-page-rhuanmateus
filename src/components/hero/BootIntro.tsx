"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> initializing kernel...",
  "> mounting filesystem...",
  "> loading terminal.exe...",
];

const LINE_INTERVAL_MS = 260;
const HOLD_AFTER_MS = 500;
const REDUCED_MOTION_HOLD_MS = 150;

export function BootIntro({
  reducedMotion,
  onDone,
}: {
  reducedMotion: boolean;
  onDone: () => void;
}) {
  const [visibleLines, setVisibleLines] = useState(
    reducedMotion ? BOOT_LINES.length : 0,
  );
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, delay: number) => {
      timeouts.push(setTimeout(() => !cancelled && fn(), delay));
    };

    if (reducedMotion) {
      schedule(() => {
        setHidden(true);
        onDone();
      }, REDUCED_MOTION_HOLD_MS);
    } else {
      BOOT_LINES.forEach((_, index) => {
        schedule(
          () => setVisibleLines(index + 1),
          LINE_INTERVAL_MS * (index + 1),
        );
      });
      schedule(() => {
        setHidden(true);
        onDone();
      }, LINE_INTERVAL_MS * BOOT_LINES.length + HOLD_AFTER_MS);
    }

    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-2 bg-background font-mono text-sm text-terminal-green"
    >
      {BOOT_LINES.slice(0, visibleLines).map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}
