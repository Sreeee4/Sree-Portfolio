'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: 'Gaming Ecommerce',
        description: 'A full-stack ecommerce platform tailored for gaming peripherals with secure auth and payment flows.',
        role: 'Full-Stack Developer',
        tech: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'],
        live: 'https://gamming-ecommerce.vercel.app/',
        github: 'https://github.com/Sreeee4/gamming-ecommerce',
        metrics: ['Reduced cart abandonment', '90+ Lighthouse Score']
    },
    {
        title: 'FootballSaga',
        description: 'An interactive frontend saga showcasing football statistics and historical data visualization paradigms.',
        role: 'UI/UX Developer',
        tech: ['React.js', 'CSS Modules', 'Framer Motion'],
        live: 'https://sreeee4.github.io/FootballSaga/',
        github: 'https://github.com/Sreeee4/FootballSaga',
        metrics: ['High engagement duration', 'Interactive UI elements']
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Case Studies</h2>
                    <p className="text-foreground/60 text-lg">Engineering solutions bridging aesthetic design with performant scalable systems.</p>
                </motion.div>

                <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors overflow-hidden"
                        >
                            <div className="w-full md:w-5/12 flex-shrink-0 relative">
                                <div className="aspect-video w-full rounded-xl overflow-hidden bg-primary/10 border border-white/10 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-sm text-foreground/70">{project.live}</p>
                                </div>
                            </div>

                            <div className="w-full md:w-7/12 flex flex-col justify-center">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                    <div className="text-primary text-sm font-medium mb-4">{project.role}</div>
                                    <p className="text-foreground/70 leading-relaxed mb-6">{project.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs rounded-full border border-white/10 bg-black/20 text-foreground/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                                        <Button variant="action" size="sm" className="gap-2">
                                            Live App <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" size="sm" className="gap-2">
                                            Source <Github className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
