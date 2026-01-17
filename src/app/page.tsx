"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <Navbar />
      <ScrollyCanvas onLoaded={() => setIsLoading(false)} />
      <Overlay />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
