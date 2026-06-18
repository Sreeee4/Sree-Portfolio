import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "ZroothJob",
    tech: "React, Django, PostgreSQL, Tailwind",
    description: "Built a full-stack job platform offering enhanced features beyond Indeed, targeting modern job seekers and recruiters.",
    link: "https://zrooth-jobs-orpin.vercel.app/",
    github: "#"
  },
  {
    title: "TechGear",
    tech: "React, JavaScript, UI/UX Design",
    description: "Engineered an AI-powered e-commerce platform for gaming components. Optimized responsive UI achieving 95% mobile compatibility.",
    link: "https://gamming-ecommerce.vercel.app/",
    github: "#"
  },
  {
    title: "Turf Management System",
    tech: "HTML5, CSS3, JavaScript",
    description: "Built responsive booking website achieving 100% mobile responsiveness. Implemented dynamic availability calendar managing 100+ weekly slots.",
    link: "https://sreeee4.github.io/FootballSaga/",
    github: "https://github.com/Sreeee4/FootballSaga"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="projects" ref={containerRef} className="py-32 bg-pitch-dark relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="px-6 md:px-12 mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-display font-black text-white uppercase"
        >
          Match <span className="text-pitch-neon">Highlights</span>
        </motion.h2>
        <p className="text-pitch-line/50 font-mono mt-4 uppercase tracking-widest">Scroll to view replays</p>
      </div>

      <div className="relative h-[60vh] flex items-center">
        <motion.div 
          style={{ x }}
          className="flex gap-12 px-6 md:px-12 absolute left-0"
        >
          {projects.map((project, index) => (
            <div 
              key={index}
              className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 group interactive relative"
            >
              <div className="relative aspect-video bg-pitch-light border border-pitch-line/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-dark to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-60"></div>
                
                {/* Placeholder for future WebGL effect */}
                <div className="absolute inset-0 flex items-center justify-center font-mono text-pitch-line/20 z-0">
                  [WebGL Canvas Area]
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-pitch-neon font-mono text-sm uppercase tracking-widest mb-2 block">
                    {project.tech}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-display font-black text-white uppercase mb-4">
                    {project.title}
                  </h3>
                  <p className="text-pitch-line/80 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-pitch-neon transition-colors font-mono uppercase text-sm">
                      <ExternalLink size={16} /> View Match
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-pitch-blue transition-colors font-mono uppercase text-sm">
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
