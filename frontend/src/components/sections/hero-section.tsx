"use client";

import * as React from "react";
import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import { CalendlyBookButton } from "@/components/ui/calendly-book-button";
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
            className="lg:col-span-7 space-y-4"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeInUp}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-terracotta-500">
                Corporate & Commercial Law Firm • Lagos, Nigeria
              </span>
            </motion.div>

            {/* Primary Display Serif Headline with Inline Accent */}
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1]"
            >
              Your Trusted Legal Partner for{" "}
              <span className="text-terracotta-500 font-bold italic">
                Business Growth
              </span>
            </motion.h1>
            <motion.h2 variants={fadeInUp} className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 leading-[1.2]">
                Legal and Regulatory Compliance Firm
            </motion.h2>

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
              <CalendlyBookButton
                variant="terracotta"
                size="lg"
                className="w-full sm:w-auto font-bold shadow-md cursor-pointer"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                label="Book a Consultation"
              />

              {/* <Link href="/contact?type=lawyer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 cursor-pointer bg-white text-charcoal-900 hover:bg-linen-100" leftIcon={<PhoneCall className="h-4 w-4 text-terracotta-500" />}>
                  Speak to a Lawyer
                </Button>
              </Link> */}

              {/* <Link href="/contact?type=advisory" className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-terracotta-500 transition-colors py-2 px-3">
                <FileText className="h-4 w-4 text-terracotta-500" />
                <span>Request Legal Advisory</span>
              </Link> */}
            </motion.div>

            {/* Location Bar */}
            <motion.div variants={fadeInUp} className="pt-2 text-xs font-semibold text-slate-500">
              Victoria Island / Ikoyi Commercial Hub • Lagos, Nigeria
            </motion.div>
          </motion.div>

          {/* Right Column: Lady Justice Statue Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center py-6 lg:py-0 px-4 sm:px-6 lg:px-0"
          >
            {/* Background Soft Blush Aura */}
            <div className="absolute -inset-6 bg-terracotta-100/30 rounded-[2rem] blur-3xl -z-10" />

            <div
              className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] aspect-square rounded-3xl overflow-hidden ring-1 ring-beige-300/60"
              style={{
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(250,244,240,0.6)",
              }}
            >
              <Image
                src="/images/hero/lady-justice-statue.jpg"
                alt="Lady Justice statue representing the legal practice of I. Lawrence Practice"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, (max-width: 1024px) 420px, 460px"
                className="object-cover"
                style={{ objectPosition: "35% 20%" }}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </WavyBackground>
  );
}






// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { ArrowRight, Phone, FileText } from 'lucide-react'
// import { Button } from '@/components/ui/button'

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-20 md:py-28">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 right-0 -mt-40 -mr-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 left-0 -mb-40 -ml-40 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl" />
//       </div>

//       {/* Main container */}
//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          
//           {/* Left Column: Content */}
//           <div className="flex flex-col justify-center space-y-6 sm:space-y-8">
            
//             {/* Eyebrow Label */}
//             <div className="flex items-center gap-3">
//               <div className="h-1 w-8 bg-orange-600 rounded-full" />
//               <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-600">
//                 Corporate & Commercial Law Firm • Lagos, Nigeria
//               </span>
//             </div>

//             {/* Main Headline - LARGE for impact */}
//             <div className="space-y-2">
//               <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//                 Your Trusted Legal Partner for{' '}
//                 <span className="text-orange-600 italic font-bold">Business Growth</span>
//               </h1>
              
//               {/* Secondary Headline */}
//               <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 leading-[1.2]">
//                 Investment & Regulatory Compliance in Nigeria
//               </h2>
//             </div>

//             {/* Description */}
//             <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
//               Helping local and international businesses establish, expand and operate successfully through practical legal solutions in Corporate & Commercial Law, Capital Markets, Property Law and Regulatory Compliance.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Link href="/contact?type=consultation">
//                 <Button 
//                   size="lg" 
//                   className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
//                 >
//                   <span>Book a Consultation</span>
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </Link>

//               <Link href="/contact?type=lawyer">
//                 <Button 
//                   variant="outline" 
//                   size="lg" 
//                   className="w-full sm:w-auto border-slate-300 text-slate-900 hover:bg-slate-50 font-semibold"
//                 >
//                   <Phone className="h-5 w-5 text-orange-600" />
//                   <span>Speak to a Lawyer</span>
//                 </Button>
//               </Link>
//             </div>

//             {/* Secondary CTA Link */}
//             <Link 
//               href="/contact?type=advisory"
//               className="inline-flex items-center gap-2 text-slate-700 hover:text-orange-600 font-semibold transition-colors group"
//             >
//               <FileText className="h-5 w-5 text-orange-600" />
//               <span className="group-hover:underline">Request Legal Advisory</span>
//             </Link>

//             {/* Location */}
//             <div className="pt-4 text-sm font-semibold text-slate-500 border-t border-slate-200">
//               Victoria Island / Ikoyi Commercial Hub • Lagos, Nigeria
//             </div>
//           </div>

//           {/* Right Column: Image Gallery */}
//           <div className="relative h-[500px] sm:h-[600px] lg:h-[650px]">
//             {/* Main circular image */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
//                 <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 to-blue-200/20 rounded-full blur-2xl" />
                
//                 <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-white">
//                   <Image
//                     src="/images/hero/hero-boardroom.jpg"
//                     alt="I. Lawrence Practice Boardroom & Executive Legal Advisory"
//                     fill
//                     className="object-cover object-center"
//                     priority
//                     sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
//                   />
//                 </div>
//               </div>

//               {/* Bottom-left accent circle */}
//               <div className="absolute bottom-8 left-0 w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-6 border-white shadow-lg bg-white hover:shadow-xl transition-shadow">
//                 <Image
//                   src="/images/hero/hero-man-reading.jpg"
//                   alt="Senior Commercial Attorney Reviewing Contracts"
//                   fill
//                   className="object-cover object-top"
//                   sizes="(max-width: 640px) 160px, 192px"
//                 />
//               </div>

//               {/* Top-right accent circle */}
//               <div className="absolute top-8 right-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-6 border-white shadow-lg bg-white hover:shadow-xl transition-shadow">
//                 <Image
//                   src="/images/hero/hero-woman-lawyer.jpg"
//                   alt="Corporate Governance & Regulatory Lead Counsel"
//                   fill
//                   className="object-cover object-top"
//                   sizes="(max-width: 640px) 128px, 160px"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
