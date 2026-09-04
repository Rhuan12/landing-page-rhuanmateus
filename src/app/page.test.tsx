import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("renders the name and headline", () => {
    render(<Home />);
    expect(screen.getByText("Rhuan Mateus")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Desenvolvedor fullstack — de landing pages e sites a sistemas de automação em Python\./,
      ),
    ).toBeInTheDocument();
  });
});
