import { renderHook, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useTypedTerminal, type TerminalStep } from "./useTypedTerminal";

const steps: TerminalStep[] = [
  { command: "whoami", output: ["rhuan-mateus"] },
  { command: "ls projects/", output: ["a/", "b/"] },
];

describe("useTypedTerminal", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the full static transcript immediately when reduced motion is preferred", () => {
    const { result } = renderHook(() => useTypedTerminal(steps, true));

    expect(result.current.currentCommand).toBe("");
    expect(result.current.cursorVisible).toBe(false);
    expect(result.current.history).toEqual([
      { type: "command", text: "whoami" },
      { type: "output", text: "rhuan-mateus" },
      { type: "command", text: "ls projects/" },
      { type: "output", text: "a/" },
      { type: "output", text: "b/" },
    ]);
  });

  it("types the first command one character at a time when motion is allowed", () => {
    const { result } = renderHook(() => useTypedTerminal(steps, false));

    expect(result.current.currentCommand).toBe("");

    act(() => {
      vi.advanceTimersByTime(45);
    });
    expect(result.current.currentCommand).toBe("w");

    act(() => {
      vi.advanceTimersByTime(45 * 5);
    });
    expect(result.current.currentCommand).toBe("whoami");
  });

  it("moves through all output lines of a step without losing or duplicating any", () => {
    const { result } = renderHook(() => useTypedTerminal(steps, false));

    act(() => {
      vi.advanceTimersByTime(45 * 12 * 200);
    });

    const secondStepOutputs = result.current.history.filter(
      (line) => line.type === "output",
    );
    expect(secondStepOutputs.length).toBeGreaterThan(0);
    expect(secondStepOutputs.every((line) => line.text !== undefined)).toBe(
      true,
    );
  });

  it("commits the command to history and reveals its output after typing finishes", () => {
    const { result } = renderHook(() => useTypedTerminal(steps, false));

    act(() => {
      vi.advanceTimersByTime(45 * 6 + 400 + 200);
    });

    expect(result.current.history).toEqual([
      { type: "command", text: "whoami" },
      { type: "output", text: "rhuan-mateus" },
    ]);
  });
});
