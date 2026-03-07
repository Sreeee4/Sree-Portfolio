'use client';

import { motion } from 'framer-motion';

export default function FootballLeadership() {
    return (
        <section id="leadership" className="relative py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16 mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Leadership on & off the pitch</h2>
                    <p className="text-foreground/60 text-lg">As an AIFF D-Licensed Coach and semi-professional footballer, I build teams like I build software—with strategy, clear communication, and mutual accountability.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 flex flex-col justify-center gap-4"
                    >
                        <h3 className="text-2xl font-bold text-white">Tactical Mindset</h3>
                        <p className="text-foreground/80 leading-relaxed font-light">
                            Anticipating system issues before they happen. Like reading a game, I architect software expecting edge cases and scaling bottlenecks to prevent catastrophic failures.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl border border-white/5 bg-white/5 flex flex-col justify-center gap-4"
                    >
                        <h3 className="text-2xl font-bold text-white">Effective Communication</h3>
                        <p className="text-foreground/80 leading-relaxed font-light">
                            Coaching requires translating complex tactics into actionable instruction. I bring this into code via clean documentation, intuitive variable naming, and clear stakeholder updates.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
