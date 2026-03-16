'use client';

import { motion } from 'framer-motion';

export default function FootballLeadership() {
    return (
        <section id="leadership" className="relative border-t border-white/5 bg-background py-24">
            <div className="container relative z-10 mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Leadership on &amp; off the pitch</h2>
                    <p className="text-lg text-foreground/60">
                        As an AIFF D-Licensed Coach and semi-professional footballer, I build teams like I build software, with strategy, clear communication, and mutual accountability.
                    </p>
                </motion.div>

                <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Tactical Mindset</h3>
                        <p className="font-light leading-relaxed text-foreground/80">
                            Anticipating system issues before they happen. Like reading a game, I architect software expecting edge cases and scaling bottlenecks to prevent catastrophic failures.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Effective Communication</h3>
                        <p className="font-light leading-relaxed text-foreground/80">
                            Coaching requires translating complex tactics into actionable instruction. I bring this into code via clean documentation, intuitive variable naming, and clear stakeholder updates.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
