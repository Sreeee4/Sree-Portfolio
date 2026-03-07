'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export default function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-background border-t border-white/5 mx-auto w-full">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Let's build something.</h2>
                    <p className="text-foreground/60 text-lg mb-8">
                        Looking for a structured frontend developer, a strategic UI/UX designer, or someone who brings tactical discipline to your next product? Let's talk.
                    </p>
                    <a href="mailto:sreekanth@example.com">
                        <Button variant="action" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                            Get in Touch
                        </Button>
                    </a>
                </motion.div>

                <div className="flex border-t border-white/5 pt-8 w-full justify-between items-center text-sm text-foreground/40 mt-12">
                    <p>© 2026 Sreekanth P G. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
