import { LucideIcon, Users, Map, Globe, Award } from "lucide-react";
import { TeamMember, CompanyStat } from "@/types";

export const team: TeamMember[] = [
    {
        id: 1,
        name: "Michael Anderson",
        role: "Founder & Lead Guide",
        bio: "With over 15 years of experience leading expeditions worldwide, Michael is passionate about creating unforgettable travel experiences.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        specialties: ["Mountain Trekking", "Expedition Planning"],
    },
    {
        id: 2,
        name: "Sarah Williams",
        role: "Adventure Specialist",
        bio: "Sarah's expertise in outdoor activities and safety ensures every adventure is both thrilling and secure.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
        specialties: ["Rock Climbing", "Water Sports"],
    },
    {
        id: 3,
        name: "David Kumar",
        role: "Cultural Tour Expert",
        bio: "David brings destinations to life with his deep knowledge of local cultures, history, and traditions.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
        specialties: ["Cultural Tours", "Photography"],
    },
    {
        id: 4,
        name: "Emma Rodriguez",
        role: "Wildlife Guide",
        bio: "Emma's passion for wildlife and conservation makes every safari an educational and inspiring experience.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
        specialties: ["Safari Tours", "Wildlife Conservation"],
    },
];

export const companyStats = [
    {
        icon: Users,
        value: "45K+",
        label: "Happy campers",
    },
    {
        icon: Map,
        value: "1,500+",
        label: "Trips sold",
    },
    {
        icon: Globe,
        value: "60+",
        label: "Destinations",
    },
    {
        icon: Award,
        value: "150+",
        label: "Travel buddies",
    },
];
