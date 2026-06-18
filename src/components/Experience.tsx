import { useRef } from 'react';
import { motion } from 'framer-motion';

const careerPath = [
  {
    minute: "0'",
    type: "academy",
    title: "Secondary School Certificate (10th CBSE)",
    organization: "Kendriya Vidyalaya Bhandup",
    date: "2018",
    description: "Joined the youth academy. Built the foundational skills for logical thinking and problem solving.",
  },
  {
    minute: "15'",
    type: "academy",
    title: "Higher Secondary Certificate (12th CBSE)",
    organization: "Kendriya Vidyalaya Bhandup",
    date: "2020",
    description: "Advanced to the senior youth squad. Focused on core sciences and mathematics.",
  },
  {
    minute: "30'",
    type: "academy",
    title: "Bachelor of Science in Computer Science",
    organization: "Mulund College of Commerce",
    date: "2020 - 2023",
    description: "Under-21s Development. Mastered core programming, databases, and web development fundamentals.",
  },
  {
    minute: "45'",
    type: "first-team",
    title: "Assistant Teacher",
    organization: "Shree Narayana Guru High School",
    date: "Jul 2023 - Jun 2024",
    description: "First-team debut. Delivered computer science instruction to 150+ students, creating interactive lesson plans and mentoring in programming fundamentals.",
  },
  {
    minute: "60'",
    type: "academy",
    title: "Master of Computer Applications (M.C.A.)",
    organization: "SIES College of Management Studies",
    date: "2024 - 2026",
    description: "Elite tactical training. Specializing in advanced software engineering, system architecture, and modern full-stack frameworks.",
  },
  {
    minute: "90'",
    type: "first-team",
    title: "Full Stack Developer Intern",
    organization: "LawCrust Global Consulting Ltd",
    date: "Jan 2026 - Present",
    description: "Star Player. Engineering robust admin panels, dynamic UI workflows, and modernizing legal-tech infrastructure with React, Tailwind, and Django.",
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" ref={containerRef} className="py-32 px-6 md:px-12 relative overflow-hidden bg-pitch-dark">
      {/* Background Tactical Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="exp-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-pitch-blue"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#exp-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-black text-white mb-24 uppercase"
        >
          Career <span className="text-pitch-neon">Mode</span>
        </motion.h2>

        <div className="relative border-l-2 border-pitch-line/20 ml-4 md:ml-12 space-y-20">
          {careerPath.map((item, index) => {
            const isAcademy = item.type === "academy";
            const themeColor = isAcademy ? "text-pitch-blue" : "text-pitch-neon";
            const borderColor = isAcademy ? "border-pitch-blue" : "border-pitch-neon";

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 group interactive"
              >
                {/* Timeline Node */}
                <div className={`absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-pitch-dark border-2 ${borderColor} transition-transform duration-300 group-hover:scale-150 group-hover:bg-pitch-neon`}></div>
                
                {/* Minute Marker */}
                <div className={`absolute -left-16 md:-left-24 top-1 font-display font-black text-2xl ${themeColor} opacity-50 group-hover:opacity-100 transition-opacity`}>
                  {item.minute}
                </div>

                {/* Content Card */}
                <div className="bg-pitch-light/50 border border-pitch-line/10 p-8 hover:border-pitch-line/30 transition-colors backdrop-blur-sm relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${isAcademy ? 'from-pitch-blue to-transparent' : 'from-pitch-neon to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">{item.title}</h3>
                    <span className="font-mono text-sm text-pitch-line/50 mt-2 md:mt-0">{item.date}</span>
                  </div>
                  
                  <div className={`font-mono text-sm ${themeColor} mb-6 uppercase tracking-widest`}>
                    {item.organization} <span className="text-pitch-line/30 ml-2">[{isAcademy ? 'Academy' : 'First Team'}]</span>
                  </div>
                  
                  <p className="text-pitch-line/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
