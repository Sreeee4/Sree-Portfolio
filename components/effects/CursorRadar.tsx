'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorRadar() {
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cursorX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
    const cursorY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });
    const radarX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 });
    const radarY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button') || target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 rounded-full border border-action"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
            />
            {isHovering && (
                <motion.div
                    layoutId="cursor-radar"
                    className="pointer-events-none fixed left-0 top-0 z-[90] h-10 w-10 rounded-full border border-action/50 bg-action/10"
                    style={{
                        x: radarX,
                        y: radarY,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border border-action/30"
                        animate={{ scale: [1, 2], opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    />
                </motion.div>
            )}
        </>
    );
}
