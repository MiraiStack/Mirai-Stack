"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import TiltCard from "./TiltCard";

const projects = [
    {
        name: "FitSocial",
        type: "Community-Driven Fitness Platform",
        description: "A community-driven digital fitness engagement platform that connects users through shared wellness journeys and gamified challenges.",
        stack: ["React Native", "Node.js", "PostgreSQL"],
        link: "#",
        color: "bg-indigo-500/20",
    },
    {
        name: "Agora",
        type: "Digital Publishing Platform",
        description: "A modern publishing ecosystem enabling writers to create, distribute, and manage long-form content without algorithm-driven feeds.",
        stack: ["Next.js", "Firebase", "Stripe", "Framer Motion"],
        link: "#",
        color: "bg-brand-navy/30",
    },
    {
        name: "KenganStudy",
        type: "AI-Enhanced Learning Ecosystem",
        description: "An AI-enhanced learning ecosystem built for scale, delivering personalized education experiences and intelligent content delivery.",
        stack: ["Python", "TensorFlow", "React"],
        link: "#",
        color: "bg-blue-600/20",
    },
    {
        name: "Prosoche",
        type: "Reflective Intelligence Platform",
        description: "A structured journaling and reflection platform designed to transform daily thoughts into actionable insights through guided prompts and pattern analysis.",
        stack: ["React", "Node.js", "PostgreSQL", "AWS"],
        link: "#",
        color: "bg-brand-blue/20",
    },
    {
        name: "KenganSocial",
        type: "SaaS Social Media Management",
        description: "A centralized SaaS automation platform for social media management, streamlining content scheduling and analytics.",
        stack: ["Next.js", "GraphQL", "MongoDB"],
        link: "#",
        color: "bg-orange-500/20",
    },
    {
        name: "The Connect",
        type: "Multi-Vendor Marketplace Platform",
        description: "A scalable marketplace infrastructure that enables businesses to create digital storefronts, manage inventory, and sell products through a unified commerce platform.",
        stack: ["TypeScript", "Docker", "PostgreSQL", "Vercel"],
        link: "#",
        color: "bg-brand-cyan/10",
    },
    {
        name: "Stitches",
        type: "Global Fashion Commerce Platform",
        description: "A fashion-focused e-commerce marketplace connecting international clothing suppliers with local customers through a streamlined digital retail experience.",
        stack: ["Next.js", "Shopify", "Tailwind", "PostgreSQL"],
        link: "#",
        color: "bg-purple-500/20",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 bg-brand-dark border-t border-brand-border text-white relative perspective-[1000px]">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center justify-between mb-20 gap-8">
                    <div className="max-w-3xl flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Selected Projects</h2>
                        <p className="text-neutral-400 text-lg md:text-xl">
                            A collection of digital platforms we've built, focusing on performance, design, and reliable infrastructure.
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="text-base font-medium text-brand-cyan hover:text-white transition-colors flex items-center gap-2 pb-2 border-b border-brand-cyan hover:border-white w-max"
                    >
                        View all work <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-[1000px]">
                    {projects.map((project, index) => {
                        const isLastAndOdd = index === projects.length - 1 && projects.length % 2 !== 0;

                        return (
                            <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                style={{ perspective: 1000 }}
                                className={`flex flex-col h-full ${isLastAndOdd ? "md:col-span-2 md:w-1/2 md:mx-auto w-full" : ""}`}
                            >
                                <TiltCard
                                    className="group relative flex flex-col justify-between p-10 h-full w-full rounded-[2.5rem] bg-brand-surface border border-brand-border hover:border-brand-blue/50 overflow-hidden shadow-2xl shadow-black/60 hover:shadow-brand-blue/20 transition-colors"
                                >
                                    <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2 opacity-30 transition-all duration-700 group-hover:opacity-80 group-hover:scale-125 ${project.color}`} />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-2 flex-wrap gap-4">
                                            <h3 className="text-3xl font-semibold tracking-tight">{project.name}</h3>
                                            <Link
                                                href={project.link}
                                                className="w-14 h-14 rounded-full bg-brand-surface-2 border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-all duration-500 group-hover:rotate-45 shadow-sm shrink-0"
                                            >
                                                <ArrowUpRight size={26} />
                                            </Link>
                                        </div>
                                        <p className="text-neutral-500 font-medium mb-6">{project.type}</p>
                                        <p className="text-neutral-400 leading-relaxed max-w-md text-lg min-h-[100px]">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex flex-wrap gap-3 mt-12">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 text-sm font-medium bg-brand-surface-2/90 backdrop-blur-md border border-brand-border text-neutral-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
