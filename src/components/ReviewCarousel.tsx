"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Review } from "@/types";
import { motion } from "framer-motion";

interface ReviewCarouselProps {
    reviews: Review[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center", skipSnaps: false },
        [Autoplay({ delay: 6000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-white/10 text-white/10"
                    }`}
            />
        ));
    };

    return (
        <div className="relative group px-4 md:px-12">
            <div className="overflow-hidden py-10" ref={emblaRef}>
                <div className="flex -ml-4 lg:-ml-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={review.id}
                            className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4 lg:pl-6"
                        >
                            <motion.div
                                className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 lg:p-12 h-full relative overflow-hidden shadow-2xl group/card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                {/* Decorative Quote */}
                                <div className="absolute top-8 right-8 opacity-5 group-hover/card:opacity-10 transition-opacity duration-500">
                                    <Quote className="w-24 h-24 lg:w-32 lg:h-32 text-primary" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex gap-1 mb-6">
                                        {renderStars(review.rating)}
                                    </div>

                                    <p className="text-lg lg:text-xl font-light text-white/80 leading-relaxed italic mb-10 flex-1">
                                        "{review.review}"
                                    </p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-auto">
                                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
                                            <Image
                                                src={review.image}
                                                alt={review.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white mb-0.5 tracking-tight">{review.name}</h4>
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{review.location}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 -z-0" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-2xl opacity-0 group-hover:opacity-100 -translate-x-full lg:-translate-x-6 group-hover:translate-x-0 hidden md:flex"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all shadow-2xl opacity-0 group-hover:opacity-100 translate-x-full lg:translate-x-6 group-hover:translate-x-0 hidden md:flex"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
}
