"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = (data: z.infer<typeof contactSchema>) => {
        console.log(data);
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-60">
                    <Image
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1920&q=80"
                        alt="Contact Us"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90" />
                </div>
                <motion.div
                    className="relative z-10 text-center text-white container mx-auto px-4 -mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium tracking-widest uppercase text-blue-200">
                        24/7 Support
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight">Let's Start a Conversation</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Ready to plan your next adventure? We're here to help you every step of the way.
                    </p>
                </motion.div>
            </section>

            {/* Overlapping Contact Section */}
            <section className="relative z-20 -mt-32 pb-24">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">

                        {/* Contact Info Sidebar (Dark) */}
                        <div className="lg:w-2/5 bg-slate-900 text-white p-12 relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                                <p className="text-gray-400 mb-12 text-lg">
                                    Fill up the form and our team will get back to you within 24 hours.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start space-x-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                                            <Phone className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Phone Number</h3>
                                            <p className="text-gray-400 font-light">+1 (483) 593-2840</p>
                                            <p className="text-gray-400 font-light">+1 (483) 593-2841</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                                            <p className="text-gray-400 font-light">hello@raahi.com</p>
                                            <p className="text-gray-400 font-light">support@raahi.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300 flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Office Location</h3>
                                            <p className="text-gray-400 font-light leading-relaxed">
                                                1080 Brickell Ave<br />
                                                Miami, Florida 33130<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 pt-8 border-t border-white/10">
                                    <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-gray-400">Follow Us</h4>
                                    <div className="flex space-x-4">
                                        {/* Social Icons Placeholder - replace with actual links/icons if needed */}
                                        <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer" />
                                        <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer" />
                                        <div className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/20 transition-colors cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Section (Light) */}
                        <div className="lg:w-3/5 p-12 bg-white">
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a Message</h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                                >
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                    <p className="text-green-600">
                                        Thank you for reaching out. Our team will get back to you shortly.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="group">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-primary transition-colors">Full Name</label>
                                            <Input
                                                {...register("name")}
                                                placeholder="John Doe"
                                                className={`h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 ${errors.name ? "border-red-500" : ""}`}
                                            />
                                            {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-primary transition-colors">Email Address</label>
                                            <Input
                                                {...register("email")}
                                                type="email"
                                                placeholder="john@example.com"
                                                className={`h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 ${errors.email ? "border-red-500" : ""}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-primary transition-colors">Phone Number</label>
                                        <Input
                                            {...register("phone")}
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className={`h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 ${errors.phone ? "border-red-500" : ""}`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-primary transition-colors">Your Message</label>
                                        <Textarea
                                            {...register("message")}
                                            placeholder="Tell us about your travel plans..."
                                            rows={6}
                                            className={`resize-none bg-gray-50 border-gray-200 focus:bg-white transition-all duration-300 ${errors.message ? "border-red-500" : ""}`}
                                        />
                                        {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message}</p>}
                                    </div>

                                    <Button type="submit" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl">
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Everything you need to know about contacting us</p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {[
                            { q: "What are your office hours?", a: "We are open Monday through Friday from 9 AM to 6 PM EST. Our support team is available 24/7 for emergency assistance during trips." },
                            { q: "How long does it take to get a response?", a: "We strive to respond to all inquiries within 24 hours. For urgent matters, please use our phone line." },
                            { q: "Do you offer custom travel packages?", a: "Yes! We specialize in tailor-made itineraries. Use the message form to tell us your preferences." }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-white px-6 rounded-xl border border-gray-100 data-[state=open]:shadow-md transition-all mb-4">
                                <AccordionTrigger className="text-lg font-bold text-gray-900 hover:no-underline">{item.q}</AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
