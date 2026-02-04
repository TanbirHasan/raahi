"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Shield, DollarSign, MapPin, Clock, Star } from "lucide-react";
import { featuredEvents } from "@/data/events";
import { activities } from "@/data/activities";
import { blogs } from "@/data/blogs";
import { reviews } from "@/data/reviews";
import { companyStats } from "@/data/team";
import EventCarousel from "@/components/EventCarousel";
import ReviewCarousel from "@/components/ReviewCarousel";
import Image from "next/image";
import { BlogCard } from "@/components/BlogCard";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1920&q=80"
            alt="Adventure Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center text-white mt-10"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="mb-6 inline-block">
            <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wide">
              DISCOVER THE UNTAMED
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Explore the World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Without Limits
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-300 font-light leading-relaxed"
            variants={fadeInUp}
          >
            Curated expeditions for the modern explorer. Experience the thrill of nature with expert guides and premium comfort.
          </motion.p>


        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>
      <div className="max-w-7xl mx-auto">
        {/* Why Choose Raahi - Elite Guardianship Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              {/* Left: Content & Manifesto */}
              <motion.div
                className="lg:w-[45%]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-block px-5 py-2 rounded-full bg-slate-50 border border-slate-100 text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-8">
                  The Raahi Selection
                </div>
                <h2 className="text-5xl md:text-7xl font-bold mb-8 text-slate-950 leading-[0.9] tracking-tighter">
                  Crafting Legacies of <br />
                  <span className="text-slate-300 font-light italic">Adventure.</span>
                </h2>
                <p className="text-slate-500 text-xl font-light leading-relaxed mb-12 max-w-lg">
                  We believe that exploration is the ultimate catalyst for human evolution. Our guides don't just lead paths; they unlock transformations.
                </p>

                <div className="space-y-10">
                  {[
                    { icon: Users, title: "Elite Command", text: "Certified professionals with decade-long local mastery." },
                    { icon: Shield, title: "Ironclad Safety", text: "Comprehensive gear checks and 24/7 global emergency support." },
                    { icon: DollarSign, title: "Transparent Protocol", text: "No hidden layers, just the pure raw essence of discovery." }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-6 group cursor-default"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                        <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-light leading-relaxed">{item.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Modern Cinematic Stats Grid */}
              <motion.div
                className="lg:w-[55%] grid grid-cols-2 gap-4 w-full relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Decorative Circle Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-50 rounded-full -z-0 pointer-events-none opacity-50" />

                {companyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col justify-end min-h-[280px] group transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 z-10 ${index === 0 ? "bg-slate-950 text-white col-span-2 md:col-span-1" :
                      index === 1 ? "bg-primary text-white col-span-2 md:col-span-1" :
                        index === 2 ? "bg-slate-50 text-slate-900" :
                          "bg-emerald-500 text-white"
                      }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all duration-700">
                      <stat.icon className="w-16 h-16 lg:w-24 lg:h-24" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-5xl lg:text-7xl font-black mb-2 tracking-tighter leading-none">{stat.value}</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 m-1">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>


        {/* Our Ongoing Tours Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Our <span className="text-primary">Popular Tours</span>
                </h2>
                <p className="text-gray-600 mt-2">Discover our most loved adventures</p>
              </motion.div>
              <Link href="/events" className="text-primary hover:underline font-medium hidden md:block">
                View All Tours →
              </Link>
            </div>

            <EventCarousel events={featuredEvents} />

            <div className="text-center mt-8 md:hidden">
              <Link href="/events" className="text-primary hover:underline font-medium">
                View All Tours →
              </Link>
            </div>
          </div>
        </section>

        {/* Start Your Journey Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-24 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 leading-[1.1]">
                Start Your <span className="text-slate-400 font-light italic">Adventure.</span>
              </h2>
              <p className="text-slate-500 font-light text-lg">Four steps to transform your vision into an unforgettable odyssey.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative pt-10">
              {/* Animated Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[5.5rem] left-[12.5%] right-[12.5%] h-px overflow-visible pointer-events-none -z-0">
                <svg className="w-full" height="2" viewBox="0 0 100 2" preserveAspectRatio="none">
                  {/* Background Line */}
                  <path
                    d="M 0 1 L 100 1"
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    fill="none"
                  />
                  {/* Animated Traveling Line */}
                  <motion.path
                    d="M 0 1 L 100 1"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#556FFF" />
                      <stop offset="100%" stopColor="#21A78F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {[
                { step: "01", title: "Discover", description: "Browse our curated tours and select your desired atmosphere.", icon: MapPin },
                { step: "02", title: "Book", description: "Secure your spot online with our seamless booking protocol.", icon: Users },
                { step: "03", title: "Prepare", description: "Get your personalized itinerary and bespoke gear list.", icon: Shield },
                { step: "04", title: "Explore", description: "Step into the great unknown and live the adventure.", icon: Star },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  <div className="relative mb-10">
                    {/* Decorative Outer Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-[2.5rem] border border-primary/20 -m-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Icon Container */}
                    <div className="w-24 h-24 bg-white rounded-[2rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center relative z-10 border border-slate-100 group-hover:border-primary/30 transition-all duration-500">
                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10">
                        <item.icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-500" />
                      </div>

                      {/* Floating Step Number */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-[10px] ring-4 ring-white shadow-xl z-20">
                        {item.step}
                      </div>

                      {/* Animated Pulse on card */}
                      <motion.div
                        className="absolute inset-0 bg-primary/5 rounded-[2rem] opacity-0 group-hover:opacity-100 pointer-events-none"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-light leading-relaxed max-w-[200px]">{item.description}</p>

                  {/* Vertical Line for Mobile */}
                  {index < 3 && (
                    <div className="md:hidden w-px h-12 bg-gradient-to-b from-primary/20 to-transparent mt-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  Latest <span className="text-primary">Travel Stories</span>
                </h2>
                <p className="text-gray-600 mt-2">Tips, guides, and inspiration for your next adventure</p>
              </motion.div>
              <Link href="/blog" className="text-primary hover:underline font-medium hidden md:block">
                View All Posts →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link href="/blog" className="text-primary hover:underline font-medium">
                View All Posts →
              </Link>
            </div>
          </div>
        </section>
      </div>



      {/* Customer Reviews Section - Dark Premium */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Background Bokeh Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-none">
              Trusted by the <br /> <span className="italic font-light">Global Elite.</span>
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed">
              Voices of the explorers who have witnessed the majesty through our lens.
            </p>
          </motion.div>

          <ReviewCarousel reviews={reviews} />
        </div>
      </section>
    </div>
  );
}
