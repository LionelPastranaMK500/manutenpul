import { LucideIcon } from "lucide-react";

export type I18nText = Record<"it" | "es", string>;
export type RegionCode = "IT" | "PE" | "ES";
export type RegionalText = Record<RegionCode, I18nText>;

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
  label: { it: string; es: string };
  href: string;
  isButton?: boolean;
  isDropdown?: boolean;
  subItems?: { slug: string; label: string }[];
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
  background: { type: "image" | "video"; src: string };
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
  image: string;
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
  slug: string;
  id: string;
  icon: LucideIcon;
  statusIcon: LucideIcon;
  title: I18nText;
  subtitle: I18nText;
  fullDescription: I18nText;
  features: I18nText[];
  details: {
    intro: I18nText;
    benefits: I18nText[];
    extra: I18nText[];
    image: string;
    mark: string;
  };
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
  label: string;
  title: { normal: string; highlight: string; end: string };
  description: string;
  buttonText: string;
  imageAlt: string;
  features: {
    title: string;
    text: string;
    icon: string;
  }[];
}

export interface FooterContent {
  description: I18nText;
  legal: {
    privacy: I18nText;
    cookies: I18nText;
    terms: I18nText;
  };
  contact: {
    title: I18nText;
    address: string;
    email: string;
    phone: string;
  };
  copyright: I18nText;
}

export interface PrivacySection {
  title: I18nText;
  content: I18nText[];
}

export interface PrivacyContent {
  breadcrumb: {
    home: I18nText;
    current: I18nText;
  };
  pageTitle: I18nText;
  intro: I18nText;
  sections: PrivacySection[];
  lastUpdated: I18nText;
}