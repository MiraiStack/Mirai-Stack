"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "Docker",
    "Vercel",
    "AWS",
];

export default function TechStack() {
    return (
        <section className="py-24 px-6 bg-brand-dark border-t border-brand-border text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-0">
                <div className="md:w-1/3 shrink-0">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-400 mb-4">
                        Powered by modern infrastructure
                    </h2>
                </div>

                <div className="w-full flex-1 flex">
                    <div className="flex animate-scroll whitespace-nowrap gap-6 py-4">
                        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                            <span
                                key={`${tech}-${index}`}
                                className="px-8 py-4 rounded-2xl bg-brand-surface border border-brand-border text-xl font-medium text-neutral-300 shadow-xl shadow-black/50 hover:border-brand-cyan hover:text-white transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
