import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders a copyright notice", () => {
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Rhuan Mateus`)),
    ).toBeInTheDocument();
  });

  it("links to every section anchor", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Sobre" })).toHaveAttribute(
      "href",
      "#sobre",
    );
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute(
      "href",
      "#skills",
    );
    expect(screen.getByRole("link", { name: "Projetos" })).toHaveAttribute(
      "href",
      "#projetos",
    );
    expect(screen.getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      "#contato",
    );
  });

  it("repeats the contact channels", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "github" })).toHaveAttribute(
      "href",
      "https://github.com/Rhuan12",
    );
  });
});
