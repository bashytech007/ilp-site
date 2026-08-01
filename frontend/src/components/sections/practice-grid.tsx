"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Scale, ShieldAlert, Home, Landmark, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PracticeGrid() {
  const practices = [
    {
      id: "commercial-law",
      title: "1. Commercial Law & FDI",
      description: "Supporting businesses from formation and foreign market entry to commercial contracting and M&A transactions.",
      icon: <Scale className="h-6 w-6 text-terracotta-500" />,
      subservices: [
        "Company Registration & Subsidiary Formation",
        "Foreign Direct Investment (FDI) & NIPC Permits",
        "Expatriate Quota & Business Permits",
        "Commercial Contract Structuring",
        "Mergers & Acquisitions (M&A) Support",
      ],
      href: "/practices/commercial-law",
      isFlagship: false,
    },
    {
      id: "corporate-governance",
      title: "2. Corporate Governance & Compliance",
      description: "Building institutional governance systems that satisfy regulatory expectations while fostering sustainable growth.",
      icon: <ShieldAlert className="h-6 w-6 text-terracotta-500" />,
      subservices: [
        "Board Charters & Governance Frameworks",
        "Annual Compliance Calendars & Statutory Filings",
        "AML/CFT Compliance & Risk Assessment",
        "Company Secretarial Services & AGMs",
        "Internal Controls & Governance Audits",
      ],
      href: "/practices/corporate-governance",
      isFlagship: false,
    },
    {
      id: "property-law",
      title: "3. Property & Real Estate Law",
      description: "Providing complete legal protection throughout the real estate investment, title perfection, and development lifecycle.",
      icon: <Home className="h-6 w-6 text-terracotta-500" />,
      subservices: [
        "Property Acquisition & Title Verification",
        "Land Registry Perfection & Governor's Consent",
        "Deeds of Assignment & Lease Agreements",
        "Joint Development Agreements (JDA)",
        "Property Dispute Resolution & Litigation",
      ],
      href: "/practices/property-law",
      isFlagship: false,
    },
    {
      id: "capital-markets",
      title: "4. Capital Market Legal Advisory",
      description: "Our flagship practice area guiding firms through becoming a licensed Capital Market Operator (CMO) in Nigeria.",
      icon: <Landmark className="h-6 w-6 text-gold-400" />,
      subservices: [
        "SEC Operator License Selection & Eligibility",
        "Corporate Structuring & Share Capital Audit",
        "Product Structuring (Mutual, Money Market & Dollar Funds)",
        "SEC Product Documentation & Approval",
        "Regulatory Inspection & Mock Audits",
      ],
      href: "/practices/capital-market",
      isFlagship: true,
    },
  ];

  return (
    <section className="py-24 bg-linen-50/50 dark:bg-charcoal-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="primary">Core Practice Areas</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-charcoal-900 dark:text-white">
              Specialized Legal Solutions Aligned With Commercial Goals
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-300">
              Explore our core commercial practice pillars designed to safeguard investments, ensure regulatory compliance, and drive strategic expansion.
            </p>
          </div>

          <Link href="/practices" className="shrink-0">
            <span className="inline-flex items-center text-sm font-bold text-terracotta-600 dark:text-terracotta-400 hover:underline gap-1">
              View All Practice Details <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {practices.map((practice) => (
            <motion.div key={practice.id} variants={fadeInUp}>
              <Card
                showTopAccent
                className={`h-full flex flex-col justify-between p-8 ${
                  practice.isFlagship
                    ? "border-terracotta-500/50 bg-gradient-to-b from-charcoal-900 to-charcoal-950 text-white dark:border-terracotta-500/80"
                    : "bg-white dark:bg-charcoal-900 border-slate-200 dark:border-slate-800 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-terracotta-50 dark:bg-charcoal-800 flex items-center justify-center">
                      {practice.icon}
                    </div>
                    {practice.isFlagship && (
                      <Badge variant="gold" className="px-3 py-1">
                        Flagship Practice
                      </Badge>
                    )}
                  </div>

                  {/* Restored heading element for all four cards consistently */}
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className={`text-xl sm:text-2xl font-bold font-heading ${
                      practice.isFlagship ? "text-white" : "text-charcoal-900 dark:text-white"
                    }`}>
                      {practice.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 pt-1">
                    <CardDescription className={`text-sm leading-relaxed mb-6 ${
                      practice.isFlagship ? "text-slate-200" : "text-slate-700 dark:text-slate-300"
                    }`}>
                      {practice.description}
                    </CardDescription>

                    <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      {practice.subservices.map((sub) => (
                        <div key={sub} className="flex items-center gap-2.5 text-sm font-medium">
                          <CheckCircle2 className={`h-4 w-4 shrink-0 ${
                            practice.isFlagship ? "text-gold-400" : "text-terracotta-500"
                          }`} />
                          <span className={practice.isFlagship ? "text-slate-100" : "text-charcoal-800 dark:text-slate-200"}>
                            {sub}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-0 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <Link href={practice.href} className="w-full">
                    <span className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:translate-x-1 ${
                      practice.isFlagship ? "text-gold-400 hover:text-gold-300" : "text-terracotta-600 hover:text-terracotta-700 dark:text-terracotta-400"
                    }`}>
                      <span>Explore Practice Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
