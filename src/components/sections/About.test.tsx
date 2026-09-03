import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";

describe("About", () => {
  it("renders with a stable anchor id", () => {
    render(<About />);
    expect(document.getElementById("sobre")).toBeInTheDocument();
  });

  it("mentions the key professional facts", () => {
    render(<About />);
    expect(screen.getByText(/automação com Python/i)).toBeInTheDocument();
    expect(screen.getByText(/Ciência da Computação \(UECE\)/i)).toBeInTheDocument();
    expect(screen.getByText(/3 anos de experiência/i)).toBeInTheDocument();
  });

  it("mentions faith and music briefly", () => {
    render(<About />);
    expect(screen.getByText(/discípulo de Jesus/i)).toBeInTheDocument();
    expect(screen.getByText(/música/i)).toBeInTheDocument();
  });

  it("signals openness to CLT and freelance", () => {
    render(<About />);
    expect(screen.getAllByText(/CLT/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/freelance/i).length).toBeGreaterThan(0);
  });

  it("renders the profile photo", () => {
    render(<About />);
    expect(screen.getByAltText("Foto de Rhuan Mateus")).toBeInTheDocument();
  });
});
