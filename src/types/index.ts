// Event Types
export interface Event {
    id: number;
    title: string;
    location: string;
    country: string;
    duration: string;
    price: number;
    originalPrice?: number;
    availableSeats: number;
    rating: number;
    reviewCount: number;
    image: string;
    images: string[];
    description: string;
    highlights: string[];
    included: string[];
    notIncluded: string[];
    category: string;
}

// Activity Types
export interface Activity {
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
}

// Blog Types
export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
}

// Review Types
export interface Review {
    id: number;
    name: string;
    location: string;
    rating: number;
    review: string;
    image: string;
    tour: string;
    date: string;
}

// Team Types
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image: string;
    specialties: string[];
}

export interface CompanyStat {
    icon: any;
    value: string;
    label: string;
}
