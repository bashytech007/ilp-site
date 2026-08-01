import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Upload, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Client Success Stories & Reviews | I. Lawrence Practice",
  description:
    "Explore anonymized transaction case studies and client reviews across capital market licensing, foreign entry, real estate due diligence, and corporate governance in Nigeria.",
});

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "cs-1",
      title: "SEC Portfolio Management Company Licensing",
      sector: "Capital Markets",
      summary: "Successfully structured corporate governance, minimum capital compliance, Form SEC 2 documentation, and secured SEC operator licensing for a portfolio management company.",
      status: "Anonymized Case Study",
    },
    {
      id: "cs-2",
      title: "Foreign Investor Nigerian Market Entry & Licensing",
      sector: "Commercial Law & FDI",
      summary: "Guided a foreign investor through subsidiary incorporation, NIPC registration, business permits, CERPAC resident permits, and regulatory compliance.",
      status: "Anonymized Case Study",
    },
    {
      id: "cs-3",
      title: "High-Value Commercial Real Estate Due Diligence",
      sector: "Property Law",
      summary: "Advised on title verification, land registry searches, contract negotiations, and Governor's Consent title perfection for a multi-billion Naira commercial site.",
      status: "Anonymized Case Study",
    },
    {
      id: "cs-4",
      title: "Financial Institution Enterprise Governance Framework",
      sector: "Corporate Governance",
      summary: "Developed board charters, committee structures, risk policies, and AML/CFT compliance systems for a regulated investment institution.",
      status: "Anonymized Case Study",
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
                CLIENT SUCCESS STORIES & REVIEWS
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              Anonymized Transaction Case Studies & Verified Reviews
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              We partner with local enterprises, fund managers, investors, and foreign corporations to deliver practical legal results across complex transactions.
            </p>
          </div>

          {/* 4 Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white p-8 rounded-xl border border-beige-300 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="terracotta" className="text-[10px]">
                      {cs.sector}
                    </Badge>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-terracotta-500" />
                      <span>{cs.status}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-charcoal-900">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-terracotta-500 font-semibold">
                  <span>Representative Transaction</span>
                  <Award className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Client Reviews Upload & Submission Scaffold Section (Requirement 4) */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-beige-300 space-y-6">
            <div className="flex items-center gap-2 text-terracotta-500 font-bold text-xs uppercase tracking-wider">
              <Upload className="h-4 w-4" />
              <span>Client Reviews & Testimonials Upload Portal</span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900">
              Submit or View Client Reviews
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              This section is scaffolded to accommodate verified client testimonials and review submissions. Client reviews are published following strict attorney-client privilege checks and anonymization protocols.
            </p>

            <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs flex items-start gap-2 max-w-xl">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                <strong>Scaffold Notice:</strong> Additional client reviews and full transaction breakdowns will be uploaded here upon client authorization.
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact">
              <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Book a Confidential Consultation
              </Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
