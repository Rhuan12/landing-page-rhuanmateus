export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "MW Homes KC",
    description:
      "Sistema de anúncio de aluguel de casas para o mercado de Kansas City (EUA).",
    tags: ["Next.js", "React", "Tailwind"],
    href: "https://www.mwhomeskc.com/",
  },
  {
    title: "Gunnar MF Engenharia",
    description: "Landing page institucional para escritório de engenharia.",
    tags: ["Next.js", "React", "Tailwind"],
    href: "https://www.gunnarmfengenharia.com.br/",
  },
  {
    title: "Sistema de Controle de Pagamentos e Recebimentos",
    description:
      "Controle de orçamentos, solicitação de pedidos, controle de pagamentos e dashboards.",
    tags: ["Python", "React", "Supabase"],
  },
  {
    title: "Sistema de Impressão de Etiquetas",
    description:
      "Calcula a quantidade exata de etiquetas a imprimir para uma padaria.",
    tags: ["Python", "Streamlit", "Supabase"],
  },
  {
    title: "Sistema de RSS",
    description:
      "Agrega fontes RSS e exibe em cards com ações de marcar para ler depois, importante, arquivar e marcar como lido.",
    tags: ["Python", "React", "Supabase"],
  },
];
