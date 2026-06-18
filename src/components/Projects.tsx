import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

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
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section id="projects" ref={containerRef} className="h-[300vh] bg-pitch-dark relative">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-20">
        <div className="px-6 md:px-12 mb-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-black text-white uppercase"
          >
            Match <span className="text-pitch-neon">Highlights</span>
          </motion.h2>
          <p className="text-pitch-line/50 font-mono mt-4 uppercase tracking-widest">Scroll down to view replays</p>
        </div>

        <div className="relative h-[60vh] flex items-center">
          <motion.div 
            style={{ x }}
            className="flex gap-8 px-6 md:px-12 absolute left-0"
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group interactive relative"
              >
                <div className="relative aspect-[16/10] bg-pitch-light border border-pitch-line/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-pitch-neon/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch-dark via-pitch-dark/50 to-transparent opacity-90 z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
                  
                  {/* Placeholder for future WebGL effect */}
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-pitch-line/10 z-0">
                    [WebGL Canvas Area]
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-pitch-neon font-mono text-xs md:text-sm uppercase tracking-widest mb-3 block">
                      {project.tech}
                    </span>
                    <h3 className="text-3xl md:text-6xl font-display font-black text-white uppercase mb-4 leading-none">
                      {project.title}
                    </h3>
                    <p className="text-pitch-line/70 font-light mb-8 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                    
                    <div className="flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-pitch-neon transition-colors font-mono uppercase text-sm tracking-wider">
                        <ExternalLink size={18} /> View Match
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-pitch-blue transition-colors font-mono uppercase text-sm tracking-wider">
                        <GitBranch size={18} /> Source
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
