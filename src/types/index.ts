// Types for DeepClean Dubai Website

export interface CompanyInfo {
  name: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  city: string;
  country: string;
  website: string;
  yearsExperience: number;
  customersServed: number;
  guarantee: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  targetKeyword: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  icon: string;
  features: string[];
  process: ProcessStep[];
  whatsIncluded: string[];
  benefits: string[];
  beforeAfterImages: {
    before: string;
    after: string;
    alt: string;
  }[];
  faqs: FAQ[];
  relatedServices: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
  verified: boolean;
}

export interface ServiceArea {
  name: string;
  popular: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface EditableContent {
  id: string;
  content: string;
  type: 'text' | 'heading' | 'paragraph';
}
