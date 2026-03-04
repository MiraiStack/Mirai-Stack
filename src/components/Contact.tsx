"use client";

import { Github, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 bg-brand-dark border-t border-brand-border text-white relative">
            <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left: Contact Info */}
                    <div className="lg:w-5/12 flex flex-col justify-between">
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-8 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                                Available for New Projects
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's build <br /><span className="text-neutral-500">the future.</span></h2>
                            <p className="text-xl text-neutral-400 max-w-md mb-12 leading-relaxed">
                                Whether you need a highly scalable SaaS platform, complex automation, or a dedicated engineering partner, our team is ready to deliver.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10">
                            {/* Contact Methods */}
                            <div className="flex flex-col gap-6">
                                <a href="mailto:hello@miraistack.com" className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-brand-surface border border-transparent hover:border-brand-border transition-all w-full">
                                    <div className="w-14 h-14 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-colors">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500 font-medium mb-1 uppercase tracking-wider">Email Us</p>
                                        <p className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">hello@miraistack.com</p>
                                    </div>
                                </a>

                                <div className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-brand-surface border border-transparent hover:border-brand-border transition-all w-full">
                                    <div className="w-14 h-14 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-colors">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-neutral-500 font-medium mb-1 uppercase tracking-wider">Location</p>
                                        <p className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors">Durban, South Africa</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-4 pl-4 pt-4 border-t border-brand-border w-fit">
                                <a href="#" className="p-3 text-neutral-400 hover:text-white hover:bg-brand-surface border border-transparent hover:border-brand-border rounded-xl transition-all">
                                    <Github size={22} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form Form */}
                    <div className="lg:w-7/12 perspective-[1000px]">
                        <TiltCard className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-brand-border/80 via-transparent to-brand-border/30 h-full overflow-hidden shadow-2xl shadow-black/80">
                            <form className="relative flex flex-col gap-6 bg-brand-surface/95 backdrop-blur-3xl p-10 md:p-14 rounded-[2.5rem] h-full overflow-hidden">
                                {/* Soft glow behind form */}
                                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                                <h3 className="text-3xl font-bold tracking-tight text-white mb-2 relative z-10">Send an Inquiry</h3>
                                <p className="text-neutral-400 mb-8 max-w-sm relative z-10">We usually respond within 24 hours. Let us know how we can help your business.</p>

                                <div className="flex flex-col md:flex-row gap-6 mb-2 relative z-10">
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="name" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Jane Doe"
                                            className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 w-full">
                                        <label htmlFor="company" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1">Company</label>
                                        <input
                                            type="text"
                                            id="company"
                                            placeholder="Acme Corp"
                                            className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 mb-2 relative z-10">
                                    <label htmlFor="email" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1">Work Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="jane@company.com"
                                        className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-2 relative z-10 mb-4">
                                    <label htmlFor="project" className="text-xs font-semibold text-neutral-500 uppercase tracking-wider pl-1">Project Details</label>
                                    <textarea
                                        id="project"
                                        rows={4}
                                        placeholder="Tell us about your objectives, timeline, or technology stack..."
                                        className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-5 py-4 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none custom-scrollbar"
                                    />
                                </div>

                                <button
                                    type="button"
                                    className="group mt-auto w-full flex items-center justify-center gap-3 bg-white text-brand-dark hover:bg-brand-cyan font-bold text-lg rounded-xl py-5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(68,207,213,0.3)] relative z-10"
                                >
                                    Submit Request
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </TiltCard>
                    </div>

                </div>
            </div>
        </section>
    );
}
