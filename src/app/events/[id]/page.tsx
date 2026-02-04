"use client";

export const dynamic = "force-dynamic";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { events } from "@/data/events";
import { MapPin, Clock, Users, Star, Check, X, ChevronLeft, Calendar, Share2, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { notFound, useParams } from "next/navigation";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import { EventCard } from "@/components/EventCard";

const registrationSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    numberOfPeople: z.string().min(1, "Please specify number of people"),
    specialNotes: z.string().optional(),
});

export default function EventDetailsPage() {
    const params = useParams();
    const heroRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const id = params?.id;
    const eventId = id ? parseInt(id as string) : null;
    const event = eventId !== null ? events.find((e) => e.id === eventId) : null;

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(registrationSchema),
    });

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    if (!id || !event) {
        return null; // Or show loading/fallback
    }

    const onSubmit = (data: z.infer<typeof registrationSchema>) => {
        console.log({ ...data, eventId: event.id, eventTitle: event.title });
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
            setIsSubmitted(false);
            setIsOpen(false);
        }, 3000);
    };

    const relatedEvents = events.filter(
        (e) => e.id !== event.id && e.country === event.country
    ).slice(0, 3);

    return (
        <div className="min-h-screen bg-white">
            {/* Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0">
                    <Image
                        src={event.images[selectedImage]}
                        alt={event.title}
                        fill
                        className="object-cover transition-all duration-700"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </motion.div>

                <div className="absolute inset-0 z-10 container mx-auto px-4 flex flex-col justify-end pb-16 lg:pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <Link href="/events" className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 group">
                            <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Expeditions
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <Badge className="bg-primary hover:bg-primary/90 border-none text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 shadow-xl">
                                {event.category}
                            </Badge>
                            <span className="text-white/80 flex items-center text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 text-primary" />
                                {event.location}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                            {event.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
                                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-white font-black text-lg leading-none">{event.rating.toFixed(1)}</p>
                                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">({event.reviewCount} Reviews)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center">
                                    <Clock className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-white font-black text-lg leading-none">{event.duration}</p>
                                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Expedition Length</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute top-24 right-4 z-20 flex flex-col gap-3">
                    <Button size="icon" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary transition-all">
                        <Heart className="w-5 h-5" />
                    </Button>
                    <Button size="icon" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:border-primary transition-all">
                        <Share2 className="w-5 h-5" />
                    </Button>
                </div>
            </section>

            {/* Content Section */}
            <main className="container mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Left Column: Story and Details */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Gallery Thumbnails */}
                        <div className="grid grid-cols-4 gap-4 p-4 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                            {event.images.map((img, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${selectedImage === index
                                        ? "ring-4 ring-primary ring-offset-4 ring-offset-white"
                                        : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${event.title} thumbnail`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.button>
                            ))}
                        </div>

                        {/* Overview */}
                        <section>
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-6">The Experience</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-8">Expedition Overview</h3>
                            <div className="prose prose-lg prose-slate max-w-none font-light leading-relaxed text-slate-600">
                                <p className="text-2xl font-normal text-slate-900 mb-8 leading-snug tracking-tight">
                                    {event.description}
                                </p>
                                <p>
                                    Our expeditions are more than just tours; they are intentional journeys crafted to immerse you in the authentic soul of each destination. From the moment you join us, you are part of an elite collective of explorers seeking truth behind the maps.
                                </p>
                            </div>
                        </section>

                        {/* Highlights & Inclusions Grid */}
                        <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                            <section>
                                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-8">Pinnacle Moments</h4>
                                <ul className="space-y-6">
                                    {event.highlights.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Check className="w-4 h-4 text-emerald-600" />
                                            </div>
                                            <span className="text-slate-600 font-medium leading-tight">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </section>

                            <section>
                                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-8">What is Included</h4>
                                <ul className="space-y-6">
                                    {event.included.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-4"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1">
                                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-slate-600 font-medium leading-tight">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Right Column: Floating Booking Card */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-32">
                            <motion.div
                                className="bg-slate-950 rounded-[3rem] p-10 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/5 relative overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-10 pb-10 border-b border-white/10">
                                        <div>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-5xl font-black">${event.price}</span>
                                                <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Total</span>
                                            </div>
                                            {event.originalPrice && (
                                                <p className="text-sm text-white/20 line-through font-bold tracking-wider mt-1">${event.originalPrice}</p>
                                            )}
                                        </div>
                                        <Badge className="bg-primary/20 text-primary border border-primary/20 font-bold uppercase tracking-widest text-[9px] px-3 py-1.5 h-auto">
                                            Top Rated
                                        </Badge>
                                    </div>

                                    <div className="space-y-6 mb-12">
                                        <div className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/20 transition-all">
                                                    <Users className="w-5 h-5 text-white/40 group-hover:text-primary" />
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Spots Available</span>
                                            </div>
                                            <span className={`text-sm font-black ${event.availableSeats <= 5 ? "text-rose-400" : "text-white"}`}>
                                                {event.availableSeats} Left
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary/20 group-hover:border-primary/20 transition-all">
                                                    <Calendar className="w-5 h-5 text-white/40 group-hover:text-primary" />
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Duration</span>
                                            </div>
                                            <span className="text-sm font-black text-white">{event.duration}</span>
                                        </div>
                                    </div>

                                    {/* Registration Dialog */}
                                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                                        <DialogTrigger asChild>
                                            <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-[0.2em] text-sm shadow-[0_15px_30px_-5px_rgba(85,111,255,0.4)] transition-all hover:-translate-y-1">
                                                Secure Your Spot
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-xl rounded-[2.5rem] bg-white p-0 overflow-hidden border-none">
                                            <div className="grid md:grid-cols-5 min-h-[500px]">
                                                <div className="md:col-span-2 bg-slate-900 p-10 text-white relative">
                                                    <Image
                                                        src={event.image}
                                                        alt="Registration background"
                                                        fill
                                                        className="object-cover opacity-30"
                                                    />
                                                    <div className="relative z-10">
                                                        <h3 className="text-2xl font-black mb-6 leading-tight">Join the <br /> Expedition</h3>
                                                        <div className="space-y-4 text-sm font-light text-white/60">
                                                            <div className="flex items-center gap-3">
                                                                <Clock size={16} />
                                                                <span>{event.duration}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <MapPin size={16} />
                                                                <span>{event.location}</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-auto pt-20">
                                                            <p className="text-xs uppercase tracking-widest text-primary font-black mb-2">Price Total</p>
                                                            <p className="text-4xl font-black">${event.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                                                    <DialogHeader className="mb-8">
                                                        <DialogTitle className="text-3xl font-black text-slate-900 tracking-tight">Registration</DialogTitle>
                                                        <DialogDescription className="text-slate-500 font-light">Enter your details to finalize the reservation.</DialogDescription>
                                                    </DialogHeader>

                                                    {isSubmitted ? (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            className="text-center space-y-4"
                                                        >
                                                            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                                                <Check className="w-8 h-8 text-emerald-600" />
                                                            </div>
                                                            <h4 className="text-xl font-bold text-slate-900">Success!</h4>
                                                            <p className="text-slate-500 text-sm font-light">Our concierge will contact you within <span className="font-bold text-slate-900">2 hours</span> to finalize the logistics.</p>
                                                        </motion.div>
                                                    ) : (
                                                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                                            <div className="grid gap-4">
                                                                <Input {...register("fullName")} placeholder="Full Name" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:ring-primary transition-all rounded-xl px-4" />
                                                                <Input {...register("email")} type="email" placeholder="Email Address" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:ring-primary transition-all rounded-xl px-4" />
                                                                <div className="grid grid-cols-2 gap-4">
                                                                    <Input {...register("phone")} placeholder="Phone" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:ring-primary transition-all rounded-xl px-4" />
                                                                    <Input {...register("numberOfPeople")} type="number" placeholder="Guests" className="h-12 bg-slate-50 border-transparent focus:bg-white focus:ring-primary transition-all rounded-xl px-4" />
                                                                </div>
                                                                <Textarea {...register("specialNotes")} placeholder="Special requirements..." className="bg-slate-50 border-transparent focus:bg-white focus:ring-primary transition-all rounded-xl px-4 min-h-[100px]" />
                                                            </div>
                                                            <Button type="submit" className="w-full h-14 rounded-xl bg-slate-900 text-white font-bold tracking-widest uppercase text-xs hover:bg-primary shadow-xl transition-all">
                                                                Finalize Booking
                                                            </Button>
                                                        </form>
                                                    )}
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>

                                    <div className="mt-8 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Guaranteed Departure</p>
                                            <p className="text-[10px] text-white/40 font-medium">Safe booking & 24hr support</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Related Adventures Section */}
            {relatedEvents.length > 0 && (
                <section className="py-32 bg-slate-50 border-t border-slate-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4 text-center md:text-left">Recommendations</h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 text-center md:text-left">Similar <span className="text-slate-400">Expeditions.</span></h3>
                            </motion.div>
                            <Button asChild variant="ghost" className="rounded-full text-xs font-black uppercase tracking-[0.3em] text-primary gap-2 hover:bg-slate-100 hidden md:flex">
                                <Link href="/events">Explore All <ArrowRight className="w-4 h-4" /></Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {relatedEvents.map((relatedEvent, index) => (
                                <EventCard key={relatedEvent.id} event={relatedEvent} index={index} />
                            ))}
                        </div>

                        <div className="mt-16 text-center md:hidden">
                            <Button asChild className="rounded-full w-full h-14 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs">
                                <Link href="/events">View All Tours</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
