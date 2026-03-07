'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const PHRASES = [
    "Designing Experiences.",
    "Engineering Systems.",
    "Playing to Win."
];

const SoccerBall = ({ className }: { className?: string }) => (
    <img
        src="/football.svg"
        alt="Football"
        className={`drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] ${className}`}
    />
);

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsAnimating(true);

            // Ball rolls for 3 seconds. Change text exactly when it reaches the right side.
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
            }, 2900); // Slightly before 3s to feel synced with the end of the motion

            // Reset animation state after the roll completes
            setTimeout(() => {
                setIsAnimating(false);
            }, 3000);
        }, 6000); // 6s cycle: 3s roll + 3s static pause

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            <div className="container relative z-10 mx-auto px-4 sm:px-6">
                <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-12">

                    {/* Name and Designation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center space-y-4"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase">
                            Sreekanth P G
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-[1px] w-12 bg-primary/30" />
                            <p className="text-sm md:text-lg font-bold tracking-[0.3em] text-primary uppercase">
                                UI/UX & Full-Stack Developer
                            </p>
                            <div className="h-[1px] w-12 bg-primary/30" />
                        </div>
                    </motion.div>

                    {/* Football Animation Section */}
                    <div className="relative w-full flex flex-col items-center py-8">
                        <div className="relative inline-block px-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
                            {/* Animated Headline Text */}
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 1.05, filter: "blur(5px)" }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="font-black tracking-tighter text-white leading-tight min-h-[1.2em] whitespace-nowrap"
                                >
                                    {PHRASES[currentIndex]}
                                </motion.h1>
                            </AnimatePresence>

                            {/* Football Rolling Across the Text */}
                            <AnimatePresence>
                                {isAnimating && (
                                    <motion.div
                                        initial={{ x: "-120%", left: "0%", rotate: 0 }}
                                        animate={{ x: "20%", left: "100%", rotate: 1080 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            left: { duration: 3, ease: "easeInOut" },
                                            rotate: { duration: 3, ease: "linear" }
                                        }}
                                        className="absolute top-0 translate-y-[35%] z-20 pointer-events-none"
                                        style={{ transformOrigin: "center" }}
                                    >
                                        <SoccerBall className="w-[1.2em] h-[1.2em]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="text-lg md:text-xl text-foreground/50 max-w-2xl font-light tracking-wide leading-relaxed"
                    >
                        I combine design thinking with engineering execution.
                        Athlete mindset driven by discipline, strategy, and consistency to ship real-world products.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-6 pt-4"
                    >
                        <Button variant="action" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg shadow-[0_0_30px_rgba(var(--primary),0.2)] hover:scale-105 transition-transform">
                            View Case Studies
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 text-lg bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 text-white transition-all duration-300">
                            Contact Me
                        </Button>
                    </motion.div>

                </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 z-0 bg-background overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full bg-primary/5 opacity-40 blur-[150px]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
            </div>
        </section>
    );
}
