import * as React from "react";
import { notFound } from "next/navigation";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { CalendlyBookButton } from "@/components/ui/calendly-book-button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, AlertCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { generateMetadata as createSeoMetadata } from "@/lib/seo";

interface ArticleDetail {
  slug: string;
  title: string;
  category: string;
  author: string;
  readTime: string;
  isPending?: boolean;
  outline: string[];
}

const articlesData: Record<string, ArticleDetail> = {
  "how-to-register-company-nigeria": {
    slug: "how-to-register-company-nigeria",
    title: "How to Register a Company in Nigeria",
    category: "Business & Corporate Law",
    author: "ILP Commercial Team",
    readTime: "Pending Publication",
    isPending: true,
    outline: [
      "1. Choosing Company Type (Private Limited, Public Limited, Guarantee)",
      "2. CAC Name Reservation & Identity Verification",
      "3. Minimum Share Capital Requirements (Local vs Foreign-Owned)",
      "4. Directors & Shareholder Qualification Regulations",
      "5. Statutory Filings & Certificate of Incorporation",
      "6. Post-Incorporation Tax Registrations (TIN, VAT, FIRS)",
    ],
  },
  "foreign-investment-guide-nigeria": {
    slug: "foreign-investment-guide-nigeria",
    title: "Foreign Investment Guide & NIPC Registration",
    category: "Business & Corporate Law",
    author: "ILP Foreign Trade Team",
    readTime: "Pending Publication",
    isPending: true,
    outline: [
      "1. Foreign Direct Investment (FDI) Regulatory Framework",
      "2. NIPC Registration & Certificate of Capital Importation (CCI)",
      "3. Business Permits & Expatriate Quota Approvals",
      "4. CERPAC Resident Permit Processing",
      "5. NOTAP Technology Transfer Registration",
      "6. Repatriation of Profits & Capital Export Controls",
    ],
  },
  "capital-markets-operator-guide": {
    slug: "capital-markets-operator-guide",
    title: "Complete Guide to Becoming a Capital Market Operator in Nigeria",
    category: "Capital Markets Series",
    author: "Itunu Lawrence, Managing Partner",
    readTime: "Master Educational Series",
    isPending: false,
    outline: [
      "Step 1: Understanding Your Business Model & Scope",
      "Step 2: Selecting the Appropriate SEC Operator Licence",
      "Step 3: Corporate Structuring & Capital Requirements Audit",
      "Step 4: Form SEC 2 & Regulatory Documentation Checklist",
      "Step 5: Licensing Application Submission & Eligibility Audit",
      "Step 6: Product Structuring (Mutual, Money Market & Dollar Funds)",
      "Step 7: SEC Product Approval & Disclosure Documents",
      "Step 8: Post-Licensing Compliance Obligations",
      "Step 9: Regulatory Inspections & Mock Compliance Audits",
      "Step 10: Building a Sustainable Ongoing Compliance Framework",
    ],
  },
  "land-title-verification-governors-consent": {
    slug: "land-title-verification-governors-consent",
    title: "Land Title Verification & Governor's Consent Explained",
    category: "Property Law",
    author: "ILP Real Estate Practice",
    readTime: "Pending Publication",
    isPending: true,
    outline: [
      "1. Conducting Land Registry Searches in Lagos & Abuja",
      "2. Surveyor-General Charting & Acquisition Checks",
      "3. Investigating Encumbrances & Existing Mortgages",
      "4. Processing Governor's Consent Step-by-Step",
      "5. Deed of Assignment Registration & Title Perfection",
      "6. Common Red Flags & Avoiding Real Estate Fraud",
    ],
  },
};

export function generateStaticParams() {
  return [
    { slug: "how-to-register-company-nigeria" },
    { slug: "foreign-investment-guide-nigeria" },
    { slug: "capital-markets-operator-guide" },
    { slug: "land-title-verification-governors-consent" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return createSeoMetadata({ title: "Article Not Found" });

  return createSeoMetadata({
    title: `${article.title} | ILP Insights`,
    description: `Read ${article.title} by ${article.author} on I. Lawrence Practice Knowledge Hub.`,
  });
}

export default async function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back Navigation Link */}
          <Link href="/insights" className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta-500 hover:underline">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Knowledge Hub</span>
          </Link>

          {/* Article Header */}
          <div className="space-y-4 border-b border-beige-300 pb-8">
            <div className="flex items-center gap-3">
              <Badge variant="terracotta">{article.category}</Badge>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="font-heading font-bold text-3xl sm:text-5xl text-charcoal-900 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-xs text-slate-600 pt-2 font-medium">
              <User className="h-4 w-4 text-terracotta-500" />
              <span>By {article.author}</span>
            </div>
          </div>

          {/* Scaffolded Outline Container */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-beige-300 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="font-heading font-bold text-2xl text-charcoal-900">
                Guide Structure & Outline
              </h2>
              {article.isPending && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                  <span>Pending Copy Release</span>
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {article.isPending
                ? "This legal guide is currently scaffolded in our editorial queue. Below is the approved analytical outline for this topic:"
                : "This master series provides comprehensive legal and regulatory guidance for investment operators in Nigeria:"}
            </p>

            <div className="space-y-3 pt-2">
              {article.outline.map((item) => (
                <div key={item} className="p-4 rounded-lg bg-linen-50 border border-beige-300 text-xs sm:text-sm font-semibold text-charcoal-900 flex items-center justify-between">
                  <span>{item}</span>
                  <ShieldCheck className="h-4 w-4 text-terracotta-500 shrink-0" />
                </div>
              ))}
            </div>

            {article.isPending && (
              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2 mt-4">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Editorial Note:</strong> Full analytical text for this guide will be published following final regulatory review.
                </span>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="bg-charcoal-900 text-white p-8 rounded-xl text-center space-y-3">
            <h3 className="font-heading font-bold text-xl text-white">Need Specific Legal Advisory On This Topic?</h3>
            <p className="text-xs text-slate-300">Contact our legal team to schedule a confidential briefing on your operational requirements.</p>
            <div className="pt-2">
              <CalendlyBookButton
                variant="terracotta"
                size="md"
                label="Book a Consultation"
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
