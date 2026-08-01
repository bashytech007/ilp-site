"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export interface MeetTheFirmProps {
  // TEMP: stock placeholder image prop, replace with real client photo when available
  leaderPhoto?: string;
  leaderName?: string;
  leaderTitle?: string;
  className?: string;
}

export function MeetTheFirmSection({
  // TEMP: stock placeholder image, replace with real client photo when available
  leaderPhoto = "/images/hero/hero-woman-lawyer.jpg",
  leaderName = "Itunu Lawrence",
  leaderTitle = "Managing Partner",
}: MeetTheFirmProps) {
  return (
    <section className="py-24 bg-linen-50 border-b border-beige-300 relative overflow-hidden">
      {/* Subtle Background Accent Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C85228_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Circular Masked Executive Headshot */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl bg-charcoal-900 group">
              {/* TEMP: stock placeholder image, replace with real client photo when available */}
              <Image
                src={leaderPhoto}
                alt={`${leaderName} — ${leaderTitle}`}
                fill
                sizes="(max-width: 640px) 288px, 384px"
                className="object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                priority
              />
              {/* Subtle Gradient Ring Overlay */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Content & Description */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                MEET THE FIRM
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-serif font-bold text-3xl sm:text-4xl text-charcoal-900 leading-tight"
            >
              From Incorporation to Expansion, Every Business Needs Trusted Counsel.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base text-slate-600 leading-relaxed"
            >
              I. Lawrence Practice is a corporate and commercial law firm based in Lagos, Nigeria. We partner with growth-minded businesses and international investors to deliver clear, practical legal solutions across Corporate & Commercial Law, Capital Markets, Property Law and Regulatory Compliance — so our clients can establish, expand and operate with confidence.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2">
              <Link href="/about">
                <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Learn About Our Practice
                </Button>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
