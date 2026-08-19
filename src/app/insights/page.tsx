import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  FileText,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Resources & Knowledge Centre | I. Lawrence Practice",
  description:
    "Explore business law guides, foreign investment guides, real estate verification articles, and the complete SEC Capital Market Operator educational series by I. Lawrence Practice.",
});

export default function InsightsPage() {
  const corporateGuides = [
    {
      title: "How to Register a Company in Nigeria",
      status: "Topic Outline / Pending Full Copy",
    },
    {
      title: "Foreign Investment Guide & NIPC Registration",
      status: "Topic Outline / Pending Full Copy",
    },
    {
      title: "Business Licences & Regulatory Approvals in Nigeria",
      status: "Topic Outline / Pending Full Copy",
    },
    {
      title: "Corporate Governance Best Practices for Nigerian Boards",
      status: "Topic Outline / Pending Full Copy",
    },
  ];

  const propertyGuides = [
    {
      title: "How to Verify Land Title in Lagos & Abuja",
      status: "Topic Outline / Pending Full Copy",
    },
    {
      title: "Governor's Consent Explained: Process & Costs",
      status: "Topic Outline / Pending Full Copy",
    },
    {
      title: "Property Due Diligence Checklist Before Purchase",
      status: "Topic Outline / Pending Full Copy",
    },
    {
      title: "Avoiding Real Estate & Land Fraud in Nigeria",
      status: "Topic Outline / Pending Full Copy",
    },
  ];

  const capitalMarketSeries = [
    "Choosing the Right SEC Licence (Fund Manager, Portfolio Manager, Issuing House)",
    "Minimum Capital Requirements Audit & Compliance",
    "Required Corporate Structure & Share Capital Regulations",
    "Directors' Qualification & Competency Requirements",
    "Compliance Officer Statutory Requirements",
    "Form SEC 2 & Complete Documentation Checklist",
    "SEC Registration Timeline & Process Audit",
    "Common Reasons Applications Are Delayed & How to Avoid Them",
    "Preparing for SEC On-Site Regulatory Inspection",
    "Post-Licensing Compliance Obligations & Returns",
    "Building a Sustainable Compliance Framework",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-2">
              {" "}
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                RESOURCES & KNOWLEDGE CENTRE
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              Thought Leadership & Commercial Legal Hub
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              A regularly updated knowledge hub demonstrating practical legal
              insight, commercial regulatory guidance, and educational
              masterclasses.
            </p>
          </div>

          {/* Dedicated Flagship Capital Markets Series (Requirement 3 & 4) */}
          <div className="bg-charcoal-900 text-white p-8 sm:p-12 rounded-2xl space-y-6 shadow-xl border border-charcoal-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              {" "}
              <Badge
                variant="terracotta"
                className="bg-terracotta-500 text-white border-none">
                Dedicated Educational Master Series
              </Badge>
              <span className="text-xs text-terracotta-400 font-semibold">
                11 Modules
              </span>
            </div>

            <div className="space-y-2 max-w-3xl">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                Complete Guide to Becoming a Capital Market Operator in Nigeria
              </h2>
              <p className="text-xs text-slate-300">
                An exhaustive 11-part educational series walking investment
                companies, fund managers, and financial institutions through SEC
                Nigeria operator licensing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-charcoal-800">
              {capitalMarketSeries.map((topic, idx) => (
                <div
                  key={topic}
                  className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded bg-charcoal-800/60 border border-charcoal-700">
                  <span className="font-bold text-terracotta-400 shrink-0">
                    {idx + 1}.
                  </span>
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-terracotta-400" />
              <span>
                Scaffolded master series hub. Detailed article modules available
                upon publication.
              </span>
            </div>
          </div>

          {/* Business & Corporate Law Category */}
          <div className="space-y-6">
            <div className="border-b border-beige-300 pb-3">
              <h2 className="font-heading font-bold text-2xl text-charcoal-900">
                Business & Corporate Law Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {corporateGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="bg-white p-6 rounded-xl border border-beige-300 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center  gap-2">
                    {" "}
                    <Badge variant="terracotta" className="text-[10px]">
                      Corporate Advisory
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      <AlertCircle className="h-3 w-3 text-amber-600" />
                      <span>{guide.status}</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-charcoal-900">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Topic header scaffolded. Full analytical guide pending
                    publication.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Property Law Category */}
          <div className="space-y-6">
            <div className="border-b border-beige-300 pb-3">
              <h2 className="font-heading font-bold text-2xl text-charcoal-900">
                Property Law & Real Estate Guides
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {propertyGuides.map((guide) => (
                <div
                  key={guide.title}
                  className="bg-white p-6 rounded-xl border border-beige-300 shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center  gap-2">
                    <Badge variant="terracotta" className="text-[10px]">
                      Real Estate Law
                    </Badge>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      <AlertCircle className="h-3 w-3 text-amber-600" />
                      <span>{guide.status}</span>
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-charcoal-900">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Topic header scaffolded. Full analytical guide pending
                    publication.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Link href="/contact">
              <Button
                variant="terracotta"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Specific Legal Advisory
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
