"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, FileText, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function InsightsFeedSection() {
  const articles = [
    {
      title: "How to Register a Company in Nigeria",
      category: "Business & Corporate Law",
      summary: "Comprehensive guide to CAC incorporation, shareholder structures, statutory filings, and post-registration compliance.",
      readTime: "Pending Content",
      slug: "how-to-register-company-nigeria",
      isPending: true,
    },
    {
      title: "Foreign Investment Guide & NIPC Licensing",
      category: "Business & Corporate Law",
      summary: "Essential legal roadmap for international investors: market entry, business permits, CERPAC resident permits, and NOTAP tech transfer agreements.",
      readTime: "Pending Content",
      slug: "foreign-investment-guide-nigeria",
      isPending: true,
    },
    {
      title: "Complete Guide to Becoming a Capital Market Operator in Nigeria",
      category: "Capital Markets Series",
      summary: "Dedicated 11-part educational series covering SEC licences, minimum capital requirements, corporate structuring, and inspection readiness.",
      readTime: "Master Series",
      slug: "capital-markets-operator-guide",
      isPending: false,
    },
  ];

  return (
    <section className="py-24 bg-linen-50 border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                RESOURCES / KNOWLEDGE CENTRE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900">
              Thought Leadership & Legal Guides
            </h2>
            <p className="text-sm text-slate-600">
              Regularly updated knowledge hub demonstrating commercial insight and legal clarity across Nigerian business law.
            </p>
          </div>

          <Link href="/insights" className="shrink-0">
            <span className="inline-flex items-center text-sm font-bold text-terracotta-500 hover:text-terracotta-600 transition-colors gap-1">
              <span>View All Guides</span>
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        {/* 3 Scaffold Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {articles.map((item) => (
            <motion.div key={item.slug} variants={fadeInUp}>
              <Card className="h-full flex flex-col justify-between p-7 bg-white border border-beige-300 shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center  gap-2">
                    <Badge variant="terracotta" className="text-[10px] bg-terracotta-100 text-terracotta-700 border-terracotta-200">
                      {item.category}
                    </Badge>

                    {item.isPending ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <AlertCircle className="h-3 w-3 text-amber-600" />
                        <span>Pending Content</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{item.readTime}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-lg text-charcoal-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1">
                    <FileText className="h-3.5 w-3.5 text-terracotta-500" />
                    <span>Editorial Hub</span>
                  </span>

                  <Link
                    href={`/insights/${item.slug}`}
                    className="text-terracotta-500 font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>{item.isPending ? "View Outline" : "Explore Series"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
