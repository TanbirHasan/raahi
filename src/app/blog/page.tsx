"use client";

import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/BlogCard";

export default function BlogPage() {
    const featuredPost = blogs[0];
    const recentPosts = blogs.slice(1);

    return (
        <div className="min-h-screen pt-20">
            {/* Header */}
            <section className="bg-slate-900 text-white py-20 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=1920&q=80"
                        alt="Blog Header"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
                </div>
                <div className="flex justify-center px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter max-w-3xl leading-[0.9]">
                            Stories from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Road Less Traveled</span>
                        </h1>
                        <p className="text-xl text-white/50 font-light">
                            Expert guides, travel tips, and inspiring tales from our global community of adventurers.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                {/* Featured Article */}
                <section className="py-16 -mt-10 relative z-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2 gap-0 border border-slate-100"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute top-8 left-8">
                                    <Badge className="bg-primary hover:bg-primary/90 text-white border-none text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-xl">
                                        Featured Story
                                    </Badge>
                                </div>
                            </div>
                            <div className="p-10 lg:p-20 flex flex-col justify-center bg-white">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
                                    <span className="text-primary">{featuredPost.category}</span>
                                    <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-[1.1] tracking-tight">
                                    <Link href={`/blog/${featuredPost.id}`} className="hover:text-primary transition-colors duration-300">
                                        {featuredPost.title}
                                    </Link>
                                </h2>
                                <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed line-clamp-3">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-10 border-t border-slate-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-100">
                                            <Image
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80"
                                                alt={featuredPost.author}
                                                width={48}
                                                height={48}
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 text-xs uppercase tracking-widest">{featuredPost.author}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{new Date(featuredPost.date).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <Button asChild variant="outline" className="rounded-full h-14 px-10 border-slate-200 group hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 font-black uppercase tracking-widest text-[10px]">
                                        <Link href={`/blog/${featuredPost.id}`}>
                                            Read Story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Recent Posts Grid */}
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                            <div>
                                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Archive</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Latest <span className="text-slate-400">Articles.</span></h2>
                            </div>
                            <div className="flex gap-2">
                                {["All", "Tips", "Expeditions", "Safety"].map((cat) => (
                                    <button key={cat} className="px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-white border border-slate-200 text-slate-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {recentPosts.map((post, index) => (
                                <BlogCard key={post.id} blog={post} index={index} />
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <Button variant="outline" size="lg" className="rounded-full h-16 px-12 border-slate-200 font-black uppercase tracking-widest text-[10px] hover:bg-slate-950 hover:text-white transition-all">
                                Explore All Chronicles
                            </Button>
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
}
