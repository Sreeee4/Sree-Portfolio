import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import DesignProcess from '@/components/sections/DesignProcess';
import FootballLeadership from '@/components/sections/FootballLeadership';
import Contact from '@/components/sections/Contact';

import CursorRadar from '@/components/effects/CursorRadar';
import StaminaScroll from '@/components/effects/StaminaScroll';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/50 selection:text-white flex flex-col items-center relative">
      <StaminaScroll />
      <CursorRadar />

      <div className="w-full flex-grow flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DesignProcess />
        <FootballLeadership />
        <Contact />
      </div>
    </main>
  );
}
