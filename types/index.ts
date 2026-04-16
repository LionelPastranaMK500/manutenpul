export interface SEOConfig {
    title: string;
    description: string;
    keywords?: string[];
}

export interface SiteImage {
    url: string;
    alt: string;
    filename: string;
    context?: string;
}

export interface NavItem {
    label: string;
    href: string;
    isButton?: boolean;
}

export interface Stat {
    value: string;
    label: string;
}

export interface ValueProp {
    title: string;
    description: string;
    image?: SiteImage;
}

export interface HeroSection {
    title: string
    subtitle: string
    primaryCTA: NavItem
    secondaryCTA: NavItem
    stats: Stat[]
}

export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    metadata: SEOConfig;
    category: 'cleaning' | 'sanitization' | 'pest-control' | 'other';
    icon: string;
}

export interface Location {
    id: string;
    city: string;
    address: string;
    zipCode: string;
    province: string;
    path: string;
    type: 'headquarters' | 'node';
    phone?: string;
    email?: string;
}

export interface Certification {
    id: string;
    name: string;
    description: string;
    yearStarted: number;
}


export interface Testimonial {
    author: string;
    rating: number;
    content: string;
    context?: string;
}