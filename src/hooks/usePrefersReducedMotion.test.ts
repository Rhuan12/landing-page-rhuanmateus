import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function mockMatchMedia(initialMatches: boolean) {
  let changeHandler: ((event: { matches: boolean }) => void) | null = null;
  const mql = {
    matches: initialMatches,
    addEventListener: vi.fn((_event: string, handler: typeof changeHandler) => {
      changeHandler = handler;
    }),
    removeEventListener: vi.fn(),
  };
  vi.stubGlobal("matchMedia", vi.fn().mockReturnValue(mql));
  return {
    fire: (matches: boolean) => {
      mql.matches = matches;
      changeHandler?.({ matches });
    },
  };
}

describe("usePrefersReducedMotion", () => {
  it("is false when the system has no reduced-motion preference", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  it("is true when the system prefers reduced motion", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates live when the preference changes", () => {
    const { fire } = mockMatchMedia(false);
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);

    act(() => fire(true));
    expect(result.current).toBe(true);
  });
});
