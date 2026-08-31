export const SITE = {
  name: "Rhuan Mateus",
  role: "Desenvolvedor Front-end / Full-stack",
  // TODO: substitua pelo número real no formato DDI+DDD+numero, apenas dígitos.
  whatsappNumber: "5585991288998",
  whatsappMessage: "Olá Rhuan! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  email: "rhuan.m.filgueira@gmail.com",
  linkedin: "https://www.linkedin.com/in/rhuanmateus",
  github: "https://github.com/rhuanmateus",
};

export const whatsappHref = (message = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export type TechItem = {
  name: string;
  icon: string;
  color: string;
};

export const TECH_STACK: TechItem[] = [
  { name: "React", icon: "react", color: "#61DAFB" },
  { name: "Next.js", icon: "nextjs", color: "#F2F2F0" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Python", icon: "python", color: "#3776AB" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#38BDF8" },
  { name: "Supabase", icon: "supabase", color: "#3ECF8E" },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "gunnar-mf-engenharia",
    title: "Gunnar MF Engenharia",
    description:
      "Landing page institucional para empresa de regularização e avaliação de imóveis em Fortaleza, com CTAs integrados via WhatsApp.",
    stack: ["React 19", "Vite", "Tailwind CSS"],
    image: "/images/projects/gunnar-mf-engenharia.jpg",
  },
  {
    slug: "kingdom-modern-homes",
    title: "Kingdom Modern Homes",
    description:
      "Landing page para construtora de casas de alto padrão, replicando design fornecido pelo cliente com fidelidade visual.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/kingdom-modern-homes.jpg",
  },
  {
    slug: "importantist",
    title: "Importantist",
    description:
      "Aplicação de gestão de tarefas com atividades recorrentes, importação em massa via Excel, análise por IA (Gemini API), suporte multilíngue (PT/EN/ES), controle de acesso por papel e relatórios em PDF.",
    stack: ["Next.js", "TypeScript", "Gemini API"],
    image: "/images/projects/importantist.jpg",
  },
  {
    slug: "plataforma-imobiliaria",
    title: "Plataforma Imobiliária",
    description:
      "Plataforma para imobiliárias com CRUD de imóveis, upload de fotos, gestão de leads via WhatsApp, Google Analytics e Meta Pixel.",
    stack: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "/images/projects/plataforma-imobiliaria.jpg",
  },
  {
    slug: "gestao-financeira-pessoal",
    title: "Gestão Financeira Pessoal",
    description:
      "Aplicação para controle de finanças pessoais, com lançamentos, categorias e visão consolidada do orçamento.",
    stack: ["Next.js", "Supabase"],
    image: "/images/projects/gestao-financeira-pessoal.jpg",
  },
  {
    slug: "gestao-de-projetos",
    title: "Gestão de Projetos",
    description:
      "Sistema de controle de horas trabalhadas com classificação automática (Normal/Extra/Noturna/Feriado) e geração de períodos de faturamento.",
    stack: ["Supabase", "React"],
    image: "/images/projects/gestao-de-projetos.jpg",
  },
];
