"use client";

import * as React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function ReviewsCarouselSection() {
  const testimonials = [
    {
      id: "t-1",
      quote:
        "I. Lawrence Practice guided our entry into the Nigerian market end to end — incorporation, NIPC registration and regulatory approvals were handled with clarity and speed.",
      author: "Managing Director, Consumer Goods Group",
      rating: 5,
    },
    {
      id: "t-2",
      quote:
        "Structuring and securing our SEC Capital Market Operator licence was seamless. ILP's team handled regulatory inspections and documentation with impressive precision.",
      author: "Chief Executive Officer, Investment Management Firm",
      rating: 5,
    },
    {
      id: "t-3",
      quote:
        "Their property due diligence prevented a high-risk commercial real estate transaction. Thorough title verification and Governor's Consent perfection saved our investment.",
      author: "Head of Real Estate Assets, Private Equity Fund",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-linen-50 border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="space-y-3 mb-14">
          <div className="flex items-center gap-2">
            <span className="h-0.5 w-8 bg-terracotta-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
              REVIEWS
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal-900">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {testimonials.map((item) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <Card className="h-full flex flex-col justify-between p-8 bg-white border border-beige-300 shadow-sm hover:shadow-md transition-all">
                <div className="space-y-4">
                  {/* 5 Terracotta Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-terracotta-500 text-terracotta-500" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm leading-relaxed text-slate-700 font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Terracotta Attribution */}
                <div className="pt-6 mt-6 border-t border-slate-100 text-xs font-semibold text-terracotta-500">
                  — {item.author}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Scaffold Placeholder Banner for Client Reviews Upload */}
        {/* <div className="p-6 rounded-lg bg-linen-100 border border-dashed border-terracotta-300 text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-terracotta-500 uppercase tracking-wider">
            <Upload className="h-4 w-4" />
            <span>Client Reviews Upload Section</span>
          </div>
          <p className="text-xs text-slate-500">
            This section is structured to dynamically display verified client testimonials and case study reviews as they are submitted.
          </p>
        </div> */}

      </div>
    </section>
  );
}
