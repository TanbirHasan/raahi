"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "@/data/events";
import { Search, Filter, SlidersHorizontal, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/EventCard";
import Image from "next/image";

export default function EventsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const countries = ["all", ...new Set(events.map(e => e.country))];
    const categories = ["all", ...new Set(events.map(e => e.category))];

    const filteredEvents = events.filter(e => {
        const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCountry = selectedCountry === "all" || e.country === selectedCountry;
        const matchesCategory = selectedCategory === "all" || e.category === selectedCategory;
        return matchesSearch && matchesCountry && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-white">
            {/* Cinematic Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
                        alt="Adventures"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-white" />
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <motion.span
                        className="inline-block px-5 py-2 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-xl text-[10px] font-bold tracking-[0.3em] uppercase text-blue-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Adventure Awaits
                    </motion.span>
                    <motion.h1
                        className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        All Tours & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">Expeditions</span>
                    </motion.h1>

                    {/* Floating Search Bar */}
                    <motion.div
                        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl p-2 rounded-[2.5rem] border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2 mt-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex-1 relative flex items-center px-6 py-3">
                            <Search className="w-5 h-5 text-white/60 mr-4" />
                            <input
                                type="text"
                                placeholder="Search destinations or vibes..."
                                className="bg-transparent border-none text-white placeholder:text-white/40 focus:outline-none w-full font-medium"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="hidden md:block w-px h-10 bg-white/20 my-auto" />
                        <div className="flex-1 relative flex items-center px-6 py-3">
                            <Globe className="w-5 h-5 text-white/60 mr-4" />
                            <select
                                className="bg-transparent border-none text-white/80 focus:outline-none w-full font-medium cursor-pointer appearance-none [&>option]:text-slate-900"
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                <option value="all">All Countries</option>
                                {countries.filter(c => c !== "all").map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                        </div>
                        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 md:h-auto font-bold shadow-lg shadow-primary/25">
                            Search
                        </Button>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                {/* Filter Section */}
                <section className="py-12 bg-white sticky top-16 z-30 border-b border-slate-100 ">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap items-center justify-between gap-8">
                            {/* Category Pills */}
                            <div className="flex gap-2 p-1 bg-slate-50 rounded-full border border-slate-100">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${selectedCategory === cat
                                            ? "bg-slate-900 text-white shadow-lg"
                                            : "text-slate-500 hover:text-slate-900"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Results Count & Sort */}
                            <div className="flex items-center gap-6">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    <span className="text-slate-900">{filteredEvents.length}</span> Results Found
                                </p>
                                <Button variant="ghost" className="rounded-full text-xs font-bold uppercase tracking-widest text-slate-500 gap-2">
                                    <SlidersHorizontal className="w-4 h-4" />
                                    Sort By
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                            layout
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <EventCard event={event} index={index} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredEvents.length === 0 && (
                            <motion.div
                                className="py-32 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Search className="w-10 h-10 text-slate-300" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">No expeditions found</h3>
                                <p className="text-slate-500 max-w-sm mx-auto font-light">
                                    We couldn't find any tours matching your current filters. Try adjusting your search criteria.
                                </p>
                                <Button
                                    variant="link"
                                    className="mt-4 text-primary font-bold uppercase tracking-widest text-xs"
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCountry("all");
                                        setSelectedCategory("all");
                                    }}
                                >
                                    Clear All Filters
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </div>


        </div>
    );
}
