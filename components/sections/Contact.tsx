'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const socialLinks = [
    {
        label: 'Email',
        href: 'mailto:sreegopi148@gmail.com',
        icon: Mail,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/sreeee4',
        icon: Linkedin,
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Sreeee4',
        icon: Github,
    },
];

export default function Contact() {
    return (
        <section id="contact" className="relative mx-auto w-full border-t border-white/5 bg-background py-24">
            <div className="container relative z-10 mx-auto flex flex-col items-center px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 max-w-2xl text-center"
                >
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Let&apos;s build something.</h2>
                    <p className="mb-8 text-lg text-foreground/60">
                        Looking for a structured frontend developer, a strategic UI/UX designer, or someone who brings tactical discipline to your next product? Let&apos;s talk.
                    </p>
                    <a
                        href="mailto:sreegopi148@gmail.com"
                        className={cn(buttonVariants({ variant: 'action', size: 'lg' }), 'h-14 w-full px-8 text-lg sm:w-auto')}
                    >
                        Email Me
                    </a>
                </motion.div>

                <div className="mt-12 flex w-full flex-col gap-4 border-t border-white/5 pt-8 text-sm text-foreground/40 sm:flex-row sm:items-center sm:justify-between">
                    <p>&copy; 2026 Sreekanth P G. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        {socialLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
