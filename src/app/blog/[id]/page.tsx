"use client";

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notFound, useParams } from "next/navigation";

export default function BlogDetailsPage() {
    const params = useParams();
    const id = params?.id;
    const blog = id ? blogs.find((b) => b.id === Number(id)) : null;

    if (!id || !blog) {
        return null;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Immersive Header */}
            <div className="relative h-[70vh] min-h-[500px] w-full">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Journal
                            </Link>

                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <Badge className="bg-primary hover:bg-primary/90 border-none text-base px-4 py-1">
                                    {blog.category}
                                </Badge>
                                <span className="text-white/60 flex items-center text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {blog.readTime}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 font-display leading-tight">
                                {blog.title}
                            </h1>

                            <div className="flex items-center justify-between border-t border-white/20 pt-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <User className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white text-lg">{blog.author}</p>
                                        <div className="flex items-center text-white/60 text-sm">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(blog.date).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
                                        <Bookmark className="w-5 h-5" />
                                    </Button>
                                    <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <article className="py-20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="text-2xl md:text-3xl font-light text-gray-600 leading-relaxed mb-12 first-letter:text-6xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                            {blog.excerpt}
                        </p>

                        <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-img:rounded-3xl prose-a:text-primary">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <h2>The Journey Begins</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <blockquote>
                                "Travel is the only thing you buy that makes you richer."
                            </blockquote>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <figure>
                                <Image
                                    src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?w=1200&q=80"
                                    alt="Scenic View"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto rounded-3xl"
                                />
                                <figcaption>A breathtaking view of the valley at sunset.</figcaption>
                            </figure>
                            <h3>Hidden Gems</h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                            </p>
                            <ul>
                                <li>Pack light and versatile clothing</li>
                                <li>Always carry a reusable water bottle</li>
                                <li>Respect local customs and traditions</li>
                                <li>Learn a few phrases in the local language</li>
                            </ul>
                            <p>
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="mt-16 pt-8 border-t border-gray-100">
                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Related Topics</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Adventure", "Travel Tips", "Culture", "Sustainability"].map(tag => (
                                    <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer transition-colors">
                                        #{tag.toLowerCase().replace(" ", "")}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>

            {/* Related Articles */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h3 className="text-3xl font-bold mb-10 text-gray-900">More Stories to Explore</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogs.filter(b => b.id !== blog.id).slice(0, 3).map((post) => (
                            <Link href={`/blog/${post.id}`} key={post.id} className="group">
                                <div className="relative h-60 rounded-2xl overflow-hidden mb-4">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-white/90 text-black hover:bg-white">{post.category}</Badge>
                                </div>
                                <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                                <div className="text-sm text-gray-500 flex items-center">
                                    <span>{post.readTime}</span>
                                    <span className="mx-2">•</span>
                                    <span>{new Date(post.date).toLocaleDateString()}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
