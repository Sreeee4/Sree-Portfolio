'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorRadar() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
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
    }, []);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[100] h-6 w-6 rounded-full border border-action"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
            />
            {isHovering && (
                <motion.div
                    layoutId="cursor-radar"
                    className="pointer-events-none fixed left-0 top-0 z-[90] h-10 w-10 rounded-full border border-action/50 bg-action/10"
                    animate={{
                        x: mousePosition.x - 20,
                        y: mousePosition.y - 20,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 15,
                        mass: 0.5,
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
