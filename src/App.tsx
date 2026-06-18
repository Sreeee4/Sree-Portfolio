import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import { ChevronDown } from 'lucide-react';

function App() {
  return (
    <>
      <CustomCursor />
      
      <main className="min-h-screen font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">
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
          {/* Pitch SVG Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center">
            <svg width="120%" height="120%" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-pitch-neon opacity-20">
              <rect x="5" y="5" width="90" height="120" stroke="currentColor" strokeWidth="0.5"/>
              <line x1="5" y1="65" x2="95" y2="65" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="50" cy="65" r="15" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="25" y="5" width="50" height="20" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="35" y="5" width="30" height="8" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M 40 25 A 10 10 0 0 0 60 25" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="25" y="105" width="50" height="20" stroke="currentColor" strokeWidth="0.5"/>
              <rect x="35" y="117" width="30" height="8" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M 40 105 A 10 10 0 0 1 60 105" stroke="currentColor" strokeWidth="0.5"/>
            </svg>
          </div>

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
