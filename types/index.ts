export type I18nText = Record<"it" | "es", string>;

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
  label: I18nText;
  href: string;
  isButton?: boolean;
}

export interface Stat {
  value: string;
  label: I18nText;
}

export interface ValueProp {
  title: I18nText;
  description: I18nText;
  image?: SiteImage;
}

export interface HeroSection {
    title: I18nText;
  subtitle: I18nText;
  primaryCTA: NavItem;
  secondaryCTA: NavItem;
  stats: Stat[];
}

export interface Service {
  slug: string;
  title: I18nText;
  shortDescription: I18nText;
  fullDescription: I18nText;
  features: I18nText[];
  category: string;
  metadata: SEOConfig;
}

export interface Location {
  id: string;
  city: string;
  address: string;
  zipCode: string;
  province: string;
  path: string;
  type: "headquarters" | "node";
  phone?: string;
  email?: string;
}

export interface Certification {
  id: string;
  name: string;
  version: string;
  description: I18nText;
  yearStarted: number;
}

export interface Testimonial {
  author: string;
  rating: number;
  content: string;
  context?: string;
}

export interface QuoteRequest {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  city: string;
  surfaceM2: number;
  propertyType: string;
  serviceId: string;
  interventionType: string;
  notes?: string;
}

export interface AboutData {
  title: string;
  description: string;
  buttonText: string;
  imageAlt: string;
}