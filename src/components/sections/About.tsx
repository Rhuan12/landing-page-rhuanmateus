import Image from "next/image";
import { Section } from "@/components/ui/Section";

const facts = [
  "Fullstack · sites, sistemas e automação",
  "Penúltimo semestre — Ciência da Computação (UECE)",
  "3 anos de experiência",
  "Aberto a CLT e freelance",
];

export function About() {
  return (
    <Section id="sobre" title="sobre">
      <div className="grid gap-10 sm:grid-cols-[220px_1fr] sm:items-start sm:gap-12">
        <div className="mx-auto w-40 shrink-0 overflow-hidden rounded-lg border border-terminal-green/40 bg-background-elevated shadow-[0_0_0_4px_rgba(63,185,80,0.08)] sm:mx-0 sm:w-full">
          <Image
            src="/images/rhuan.jpeg"
            alt="Foto de Rhuan Mateus"
            width={480}
            height={600}
            className="aspect-[4/5] w-full object-cover"
            priority={false}
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4 text-base leading-relaxed text-foreground/90">
            <p>
              Sou desenvolvedor fullstack, cursando o penúltimo semestre de
              Ciência da Computação na UECE.
              Nos últimos 3 anos venho construindo sistemas que vão de
              landing pages e sites institucionais a ferramentas internas que
              automatizam tarefas repetitivas e economizam tempo de quem
              trabalha nelas.
            </p>
            <p>
              Fora do código, sou cristão — discípulo de Jesus — e isso guia
              bastante como encaro trabalho e relacionamentos. Também gosto
              de música, então tem uma boa chance de eu estar com um fone no
              ouvido enquanto resolvo um bug.
            </p>
            <p>
              Estou aberto tanto a oportunidades CLT quanto a projetos
              freelance/PJ — se o seu time (ou seu produto) precisa de
              alguém que curte tanto escrever código quanto automatizar o
              que dá trabalho manual, bora conversar.
            </p>
          </div>

          <ul className="flex flex-wrap gap-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="rounded-full border border-border bg-background-elevated px-3 py-1 font-mono text-xs text-muted"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
