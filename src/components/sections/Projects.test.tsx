import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders with a stable anchor id", () => {
    render(<Projects />);
    expect(document.getElementById("projetos")).toBeInTheDocument();
  });

  it("renders all 5 projects in the spec order", () => {
    render(<Projects />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual([
      "MW Homes KC",
      "Gunnar MF Engenharia",
      "Sistema de Controle de Pagamentos e Recebimentos",
      "Sistema de Impressão de Etiquetas",
      "Sistema de RSS",
    ]);
  });

  it("gives public projects a working external link", () => {
    render(<Projects />);
    const mwLink = screen.getByRole("link", {
      name: /visitar site de mw homes kc/i,
    });
    expect(mwLink).toHaveAttribute("href", "https://www.mwhomeskc.com/");
    expect(mwLink).toHaveAttribute("target", "_blank");

    const gunnarLink = screen.getByRole("link", {
      name: /visitar site de gunnar mf engenharia/i,
    });
    expect(gunnarLink).toHaveAttribute(
      "href",
      "https://www.gunnarmfengenharia.com.br/",
    );
  });

  it("does not render a link for private projects", () => {
    render(<Projects />);
    expect(
      screen.queryByRole("link", { name: /controle de pagamentos/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /impressão de etiquetas/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /sistema de rss/i }),
    ).not.toBeInTheDocument();
  });
});
