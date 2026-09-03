import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { BootIntro } from "./BootIntro";

describe("BootIntro", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("reveals boot lines over time and then calls onDone", () => {
    const onDone = vi.fn();
    render(<BootIntro reducedMotion={false} onDone={onDone} />);

    expect(onDone).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(260 * 3);
    });
    expect(screen.getByText("> loading terminal.exe...")).toBeInTheDocument();
    expect(onDone).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(600);
    });
    expect(onDone).toHaveBeenCalledTimes(1);
  });

  it("skips straight to done when reduced motion is preferred", () => {
    const onDone = vi.fn();
    render(<BootIntro reducedMotion onDone={onDone} />);

    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(onDone).toHaveBeenCalledTimes(1);
  });
});
