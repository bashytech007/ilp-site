"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, PhoneCall, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  return (
    <WavyBackground className="pt-32 pb-20 md:pt-40 md:pb-28 bg-linen-50 text-charcoal-900 border-b border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline + Copy + CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="h-0.5 w-6 sm:w-8 bg-terracotta-500 shrink-0" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.2em] text-terracotta-500">
                Corporate & Commercial Law Firm • Lagos, Nigeria
              </span>
            </motion.div>

            {/* Primary Display Serif Headline with Inline Accent */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-[2.25rem] sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-charcoal-900 font-normal"
            >
              Your Trusted Legal Partner for{" "}
              <span className="text-terracotta-500 font-bold italic">
                Business Growth
              </span>
              , Investment & Regulatory Compliance in Nigeria
            </motion.h1>

            {/* Subheading Paragraph */}
            <motion.p
              variants={fadeInUp}
              className="font-body text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              Helping local and international businesses establish, expand and operate successfully through practical legal solutions in Corporate & Commercial Law, Capital Markets, Property Law and Regulatory Compliance.
            </motion.p>

            {/* CTA Trio */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link href="/contact?type=consultation">
                <Button variant="terracotta" size="lg" className="w-full sm:w-auto font-bold shadow-md" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Book a Consultation
                </Button>
              </Link>

              <Link href="/contact?type=lawyer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 bg-white text-charcoal-900 hover:bg-linen-100" leftIcon={<PhoneCall className="h-4 w-4 text-terracotta-500" />}>
                  Speak to a Lawyer
                </Button>
              </Link>

              <Link href="/contact?type=advisory" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-terracotta-500 transition-colors py-2 px-3">
                <FileText className="h-4 w-4 text-terracotta-500" />
                <span>Request Legal Advisory</span>
              </Link>
            </motion.div>

            {/* Location Bar */}
            <motion.div variants={fadeInUp} className="pt-2 text-xs font-semibold text-slate-500">
              Victoria Island / Ikoyi Commercial Hub • Lagos, Nigeria
            </motion.div>
          </motion.div>

          {/* Right Column: Layered Circular Image Cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6 lg:py-0"
          >
            {/* Background Soft Blush Aura */}
            <div className="absolute -inset-4 bg-terracotta-100/50 rounded-full blur-3xl -z-10" />

            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">
              
              {/* Main Center Circle (Boardroom Team) */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-[#FAF4F0] shadow-2xl bg-white z-10">
                <Image
                  src="/images/hero/hero-boardroom.jpg"
                  alt="I. Lawrence Practice Boardroom & Executive Legal Advisory"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Overlapping Bottom-Left Circle (Portrait - Man Reading Document) */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-6 w-32 h-32 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#FAF4F0] shadow-xl bg-white z-20">
                <Image
                  src="/images/hero/hero-man-reading.jpg"
                  alt="Senior Commercial Attorney Reviewing Contracts"
                  fill
                  sizes="(max-width: 768px) 130px, 180px"
                  className="object-cover object-top"
                />
              </div>

              {/* Overlapping Top-Right Circle (Portrait - Woman Legal Counsel) */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#FAF4F0] shadow-xl bg-white z-20">
                <Image
                  src="/images/hero/hero-woman-lawyer.jpg"
                  alt="Corporate Governance & Regulatory Lead Counsel"
                  fill
                  sizes="(max-width: 768px) 110px, 160px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </WavyBackground>
  );
}
