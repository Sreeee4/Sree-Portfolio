'use client';

import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Design Thinking',
        skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research', 'Figma', 'Adobe Suite']
    },
    {
        title: 'Frontend Engineering',
        skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
        title: 'Backend & Systems',
        skills: ['Node.js', 'Express', 'Databases', 'API Integration', 'Modular Architecture']
    },
    {
        title: 'Leadership & Mindset',
        skills: ['Agile Execution', 'Team Coaching (AIFF)', 'Strategic Planning', 'Discipline']
    }
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Core Competencies</h2>
                    <p className="text-foreground/60 text-lg">A unified toolkit combining visual design, scalable engineering, and structured leadership.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-primary transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/5 text-foreground/80"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Subtle Background Elements */}
            <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] rounded-full bg-action/5 blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none" />
        </section>
    );
}
