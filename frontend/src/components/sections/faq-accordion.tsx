"use client";

import * as React from "react";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

export function FaqAccordionSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How long does it take to register a company in Nigeria?",
      answer:
        "Standard company registration with the Corporate Affairs Commission (CAC) typically takes between 3 to 7 business days, provided all name reservations, director IDs, and statutory filings are complete. For foreign-owned companies requiring NIPC registration and business permits, total setup timelines average 2 to 3 weeks.",
    },
    {
      id: "faq-2",
      question: "Can a foreigner own 100% of a company in Nigeria?",
      answer:
        "Yes. Under the Nigerian Investment Promotion Commission (NIPC) Act, foreign investors can own 100% equity in Nigerian businesses, except in negative list sectors (such as arms, ammunition, and narcotics). Foreign companies must obtain NIPC registration, business permits, and comply with expatriate quota regulations.",
    },
    {
      id: "faq-3",
      question: "What licences are required to operate in regulated sectors?",
      answer:
        "Regulated sectors (such as Capital Markets, Banking, FinTech, Energy, NAFDAC, and Telecoms) require specialized licences from respective statutory bodies (SEC, CBN, NUPRC, NAFDAC, NCC). ILP provides end-to-end advisory to audit your scope and process the appropriate licences.",
    },
    {
      id: "faq-4",
      question: "What is the process for becoming a Capital Market Operator?",
      answer:
        "Becoming a SEC-licensed Capital Market Operator involves 10 structured steps: initial business audit, licence selection (Fund Manager, Portfolio Manager, Issuing House), share capital compliance, Form SEC 2 documentation, eligibility assessment, SEC filing, product structuring, inspection readiness, approval, and post-licensing compliance.",
    },
    {
      id: "faq-5",
      question: "What are the SEC's minimum capital requirements?",
      answer:
        "The Securities and Exchange Commission (SEC) enforces specific minimum paid-up capital requirements depending on the operator function (e.g. Portfolio Manager, Fund Manager, Investment Adviser). ILP audits your corporate capital structure to ensure total compliance prior to filing.",
    },
    {
      id: "faq-6",
      question: "How do I obtain product approval for an investment fund?",
      answer:
        "Product approval requires preparing comprehensive documentation (Trust Deeds, Information Memoranda, Investment Guidelines, Client Agreements, and Risk Disclosures) and submitting them for SEC review. ILP handles end-to-end product documentation and SEC clearance.",
    },
    {
      id: "faq-7",
      question: "What are the post-licensing compliance obligations?",
      answer:
        "Post-licensing obligations include filing annual compliance calendars, quarterly financial returns, maintaining designated compliance officers, conducting mock inspections, and adhering to SEC and AML/CFT regulatory guidelines.",
    },
    {
      id: "faq-8",
      question: "How do I verify the title to land before purchase?",
      answer:
        "Land title verification involves conducting a formal search at the Land Registry, investigating chartings at the Surveyor-General's office to confirm non-acquisition status, verifying Governor's Consent, checking for existing mortgages or encumbrances, and physically inspecting property boundaries.",
    },
  ];

  return (
    <section className="py-24 bg-linen-50 border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Asymmetric FAQ Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Static Eyebrow & Serif Heading (Doesn't scroll with accordion) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                FAQS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-charcoal-900 leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Find answers to key questions regarding company incorporation, foreign investment, SEC capital market licensing, and real estate title verification in Nigeria.
            </p>

            <div className="pt-2">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 text-sm font-bold text-terracotta-500 hover:text-terracotta-600 transition-colors"
              >
                <span>Explore All FAQs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Expandable Accordion Rows with Terracotta Circle '+' Toggle */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-beige-300 shadow-sm">
            <Accordion items={faqs} />
          </div>

        </div>

      </div>
    </section>
  );
}
