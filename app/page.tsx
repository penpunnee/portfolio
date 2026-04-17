import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BentoGrid from "./components/BentoGrid";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main style={{ background: "var(--bg-base)", minHeight: "100vh" }}>
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <Navbar />
      <Hero />
      <About />
      <BentoGrid />
      <Skills />
      <Contact />
    </main>
  );
}
