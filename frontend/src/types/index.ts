/**
 * Domain Type Definitions for I. Lawrence Practice (ILP)
 */

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  subPillars: {
    title: string;
    description: string;
    services: string[];
  }[];
  keyRegulators?: string[];
  iconName: string;
}

export interface CapitalMarketStep {
  stepNumber: number;
  title: string;
  shortSummary: string;
  detailedScope: string[];
  keyDeliverables: string[];
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "Business & Corporate Law" | "Property Law" | "Capital Markets Series";
  excerpt: string;
  content: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  readTimeMinutes: number;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  practiceArea: string;
  challenge: string;
  solution: string;
  outcome: string;
  anonymizedClientQuote?: string;
}

export interface FAQItem {
  id: string;
  category: "Company Registration" | "Foreign Ownership" | "Capital Markets & SEC" | "Property Law" | "General Compliance";
  question: string;
  answer: string;
}

export type EngagementType =
  | "Book a Consultation"
  | "Request a Legal Opinion"
  | "Corporate Retainer Enquiry"
  | "Capital Market Advisory Request"
  | "Property Due Diligence Request"
  | "Company Registration Request";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  engagementType: EngagementType;
  message: string;
  consent: boolean;
}
