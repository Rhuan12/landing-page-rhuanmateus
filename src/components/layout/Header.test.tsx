import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("links to every real section anchor in the desktop nav", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: "Navegação principal" });
    expect(within(nav).getByRole("link", { name: "Sobre" })).toHaveAttribute(
      "href",
      "#sobre",
    );
    expect(within(nav).getByRole("link", { name: "Skills" })).toHaveAttribute(
      "href",
      "#skills",
    );
    expect(
      within(nav).getByRole("link", { name: "Projetos" }),
    ).toHaveAttribute("href", "#projetos");
    expect(within(nav).getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      "#contato",
    );
  });

  it("opens the mobile menu on hamburger click and closes it after selecting a link", async () => {
    const user = userEvent.setup();
    render(<Header />);

    expect(screen.queryByRole("navigation", { name: "Navegação mobile" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));

    const mobileNav = screen.getByRole("navigation", {
      name: "Navegação mobile",
    });
    expect(mobileNav).toBeInTheDocument();

    await user.click(within(mobileNav).getByRole("link", { name: "Skills" }));

    expect(
      screen.queryByRole("navigation", { name: "Navegação mobile" }),
    ).not.toBeInTheDocument();
  });
});
