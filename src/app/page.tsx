import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
