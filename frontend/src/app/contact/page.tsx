"use client";

import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { CtaBannerSection } from "@/components/sections/cta-banner";
import { EngagementType } from "@/types";

export default function ContactPage() {
  const [selectedEngagement, setSelectedEngagement] =
    React.useState<EngagementType>("Book a Consultation");

  const engagementOptions: EngagementType[] = [
    "Book a Consultation",
    "Request a Legal Opinion",
    "Corporate Retainer Enquiry",
    "Capital Market Advisory Request",
    "Property Due Diligence Request",
    "Company Registration Request",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-28">
        {/* Engagement Objective Pills Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="space-y-3">
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-900">
              Select Your Engagement Objective:
            </label>
            <div className="flex flex-wrap gap-2.5">
              {engagementOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setSelectedEngagement(opt)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                    selectedEngagement === opt
                      ? "bg-terracotta-500 text-white border-terracotta-500 shadow-sm"
                      : "bg-white text-slate-700 border-beige-300 hover:border-terracotta-400 hover:bg-linen-100"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section before the footer matching reference image exactly */}
        <CtaBannerSection />
      </main>

      <Footer />
    </div>
  );
}
