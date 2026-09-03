import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Hero } from "./Hero";

describe("Hero", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("mounts without throwing and exposes a stable anchor id", () => {
    render(<Hero />);
    expect(document.getElementById("hero")).toBeInTheDocument();
  });

  it("renders the headline, subheadline and CTAs once booted", () => {
    render(<Hero />);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("Rhuan Mateus")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Ver projetos" }),
    ).toHaveAttribute("href", "#projetos");
    expect(screen.getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      "#contato",
    );
  });

  it("falls back to a static (non-WebGL) terminal panel in this environment", () => {
    render(<Hero />);

    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(screen.getByText("rhuan@portfolio:~")).toBeInTheDocument();
  });
});
