import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
        <p className="font-mono text-sm text-terminal-green">
          {"> initializing..."}
        </p>
        <h1 className="font-mono text-3xl font-bold sm:text-5xl">
          Rhuan Mateus
        </h1>
        <p className="max-w-xl text-muted">
          Desenvolvedor fullstack com foco em automação com Python.
        </p>
      </section>

      <About />
    </main>
  );
}
