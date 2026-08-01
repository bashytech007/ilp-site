import * as React from "react";
import { notFound } from "next/navigation";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, ShieldCheck, Landmark, Scale, ShieldAlert, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { generateMetadata as createSeoMetadata } from "@/lib/seo";

interface PracticeDetail {
  slug: string;
  title: string;
  category: string;
  heroDescription: string;
  isFlagship?: boolean;
  pillars: {
    title: string;
    description: string;
    services: string[];
  }[];
  regulators: string[];
}

const practiceData: Record<string, PracticeDetail> = {
  "commercial-law": {
    slug: "commercial-law",
    title: "Commercial Law & Foreign Investment Advisory",
    category: "Corporate & Commercial Practice",
    heroDescription:
      "We provide comprehensive legal services that support businesses from formation to expansion while ensuring full regulatory compliance in Nigeria.",
    pillars: [
      {
        title: "Business Formation & Company Registration",
        description: "End-to-end legal support for setting up local companies, foreign subsidiaries, and holding structures.",
        services: [
          "Company Registration (CAC)",
          "Foreign Company Registration",
          "Subsidiary Formation",
          "Joint Venture Structures",
          "Holding Company Structures",
          "Corporate Restructuring",
        ],
      },
      {
        title: "Foreign Investment & Global Business Expansion",
        description: "Helping foreign investors establish operations and navigate regulatory approvals in Nigeria.",
        services: [
          "Market Entry Strategy & FDI Advisory",
          "Incorporation of Nigerian Subsidiaries & Branch Registration",
          "Expatriate Quota & Business Permits",
          "Combined Expatriate Residence Permit (CERPAC)",
          "Immigration Compliance & NIPC Registration",
          "NOTAP Technology Transfer Agreements",
        ],
      },
      {
        title: "Licences & Regulatory Approvals",
        description: "Processing statutory licences and approvals across federal and state regulators.",
        services: [
          "SEC & Central Bank of Nigeria (CBN) Approvals",
          "NAFDAC & Standards Organisation of Nigeria (SON)",
          "FCCPC Competition Clearances",
          "NUPRC / DPR Energy Licences",
          "NSITF, PENCOM & ITF Statutory Registrations",
          "LASRERA & State-specific Approvals",
        ],
      },
      {
        title: "Commercial Contracts & Mergers & Acquisitions (M&A)",
        description: "Preparation, review, and transaction supervision from pre-commencement to closing.",
        services: [
          "End-to-end Commercial Agreement Drafting",
          "Legal & Regulatory Due Diligence",
          "Transaction Structuring & Documentation",
          "Regulatory Clearances & Closing Support",
        ],
      },
    ],
    regulators: ["CAC", "NIPC", "SEC", "CBN", "NAFDAC", "SON", "FCCPC", "NOTAP"],
  },

  "corporate-governance": {
    slug: "corporate-governance",
    title: "Corporate Governance & Compliance",
    category: "Governance & Secretarial Practice",
    heroDescription:
      "Helping organisations build robust governance systems that satisfy regulatory expectations while supporting sustainable corporate growth.",
    pillars: [
      {
        title: "Board Advisory & Governance Systems",
        description: "Establishing governance frameworks that conform with regulatory codes governing Nigerian business.",
        services: [
          "Board Charters & Committee Charters",
          "Board Evaluation & Governance Audits",
          "Governance Frameworks & Board Policies",
          "Directors' Statutory Duties & Advisory",
        ],
      },
      {
        title: "Corporate Compliance & Statutory Filings",
        description: "Managing ongoing statutory calendars and corporate registers.",
        services: [
          "Annual Compliance Calendar Management",
          "Statutory Filings & Corporate Governance Reviews",
          "Statutory Registers Maintenance",
          "Company Secretarial Advisory",
        ],
      },
      {
        title: "Risk & Regulatory Compliance",
        description: "Designing internal risk controls and anti-money laundering frameworks.",
        services: [
          "Compliance Manuals & Internal Policies",
          "AML/CFT Compliance Frameworks",
          "Risk Assessment & Monitoring Controls",
          "Internal Audit & Regulatory Correspondence",
        ],
      },
      {
        title: "Company Secretarial Services",
        description: "Full secretarial support for board operations and general meetings.",
        services: [
          "Board Meetings Management",
          "Annual General Meeting (AGM) Management",
          "Minutes & Corporate Resolutions",
          "Statutory Returns & Filings",
        ],
      },
    ],
    regulators: ["CAC", "SEC", "CBN", "FIU", "FCCPC"],
  },

  "property-law": {
    slug: "property-law",
    title: "Property Law & Real Estate Transactions",
    category: "Real Estate Legal Practice",
    heroDescription:
      "ILP provides legal support throughout the property investment, title investigation, title perfection, and real estate development lifecycle.",
    pillars: [
      {
        title: "Property Acquisition & Due Diligence",
        description: "Uncompromising title investigation to protect real estate investments.",
        services: [
          "Land Registry Title Investigation & Verification",
          "Surveyor-General Charting & Search",
          "Contract Review & Legal Risk Assessment",
          "Property encumbrance & mortgage checks",
        ],
      },
      {
        title: "Real Estate Transactions & Documentation",
        description: "Drafting bulletproof transaction agreements for sales, leases, and joint developments.",
        services: [
          "Sale & Purchase Agreements",
          "Lease Agreements & Tenancy Documentation",
          "Joint Development Agreements (JDA)",
          "Commercial Leasing & Conveyancing",
        ],
      },
      {
        title: "Land Documentation & Title Perfection",
        description: "Processing statutory perfection at state land registries.",
        services: [
          "Governor's Consent Processing",
          "Deed of Assignment Registration",
          "Deed of Mortgage & Deed of Lease",
          "Certificate of Occupancy (C of O) & Title Perfection",
        ],
      },
      {
        title: "Development Advisory & Dispute Resolution",
        description: "Legal support for estate developers, commercial projects, and property disputes.",
        services: [
          "Commercial & Mixed-Use Development Advisory",
          "Project Finance Documentation",
          "Mediation, Arbitration & Land Litigation",
          "Recovery of Possession & Boundary Disputes",
        ],
      },
    ],
    regulators: ["Land Registry", "LASRERA", "Surveyor-General Office"],
  },

  "capital-market": {
    slug: "capital-market",
    title: "Capital Market Legal Advisory (SEC Operator Licensing)",
    category: "Flagship Practice Area",
    isFlagship: true,
    heroDescription:
      "One of our flagship practice areas. We guide businesses through every legal and regulatory stage of becoming a licensed Capital Market Operator (CMO) in Nigeria.",
    pillars: [
      {
        title: "Stage 1: Business Audit & Licence Selection (Steps 1–3)",
        description: "Evaluating business models and selecting appropriate SEC operator licences.",
        services: [
          "Business Model Regulatory Scope Audit",
          "Selecting Licence Type (Fund Manager, Portfolio Manager, Issuing House)",
          "Corporate Structuring & Share Capital Audit",
        ],
      },
      {
        title: "Stage 2: Regulatory Documentation & SEC Application (Steps 4–5)",
        description: "Preparing statutory documentation and managing the licensing application.",
        services: [
          "Form SEC 2 & MOA/AOA Regulatory Customization",
          "Eligibility Assessment & Document Verification",
          "Application Preparation & SEC Submission",
          "Pre-Approval Audit Readiness",
        ],
      },
      {
        title: "Stage 3: Product Structuring & SEC Product Approval (Steps 6–7)",
        description: "Legal structuring and approval for investment products.",
        services: [
          "Mutual Funds, Money Market Funds & Dollar Funds Setup",
          "Collective Investment Schemes (CIS) & Portfolio Structuring",
          "Trust Deeds & Information Memoranda Drafting",
          "SEC Product Approval & Disclosure Documents",
        ],
      },
      {
        title: "Stage 4: Inspection Readiness & Post-Licensing Compliance (Steps 8–10)",
        description: "Preparing for on-site SEC inspections and ongoing governance.",
        services: [
          "Mock Compliance Reviews & On-Site Inspection Readiness",
          "Regulatory Inspection Response & Remediation",
          "Post-Licensing Quarterly Compliance Returns",
          "Continuous Capital Markets Legal Advisory",
        ],
      },
    ],
    regulators: ["SEC Nigeria", "Central Bank of Nigeria (CBN)", "NGX / FMDQ"],
  },
};

export function generateStaticParams() {
  return [
    { slug: "commercial-law" },
    { slug: "corporate-governance" },
    { slug: "property-law" },
    { slug: "capital-market" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practiceData[slug];
  if (!practice) return createSeoMetadata({ title: "Practice Area Not Found" });

  return createSeoMetadata({
    title: `${practice.title} | I. Lawrence Practice`,
    description: practice.heroDescription,
  });
}

export default async function PracticeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const practice = practiceData[slug];
  if (!practice) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                {practice.category}
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              {practice.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              {practice.heroDescription}
            </p>
          </div>

          {/* Special Flagship Banner if Capital Market */}
          {practice.isFlagship && (
            <div className="bg-charcoal-900 text-white p-8 sm:p-10 rounded-2xl border border-charcoal-800 space-y-4 shadow-xl">
              <Badge variant="terracotta" className="bg-terracotta-500 text-white border-none">
                Flagship Practice Feature
              </Badge>
              <h3 className="font-heading font-bold text-2xl text-white">
                Complete 10-Step SEC Capital Market Licensing Guidance
              </h3>
              <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                Our flagship practice guides businesses through every regulatory stage of becoming a licensed Capital Market Operator (CMO) in Nigeria — from initial business audit to SEC inspection readiness and ongoing compliance.
              </p>
            </div>
          )}

          {/* Pillars List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {practice.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-white p-8 rounded-xl border border-beige-300 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-bold text-terracotta-500">PILLAR 0{idx + 1}</div>
                  <h3 className="font-heading font-bold text-xl text-charcoal-900">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-[11px] font-bold text-charcoal-900 uppercase tracking-wider">Services Included:</h4>
                  {pillar.services.map((serv) => (
                    <div key={serv} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-terracotta-500 shrink-0 mt-0.5" />
                      <span>{serv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Regulators List */}
          <div className="bg-white p-8 rounded-xl border border-beige-300 space-y-3">
            <h4 className="font-heading font-bold text-lg text-charcoal-900">Key Sector Regulators Mapped</h4>
            <p className="text-xs text-slate-600">Our team maintains direct experience dealing with regulatory authorities for this practice:</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {practice.regulators.map((reg) => (
                <span key={reg} className="text-xs font-semibold px-3 py-1 bg-beige-200 text-charcoal-900 rounded-md border border-beige-300">
                  {reg}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <Link href="/contact">
              <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Request Advisory on {practice.title}
              </Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
