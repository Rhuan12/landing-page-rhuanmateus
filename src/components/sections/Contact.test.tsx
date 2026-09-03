import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders with a stable anchor id", () => {
    render(<Contact />);
    expect(document.getElementById("contato")).toBeInTheDocument();
  });

  it("links directly to every contact channel with safe rel attributes", () => {
    render(<Contact />);

    const email = screen.getByRole("link", { name: /contato --email/i });
    expect(email).toHaveAttribute(
      "href",
      "mailto:rhuan.m.filgueira@gmail.com",
    );

    const github = screen.getByRole("link", { name: /contato --github/i });
    expect(github).toHaveAttribute("href", "https://github.com/Rhuan12");

    const linkedin = screen.getByRole("link", { name: /contato --linkedin/i });
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rhuan-mateus-187520221/",
    );

    const instagram = screen.getByRole("link", {
      name: /contato --instagram/i,
    });
    expect(instagram).toHaveAttribute(
      "href",
      "https://www.instagram.com/rhuanm12/",
    );

    for (const link of [email, github, linkedin, instagram]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("has no contact form", () => {
    render(<Contact />);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
    expect(screen.queryByRole("form")).not.toBeInTheDocument();
  });
});
