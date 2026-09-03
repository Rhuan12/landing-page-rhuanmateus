import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TerminalPanel } from "./TerminalPanel";

describe("TerminalPanel", () => {
  it("renders the terminal chrome and the full transcript when motion is reduced", () => {
    render(<TerminalPanel reducedMotion />);
    expect(screen.getByText("rhuan@portfolio:~")).toBeInTheDocument();
    expect(screen.getByText("$ whoami")).toBeInTheDocument();
    expect(screen.getByText("rhuan-mateus")).toBeInTheDocument();
  });
});
