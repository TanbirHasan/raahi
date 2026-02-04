"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Event } from "@/types";
import { EventCard } from "@/components/EventCard";

interface EventCarouselProps {
    events: Event[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: false,
        skipSnaps: false,
        dragFree: true,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="relative group">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-8 py-10">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2"
                        >
                            <EventCard event={event} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-4 shadow-xl hover:bg-slate-50 transition-all z-10 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:-translate-x-8"
                aria-label="Previous"
            >
                <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-4 shadow-xl hover:bg-slate-50 transition-all z-10 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-8"
                aria-label="Next"
            >
                <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>
        </div>
    );
}
