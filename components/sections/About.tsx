'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Designer. Developer.<br />
                            <span className="text-primary italic font-light">& Athlete.</span>
                        </h2>

                        <p className="text-foreground/70 text-lg font-light leading-relaxed">
                            I am a 23-year-old postgraduate pursuing my MCA at SIES College of Management Studies, having completed my BSc in Computer Science with a CGPA of 8.14. My journey started in Kendriya Vidyalaya, shaping my core discipline early on.
                        </p>

                        <p className="text-foreground/70 text-lg font-light leading-relaxed">
                            Beyond the screen, I am a semi-professional footballer and an AIFF D-licensed football coach. The field taught me strategy, patience, and leadership qualities that I directly translate into writing clean code and shipping intuitive products.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative min-h-[400px] flex items-center justify-center"
                    >
                        {/* Minimal abstract representation of discipline/athlete */}
                        <div className="absolute inset-x-8 inset-y-8 rounded-2xl bg-gradient-to-br from-primary/10 to-action/10 border border-white/5 backdrop-blur-3xl shadow-2xl flex flex-col justify-between p-8">
                            <div className="h-full w-full border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center bg-black/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-action/30 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
                                <span className="text-white/80 font-mono tracking-widest text-sm text-center">
                                    {'<Discipline />'}<br />
                                    {'Strategy'}<br />
                                    {'Execution'}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
