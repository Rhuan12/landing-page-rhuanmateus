import { renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useInView } from "./useInView";

type ObserverCallback = (
  entries: Pick<IntersectionObserverEntry, "isIntersecting">[],
) => void;

describe("useInView", () => {
  let observe: ReturnType<typeof vi.fn>;
  let disconnect: ReturnType<typeof vi.fn>;
  let callback: ObserverCallback;
  let originalIntersectionObserver: typeof IntersectionObserver | undefined;

  beforeEach(() => {
    observe = vi.fn();
    disconnect = vi.fn();
    originalIntersectionObserver = globalThis.IntersectionObserver;

    class MockIntersectionObserver {
      constructor(cb: ObserverCallback) {
        callback = cb;
      }
      observe = observe;
      disconnect = disconnect;
      unobserve = vi.fn();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalThis.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterEach(() => {
    globalThis.IntersectionObserver = originalIntersectionObserver as never;
  });

  it("starts false, observes the node, then flips to true and disconnects once intersecting", () => {
    let node!: HTMLDivElement;
    const { result, rerender } = renderHook(() => {
      const view = useInView<HTMLDivElement>();
      if (!node) node = document.createElement("div");
      view.ref.current = node;
      return view;
    });

    expect(result.current.inView).toBe(false);

    rerender();
    expect(observe).toHaveBeenCalledWith(node);

    callback([{ isIntersecting: true }]);
    rerender();

    expect(result.current.inView).toBe(true);
    expect(disconnect).toHaveBeenCalled();
  });
});
