import type { TerminalStep } from "@/hooks/useTypedTerminal";

export const terminalSteps: TerminalStep[] = [
  { command: "whoami", output: ["rhuan-mateus"] },
  {
    command: "cat about.txt",
    output: [
      "fullstack dev · sites, sistemas & automação",
      "penúltimo semestre — Ciência da Computação (UECE)",
    ],
  },
  {
    command: "ls projects/",
    output: [
      "mw-homes-kc/",
      "gunnar-mf-engenharia/",
      "controle-pagamentos/",
      "etiquetas-padaria/",
      "sistema-rss/",
    ],
  },
];
