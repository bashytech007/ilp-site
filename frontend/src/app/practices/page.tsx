import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, ShieldAlert, Home, Landmark, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Practice Areas | I. Lawrence Practice",
  description:
    "Explore practice areas at I. Lawrence Practice: Commercial Law, Corporate Governance & Compliance, Property Law, and Capital Market Legal Advisory in Nigeria.",
});

export default function PracticesIndexPage() {
  const practices = [
    {
      slug: "commercial-law",
      title: "Commercial Law",
      description: "We provide comprehensive legal services that support businesses from formation to expansion while ensuring full regulatory compliance.",
      icon: <Scale className="h-6 w-6 text-charcoal-900" />,
      subtopics: [
        "Business Formation & Company Registration (CAC, Foreign Subsidiaries, JVs, Holding Companies, Restructuring)",
        "Foreign Investment & Global Business Expansion (Market Entry, FDI, Expatriate Quota, Business Permits, CERPAC, NIPC)",
        "Licences & Regulatory Approvals (SEC, CBN, NAFDAC, SON, FCCPC, DPR/NUPRC, NSITF, PENCOM, ITF, LASRERA)",
        "Commercial Contracts (Tailored transaction agreements for corporates)",
        "Mergers & Acquisitions (Due Diligence, Structuring, Legal Documentation, Regulatory Approval, Closing)",
      ],
    },
    {
      slug: "corporate-governance",
      title: "Corporate Governance & Compliance",
      description: "Helping organisations build governance systems that satisfy regulatory expectations while supporting sustainable growth.",
      icon: <ShieldAlert className="h-6 w-6 text-charcoal-900" />,
      subtopics: [
        "Board Advisory (Board Charters, Committee Charters, Board Evaluation, Governance Audits, Directors Duties)",
        "Corporate Compliance (Annual Compliance Calendar, Statutory Filings, Statutory Registers, Company Secretarial)",
        "Risk & Regulatory Compliance (Compliance Manuals, Internal Policies, AML/CFT Compliance, Risk Assessments)",
        "Company Secretarial Services (Board Meetings, AGM Management, Minutes, Resolutions, Statutory Returns)",
      ],
    },
    {
      slug: "property-law",
      title: "Property Law",
      description: "ILP provides legal support throughout the property investment and development lifecycle.",
      icon: <Home className="h-6 w-6 text-charcoal-900" />,
      subtopics: [
        "Property Acquisition (Due Diligence, Title Investigation, Contract Review, Verification)",
        "Real Estate Transactions (Sale/Purchase Agreements, Lease Agreements, Tenancy Documentation, Joint Development Agreements)",
        "Land Documentation (Governor's Consent, Deed of Assignment, Deed of Mortgage, Deed of Lease, Perfection of Title)",
        "Property Development Advisory (Estate Developers, Commercial/Mixed-Use Projects, Project Finance)",
        "Property Dispute Resolution (Mediation, Arbitration, Litigation, Recovery of Possession, Land Disputes)",
      ],
    },
    {
      slug: "capital-market",
      title: "Capital Market Legal Advisory",
      description: "One of our flagship practice areas guiding businesses through every legal and regulatory stage of becoming a licensed Capital Market Operator in Nigeria.",
      icon: <Landmark className="h-6 w-6 text-charcoal-900" />,
      isFlagship: true,
      subtopics: [
        "Step 1: Understanding Your Business Model & Scope",
        "Step 2: Selecting the Appropriate SEC Licence",
        "Step 3: Corporate Structuring & Capital Requirements",
        "Step 4: Form SEC 2 & Regulatory Documentation",
        "Step 5: Licensing Application Process & Approval",
        "Step 6: Product Structuring (Mutual, Money Market & Dollar Funds, CIS)",
        "Step 7: SEC Product Approval & Disclosure Documents",
        "Step 8: Post-Licensing Compliance Obligations",
        "Step 9: Regulatory Inspection Readiness & Mock Audits",
        "Step 10: Ongoing Legal Advisory Partnership",
      ],
    },
  ];

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
                OUR PRACTICE AREAS
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              Comprehensive Commercial & Corporate Legal Advisory
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              We combine deep legal engineering with practical commercial understanding to protect your business, enable growth, and guarantee regulatory compliance.
            </p>
          </div>

          {/* Practices Grid */}
          <div className="grid grid-cols-1 gap-12">
            {practices.map((practice) => (
              <div
                key={practice.slug}
                className={`p-8 sm:p-10 rounded-2xl border transition-all ${
                  practice.isFlagship
                    ? "bg-charcoal-900 text-white border-charcoal-800 shadow-xl"
                    : "bg-white text-charcoal-900 border-beige-300 shadow-sm"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 border-b pb-6 border-slate-200 dark:border-slate-800">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-beige-200 flex items-center justify-center">
                        {practice.icon}
                      </div>
                      {practice.isFlagship && (
                        <Badge variant="terracotta" className="bg-terracotta-500 text-white border-none">
                          Flagship Practice Area
                        </Badge>
                      )}
                    </div>

                    <h2 className={`font-heading font-bold text-2xl sm:text-3xl ${practice.isFlagship ? "text-white" : "text-charcoal-900"}`}>
                      {practice.title}
                    </h2>

                    <p className={`text-sm leading-relaxed ${practice.isFlagship ? "text-slate-300" : "text-slate-600"}`}>
                      {practice.description}
                    </p>
                  </div>

                  <Link href={`/practices/${practice.slug}`} className="shrink-0">
                    <Button variant={practice.isFlagship ? "terracotta" : "primary"} size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                      Explore Sub-services
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${practice.isFlagship ? "text-terracotta-400" : "text-terracotta-500"}`}>
                    Core Scope & Service Pillars:
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {practice.subtopics.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs font-medium">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${practice.isFlagship ? "text-terracotta-400" : "text-terracotta-500"}`} />
                        <span className={practice.isFlagship ? "text-slate-300" : "text-slate-700"}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
