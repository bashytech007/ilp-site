"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PositioningBand() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <section className="py-16 bg-slate-900 text-white border-y border-obsidian-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">
            End-to-End Commercial Partner
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Supporting Your Business Throughout Every Stage of Growth
          </h2>
          <p className="text-sm text-slate-400">
From initial incorporation to regulatory matters and compliance, global business expansion or restructuring, we partner with clients across the entire business lifecycle.          </p>
        </div>

        {/* 5-Step Lifecycle Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {siteConfig.lifecyclePillars.map((pillar, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.button
                key={pillar.id}
                variants={fadeInUp}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-5 rounded-lg border transition-all duration-300 relative ${
                  isActive
                    ? "bg-obsidian-950 border-primary-500 shadow-lg scale-[1.02]"
                    : "bg-obsidian-900/70 border-slate-800 hover:border-slate-700 hover:bg-obsidian-900"
                }`}
              >
                {/* Step Number & Label */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold tracking-wider text-gold-400">
                    0{idx + 1}. {pillar.label}
                  </span>
                  {isActive && <CheckCircle2 className="h-4 w-4 text-primary-400" />}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>

                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-primary-600 to-gold-500 rounded-b-lg" />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
