"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { team, companyStats } from "@/data/team";
import { Users, Shield, DollarSign, Award, Target, Heart, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function AboutPage() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-primary-foreground">
            {/* Hero Section - Cinematic Parallax */}
            <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
                        alt="About Us"
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
                </motion.div>

                <motion.div
                    style={{ opacity }}
                    className="relative z-10 text-center text-white container mx-auto px-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.span
                        className="inline-block px-5 py-2 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-xl text-xs font-bold tracking-[0.3em] uppercase text-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Est. 2010
                    </motion.span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 font-display tracking-tighter leading-none">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Odyssey</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
                        Redefining the art of exploration through <span className="text-primary font-medium">passion, purpose, and prestige.</span>
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-4 group cursor-pointer"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold group-hover:text-white transition-colors">Discover More</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent group-hover:from-white transition-colors" />
                </motion.div>
            </section>

            {/* Brand Essence - Horizontal Story */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Manifesto</h2>
                                <h3 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-8">
                                    Crafting Legacies, <span className="text-slate-400 font-light italic">One Journey at a Time.</span>
                                </h3>
                                <div className="space-y-6 text-xl text-slate-600 font-light leading-relaxed">
                                    <p>
                                        In 2010, Raahi was born from a singular realization: that the world's most profound beauty is found in the spaces between the map's ink. We didn't just want to see the world; we wanted to feel its pulse.
                                    </p>
                                    <p>
                                        What began as a collective of restless dreamers has matured into a vanguard for intentional travel. We don't sell tours; we curate transformations.
                                    </p>
                                </div>
                                <div className="pt-8 flex gap-8 border-t border-slate-100 mt-12">
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900">14+</p>
                                        <p className="text-xs uppercase tracking-wider text-slate-400">Years of Service</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-slate-900">150k</p>
                                        <p className="text-xs uppercase tracking-wider text-slate-400">Miles Traveled</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-7 relative order-1 lg:order-2">
                            <motion.div
                                className="relative aspect-[4/5] md:aspect-square"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] z-10">
                                    <Image
                                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80"
                                        alt="Traveler"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                                </div>
                                <div className="absolute bottom-[-5%] left-0 w-3/5 h-3/5 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] z-20 border-[12px] border-white ring-1 ring-slate-100">
                                    <Image
                                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80"
                                        alt="Team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Abstract Background Elements */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full -z-10" />
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-[80px] -z-10 animate-pulse" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars - Interactive Glassmorphism */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">Values</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900">Foundations of Excellence</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Our Mission",
                                icon: Target,
                                text: "To engineer safe, high-end, and sustainable expeditions that transcend mere sightseeing, fostering a global renaissance of cultural appreciation.",
                                gradient: "from-blue-600 to-indigo-600"
                            },
                            {
                                title: "Our Vision",
                                icon: Heart,
                                text: "To lead the industry in conscious luxury travel, inspiring a worldwide network of explorers who leave every destination better than they found it.",
                                gradient: "from-rose-600 to-pink-600"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative bg-white border border-slate-200 p-12 lg:p-16 rounded-[3rem] shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                                    <item.icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-xl text-slate-500 font-light leading-relaxed">
                                    {item.text}
                                </p>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700 -z-0" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Raahi Edge - Geometric Grid */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 text-center md:text-left">The Advantage</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 text-center md:text-left">Why Discerning Travelers <br className="hidden md:block" /> <span className="text-slate-400">Choose Raahi.</span></h3>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Users, title: "Elite Guides", description: "Masters of lore and landscape." },
                            { icon: Shield, title: "Ironclad Security", description: "Global monitoring, local presence." },
                            { icon: DollarSign, title: "Absolute Value", description: "Premium quality, no hidden fees." },
                            { icon: Award, title: "Vanguard Status", description: "Pioneering sustainable luxury." },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="group p-10 rounded-[2.5rem] bg-slate-50 hover:bg-slate-900 transition-all duration-500"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <item.icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-slate-500 group-hover:text-slate-400 transition-colors leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stats - Ultra Dark */}
            <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8">
                        {companyStats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div
                                    className="text-6xl md:text-7xl font-black font-display tracking-tighter"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, type: "spring" }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-primary text-xs font-black uppercase tracking-[0.4em]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team - Artistic Layout */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="max-w-4xl mx-auto text-center mb-24"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">Custodians</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Guided by Visionaries</h3>
                        <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
                            Our leadership collective unites decades of global expedition management with a shared soul for exploration.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.id}
                                className="group"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="relative mb-8 rounded-[2rem] overflow-hidden aspect-[3/4]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    {/* Glass Overlay on Hover */}
                                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
                                        <p className="text-white text-sm font-light leading-relaxed mb-6 italic">"{member.bio}"</p>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><Instagram size={18} /></div>
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><Linkedin size={18} /></div>
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><Twitter size={18} /></div>
                                        </div>
                                    </div>
                                    {/* Specialty Badges - Bottom Right */}
                                    <div className="absolute bottom-4 right-4 flex flex-col gap-1 items-end group-hover:opacity-0 transition-opacity">
                                        {member.specialties.slice(0, 1).map((s, i) => (
                                            <span key={i} className="text-[9px] font-bold bg-white text-slate-900 px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h4>
                                    <p className="text-primary text-xs font-black uppercase tracking-widest">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
