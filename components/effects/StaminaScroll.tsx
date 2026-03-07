'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function StaminaScroll() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-background/50 backdrop-blur-sm">
            <motion.div
                className="h-full bg-gradient-to-r from-primary to-action"
                style={{ scaleX, transformOrigin: '0%' }}
            />
        </div>
    );
}
