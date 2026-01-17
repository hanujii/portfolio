import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full">
      <Navbar />
      <ScrollyCanvas />
      <Overlay />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
