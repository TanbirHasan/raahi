"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types";

interface BlogCardProps {
    blog: Blog;
    index?: number;
}

export function BlogCard({ blog, index = 0 }: BlogCardProps) {
    return (
        <motion.article
            className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-slate-100/50 shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-6 left-6">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none font-black text-[9px] uppercase tracking-widest px-4 py-1.5 shadow-xl">
                        {blog.category}
                    </Badge>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {new Date(blog.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="w-1 h-1 bg-slate-200 rounded-full" />
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {blog.readTime}
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
                    <Link href={`/blog/${blog.id}`}>
                        {blog.title}
                    </Link>
                </h3>

                <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 line-clamp-3">
                    {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-100 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                            <User className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest text-slate-900">{blog.author}</span>
                    </div>

                    <Link href={`/blog/${blog.id}`} className="group/link flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest hover:text-slate-900 transition-colors">
                        Read Story
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
