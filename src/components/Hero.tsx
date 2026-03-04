"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid text-white">
            <div className="absolute inset-0 bg-brand-dark/80 pointer-events-none" />
            <div className="absolute top-0 -translate-y-12 shrink-0 bg-gradient-to-tr from-transparent via-brand-navy/20 to-brand-cyan/10 blur-[100px] w-full h-[600px] pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12"
            >
                <motion.div variants={itemVariants}>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-surface border border-brand-border text-sm font-medium text-neutral-300 mb-10 backdrop-blur-md shadow-2xl hover:border-brand-cyan/50 transition-colors cursor-default">
                        <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_rgba(68,207,213,0.8)]" />
                        Software Engineering & Systems Architecture Studio
                    </div>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl font-bold tracking-tighter text-balance mb-8 leading-[1.1]"
                >
                    Building the <span className="text-gradient">Future</span>, <br className="hidden md:block" />
                    One Stack at a Time.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Mirai Stack designs and engineers scalable SaaS platforms, intelligent automation systems, and digital infrastructure for modern organizations.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white font-medium rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(33,138,205,0.4)] hover:shadow-[0_0_30px_rgba(33,138,205,0.6)]"
                    >
                        View Our Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-600 text-white hover:border-brand-cyan hover:text-brand-cyan font-medium rounded-full hover:scale-105 transition-all flex items-center justify-center bg-brand-surface/30 backdrop-blur-sm"
                    >
                        Start a Project
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
