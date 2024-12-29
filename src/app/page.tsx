"use client";

import clsx from "clsx";

import Intro from "@/components/Intro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
