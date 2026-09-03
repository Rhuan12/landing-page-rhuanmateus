import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skills } from "./Skills";

describe("Skills", () => {
  it("renders with a stable anchor id", () => {
    render(<Skills />);
    expect(document.getElementById("skills")).toBeInTheDocument();
  });

  it("renders every technology from the spec", () => {
    render(<Skills />);
    const expected = [
      "Python",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React",
      "Node.js",
      "Tailwind",
      "Supabase",
      "Git",
      "Automação",
    ];
    for (const tech of expected) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  it("groups technologies under category headings", () => {
    render(<Skills />);
    expect(screen.getByText("Linguagens")).toBeInTheDocument();
    expect(screen.getByText("Frameworks & Bibliotecas")).toBeInTheDocument();
    expect(screen.getByText("Dados & Infra")).toBeInTheDocument();
    expect(screen.getByText("Ferramentas & Práticas")).toBeInTheDocument();
  });
});
