"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mountain, Tent, Binoculars, Bike, Waves, Navigation } from "lucide-react";
import Image from "next/image";
import { Activity } from "@/types";

interface ActivityCardProps {
    activity: Activity;
    index?: number;
}

const getIcon = (icon: string) => {
    switch (icon) {
        case "kayak": return Waves;
        case "mountain": return Mountain;
        case "hiking": return Navigation;
        case "bike": return Bike;
        case "tent": return Tent;
        case "binoculars": return Binoculars;
        default: return Mountain;
    }
};

export function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
    const Icon = getIcon(activity.icon);

    return (
        <motion.div
            className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content Overflowing Bottom */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <Icon className="w-7 h-7 text-white" />
                    </div>
                    <motion.div
                        className="h-px bg-white/30 flex-1"
                        initial={{ width: 0 }}
                        whileInView={{ width: "auto" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">
                    {activity.title}
                </h3>

                <p className="text-white/60 text-sm font-light leading-relaxed mb-8 max-w-[240px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {activity.description}
                </p>

                <div className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest">
                    <span>Explore More</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all duration-500 border border-white/10">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Top Shine Effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
}
