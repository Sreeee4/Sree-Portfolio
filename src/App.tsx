import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import { ChevronDown } from 'lucide-react';
import heroImg from './assets/hero.png';

function App() {
  return (
    <>
      <CustomCursor />
      
      <main className="min-h-screen font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-pitch-dark/60 backdrop-blur-md border-b border-white/10 text-white shadow-lg shadow-black/20">
          <div className="font-display font-black text-2xl tracking-tighter uppercase">Sreekanth P G</div>
          <div className="flex gap-8 font-mono text-sm tracking-widest hidden md:flex">
            <a href="#projects" className="interactive vanishing-spray uppercase hover:text-pitch-neon transition-colors">Projects</a>
            <a href="#stats" className="interactive vanishing-spray uppercase hover:text-pitch-neon transition-colors">Stats</a>
            <a href="#experience" className="interactive vanishing-spray uppercase hover:text-pitch-neon transition-colors">Experience</a>
            <a href="#contact" className="interactive vanishing-spray uppercase hover:text-pitch-neon transition-colors">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden bg-pitch-dark">
          {/* Tactical Pitch SVG Background */}
          <div className="fixed inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
            <svg viewBox="0 0 120 80" className="w-full h-full max-w-[1200px] object-contain text-white/50" fill="none" stroke="currentColor" strokeWidth="0.3" xmlns="http://www.w3.org/2000/svg">
              {/* Main Pitch Outline */}
              <rect x="5" y="5" width="110" height="70" />
              
              {/* Halfway Line */}
              <line x1="60" y1="5" x2="60" y2="75" />
              
              {/* Center Circle & Spot */}
              <circle cx="60" cy="40" r="10" />
              <circle cx="60" cy="40" r="0.5" fill="currentColor" />

              {/* Left Penalty Area */}
              <rect x="5" y="18" width="18" height="44" />
              {/* Left Goal Area */}
              <rect x="5" y="30" width="6" height="20" />
              {/* Left Penalty Spot */}
              <circle cx="16" cy="40" r="0.5" fill="currentColor" />
              {/* Left Penalty Arc */}
              <path d="M 23 32 A 10 10 0 0 1 23 48" />
              {/* Left Goal */}
              <rect x="2" y="36" width="3" height="8" />

              {/* Right Penalty Area */}
              <rect x="97" y="18" width="18" height="44" />
              {/* Right Goal Area */}
              <rect x="109" y="30" width="6" height="20" />
              {/* Right Penalty Spot */}
              <circle cx="104" cy="40" r="0.5" fill="currentColor" />
              {/* Right Penalty Arc */}
              <path d="M 97 32 A 10 10 0 0 0 97 48" />
              {/* Right Goal */}
              <rect x="115" y="36" width="3" height="8" />

              {/* Corner Arcs */}
              <path d="M 7 5 A 2 2 0 0 0 5 7" />
              <path d="M 113 5 A 2 2 0 0 1 115 7" />
              <path d="M 7 75 A 2 2 0 0 1 5 73" />
              <path d="M 113 75 A 2 2 0 0 0 115 73" />
            </svg>
          </div>
          
          {/* Subtle gradient so text still pops */}
          <div className="absolute inset-0 bg-gradient-to-t from-pitch-dark to-transparent opacity-80 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10 mt-20">
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-pitch-neon font-mono mb-4 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-pitch-neon block"></span>
              THE MODERN FULL-BACK
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, type: 'spring' }}
              className="text-7xl md:text-9xl font-display font-black leading-[0.9] tracking-tighter text-white"
            >
              FRONT-END <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pitch-neon to-pitch-blue">
                TACTICIAN
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-8 text-xl text-pitch-line/70 max-w-2xl font-light"
            >
              Crafting immersive user interfaces and high-performance frontend experiences with a deep focus on UI/UX design. 
              Currently deploying real-world solutions at LawCrust Global Consulting.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-pitch-line/50 font-mono text-sm"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-pitch-neon to-transparent"></div>
            <span className="uppercase tracking-widest writing-vertical">Scroll to kick off</span>
            <ChevronDown className="animate-bounce text-pitch-neon mt-4" size={20} />
          </motion.div>
        </section>

        <Projects />
        <Skills />
        <Experience />
        <Contact />

      </main>
    </>
  );
}

export default App;
