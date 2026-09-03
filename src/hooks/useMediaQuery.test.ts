import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useMediaQuery } from "./useMediaQuery";

function mockMatchMedia(initialMatches: boolean) {
  let changeHandler: ((event: { matches: boolean }) => void) | null = null;
  const mql = {
    matches: initialMatches,
    addEventListener: vi.fn((_event: string, handler: typeof changeHandler) => {
      changeHandler = handler;
    }),
    removeEventListener: vi.fn(),
  };
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockReturnValue(mql),
  );
  return {
    fire: (matches: boolean) => {
      mql.matches = matches;
      changeHandler?.({ matches });
    },
  };
}

describe("useMediaQuery", () => {
  it("reflects the initial match state", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useMediaQuery("(max-width: 767px)"));
    expect(result.current).toBe(true);
  });

  it("updates when the media query changes", () => {
    const { fire } = mockMatchMedia(false);
    const { result } = renderHook(() => useMediaQuery("(max-width: 767px)"));
    expect(result.current).toBe(false);

    act(() => fire(true));
    expect(result.current).toBe(true);
  });
});
