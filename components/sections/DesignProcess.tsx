'use client';

import { motion } from 'framer-motion';

const processStops = [
    { step: '01', title: 'Tactical Empathy', desc: 'Understanding user pain points and the emotional landscape before touching design tools.' },
    { step: '02', title: 'Strategic Architecture', desc: 'Mapping robust systems, schemas, and clean architectural patterns.' },
    { step: '03', title: 'Relentless Execution', desc: 'Building high-fidelity accessible interfaces bridging aesthetic form with function.' },
    { step: '04', title: 'Performance Review', desc: 'Validating deployments with lighthouse metrics, UX testing, and code audits.' }
];

export default function DesignProcess() {
    return (
        <section id="process" className="relative py-24 bg-background border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">The Methodology</h2>
                    <p className="text-foreground/60 text-lg">My engineering implementation and design workflows run side by side, optimized for scale and impact.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {processStops.map((stop, idx) => (
                        <motion.div
                            key={stop.step}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="flex flex-col space-y-4"
                        >
                            <div className="text-5xl font-black text-white/5">{stop.step}</div>
                            <h3 className="text-xl font-semibold text-white">{stop.title}</h3>
                            <p className="text-foreground/60 leading-relaxed font-light">{stop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
