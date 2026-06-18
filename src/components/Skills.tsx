import { motion } from 'framer-motion';

const skills = [
  { name: 'React & TS', level: '96', role: 'Wing-Back', category: 'Frontend' },
  { name: 'UI/UX Design', level: '94', role: 'Crossing', category: 'Design' },
  { name: 'Tailwind CSS', level: '95', role: 'Pace', category: 'Styling' },
  { name: 'Figma & GSAP', level: '90', role: 'Agility', category: 'Creative' },
  { name: 'Django', level: '85', role: 'Center-Back', category: 'Backend' },
  { name: 'Python & SQL', level: '82', role: 'Stamina', category: 'Core' },
];

export default function Skills() {
  return (
    <section className="py-32 bg-pitch-light px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-pitch-dark to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tight">
            Player <span className="text-pitch-neon">Stats</span>
          </h2>
          <div className="hidden md:block text-pitch-line/50 font-mono text-sm uppercase tracking-widest">
            Overall Rating: 92
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="interactive relative group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-1 overflow-hidden transition-transform hover:-translate-y-2 border border-pitch-line/10 hover:border-pitch-neon/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-[glare_0.6s_ease-out_forwards]"></div>
              
              <div className="bg-[#111111] h-full rounded-xl p-6 flex flex-col relative overflow-hidden">
                <div className="absolute -right-6 -top-6 text-9xl font-black text-white/5 opacity-50 rotate-12 transition-transform group-hover:scale-110">
                  {skill.level}
                </div>
                
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="flex flex-col">
                    <span className="text-5xl font-display font-black text-pitch-neon drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">{skill.level}</span>
                    <span className="font-mono text-xs text-pitch-line/50 uppercase tracking-widest mt-1">{skill.role}</span>
                  </div>
                  <span className="font-mono text-[10px] bg-white/10 px-2 py-1 rounded text-white/70 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
                
                <div className="mt-auto relative z-10 border-t border-pitch-line/10 pt-4">
                  <h3 className="text-xl font-bold text-white tracking-wide uppercase">{skill.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes glare {
          0% { left: -100%; opacity: 0; }
          50% { opacity: 1; }
          100% { left: 200%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
