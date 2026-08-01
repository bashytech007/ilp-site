"use client";

import * as React from "react";
import { Building2, TrendingUp, ShieldCheck, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function WhyChooseUsSection() {
  const cards = [
    {
      icon: <Building2 className="h-7 w-7 text-charcoal-900" />,
      title: "CAC & NIPC",
      subtitle: "Incorporation & Foreign Entry",
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-charcoal-900" />,
      title: "SEC & CBN",
      subtitle: "Capital Markets & Financial Licences",
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-charcoal-900" />,
      title: "NAFDAC & FCCPC",
      subtitle: "Commercial Regulatory Compliance",
    },
    {
      icon: <Landmark className="h-7 w-7 text-charcoal-900" />,
      title: "Land Registry",
      subtitle: "Governor's Consent & Title Perfection",
    },
  ];

  return (
    <section className="py-20 bg-linen-50 border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal-900 mb-3">
            Practice Areas
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Regulatory reach across the agencies that govern business in Nigeria.
          </p>
        </div>

        {/* 4 Icon-Circle Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 text-center shadow-sm border border-beige-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
            >
              {/* Centered Circular Icon Container */}
              <div className="w-20 h-20 rounded-full bg-beige-200 flex items-center justify-center mb-6 shadow-inner">
                {card.icon}
              </div>

              {/* Serif Title */}
              <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-2">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-slate-500 font-medium">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
