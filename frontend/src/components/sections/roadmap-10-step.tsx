"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Roadmap10StepSection() {
  const stepsPreview = [
    { num: 1, title: "Understanding Your Business", detail: "Business model analysis & regulatory scope mapping" },
    { num: 2, title: "Selecting Licence Type", detail: "Selecting Fund Manager, Portfolio Manager, or Issuing House licence" },
    { num: 3, title: "Corporate Structuring", detail: "Ensuring minimum share capital compliance & director qualifications" },
    { num: 4, title: "Regulatory Documentation", detail: "Form SEC 2, MOA/AOA customization & business plans" },
    { num: 5, title: "Licensing Application", detail: "Eligibility assessment & submission to SEC Nigeria" },
    { num: 6, title: "Product Structuring", detail: "Mutual Funds, Money Market, Dollar Funds & CIS setup" },
    { num: 7, title: "Product Approval", detail: "Trust deeds, client agreements & SEC product approval" },
    { num: 8, title: "Post-Licensing Compliance", detail: "Statutory filings, compliance officer oversight & reporting" },
    { num: 9, title: "Regulatory Inspections", detail: "Mock compliance reviews & SEC inspection response" },
    { num: 10, title: "Ongoing Advisory", detail: "Continuous strategic legal counsel for licensed operators" },
  ];

  return (
    <section className="py-24 bg-linen-50 dark:bg-charcoal-950 text-charcoal-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="primary">Flagship Practice Roadmap</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 dark:text-white">
            10-Step Roadmap to Becoming a Licensed Capital Market Operator in Nigeria
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            We provide step-by-step legal advisory to guide investment companies, fund managers, and financial institutions through the complete SEC licensing lifecycle.
          </p>
        </div>

        {/* 10-Step Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        >
          {stepsPreview.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeInUp}
              className="bg-white dark:bg-charcoal-900 border border-slate-200 dark:border-slate-800 p-5 rounded-lg shadow-sm hover:border-terracotta-500/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-full bg-terracotta-100 dark:bg-terracotta-900/40 text-terracotta-600 dark:text-terracotta-300 font-bold text-xs flex items-center justify-center border border-terracotta-200 dark:border-terracotta-700">
                    {step.num}
                  </span>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-terracotta-500 transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-sm text-charcoal-900 dark:text-white group-hover:text-terracotta-600 transition-colors mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-terracotta-500 shrink-0" />
                <span>SEC Compliant</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button using Terracotta design token */}
        <div className="text-center pt-4">
          <Link href="/practices/capital-market">
            <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Explore Full Capital Market Licensing Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
