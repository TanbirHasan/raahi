"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Event } from "@/types";

interface EventCardProps {
    event: Event;
    index?: number;
}

export function EventCard({ event, index = 0 }: EventCardProps) {
    return (
        <motion.div
            className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 hover:bg-white border-none text-[10px] font-bold uppercase tracking-widest px-3 py-1 shadow-sm">
                        {event.category}
                    </Badge>
                </div>

                {event.availableSeats <= 10 && (
                    <div className="absolute top-4 right-4">
                        <Badge className="bg-rose-500/90 backdrop-blur-md text-white border-none text-[10px] font-bold uppercase tracking-widest px-2 py-1">
                            {event.availableSeats} Seats Left
                        </Badge>
                    </div>
                )}

                {/* Rating Overlay */}
                {event.rating > 0 && (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-black text-slate-900">{event.rating.toFixed(1)}</span>
                        <span className="text-[10px] text-slate-400 font-medium">({event.reviewCount})</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-wider mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {event.location}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    {event.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                            <Clock className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        {event.duration}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                            <Users className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        {event.availableSeats} Spots
                    </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-black text-slate-900">${event.price}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">/ person</span>
                        </div>
                        {event.originalPrice && (
                            <span className="text-xs text-slate-300 line-through font-medium">${event.originalPrice}</span>
                        )}
                    </div>

                    <Button asChild size="sm" className="rounded-full bg-slate-900 text-white hover:bg-primary shadow-lg hover:shadow-primary/30 transition-all duration-300 group/btn">
                        <Link href={`/events/${event.id}`}>
                            Details <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
