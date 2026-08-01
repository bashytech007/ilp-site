import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { ShieldCheck, ArrowRight, Award, CheckCircle2, UserCheck, Heart, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About Us | I. Lawrence Practice",
  description:
    "Learn about I. Lawrence Practice, our Managing Partner Itunu Lawrence, our firm vision, mission, core values, and why clients choose us as their commercial legal partner in Nigeria.",
});

export default function AboutPage() {
  const values = [
    { title: "Integrity", desc: "We uphold the highest ethical standards, ensuring honesty, transparency, and accountability in every engagement.", icon: <ShieldCheck className="h-6 w-6 text-terracotta-500" /> },
    { title: "Excellence", desc: "We are committed to delivering technically sound, commercially practical, and results-oriented legal services.", icon: <Award className="h-6 w-6 text-terracotta-500" /> },
    { title: "Client Focus", desc: "We invest time in understanding our clients' businesses and provide tailored legal solutions that support long-term success.", icon: <UserCheck className="h-6 w-6 text-terracotta-500" /> },
    { title: "Professionalism", desc: "We maintain the highest standards of competence, responsiveness, and confidentiality in all client relationships.", icon: <CheckCircle2 className="h-6 w-6 text-terracotta-500" /> },
    { title: "Innovation", desc: "We embrace creative thinking and practical strategies to solve complex legal and regulatory challenges.", icon: <Lightbulb className="h-6 w-6 text-terracotta-500" /> },
    { title: "Collaboration", desc: "We work closely with clients, regulators, and professional partners to achieve efficient and sustainable outcomes.", icon: <Users className="h-6 w-6 text-terracotta-500" /> },
  ];

  const whyChoosePillars = [
    { title: "Business-Focused Advice", desc: "We provide practical legal solutions that align with our clients' commercial objectives." },
    { title: "Regulatory Expertise", desc: "Extensive experience advising on compliance and engagements with key Nigerian regulators including CAC, SEC, CBN, NIPC, and sector regulators." },
    { title: "End-to-End Support", desc: "Supporting clients throughout the entire business lifecycle — from incorporation and licensing to governance, transactions, compliance, and dispute resolution." },
    { title: "Responsive Service", desc: "We prioritise timely communication, accessibility, and proactive legal support." },
    { title: "Trusted Partnership", desc: "Our clients view us as long-term strategic advisers dedicated to protecting their interests and supporting sustainable growth." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Header & Story */}
          <div className="space-y-6 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                ABOUT US & FIRM OVERVIEW
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              Our Story & Commercial Philosophy
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              I. Lawrence Practice is a modern, business-focused law firm committed to helping businesses, investors, entrepreneurs, financial institutions, and multinational clients navigate Nigeria's evolving legal and regulatory landscape with confidence.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Founded on the principle that legal services should create business value, we combine deep legal expertise with commercial insight to provide practical, strategic, and solution-driven advice. From business formation and regulatory approvals to corporate governance, capital market advisory, property transactions, and dispute resolution, we partner with our clients at every stage of their growth journey.
            </p>
          </div>

          {/* Leadership Team Section (Itunu Lawrence) */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-beige-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-linen-50 shadow-md bg-charcoal-900 flex flex-col items-center justify-center text-white text-center p-6">
                <div className="w-16 h-16 rounded-full bg-terracotta-500/30 border border-terracotta-400 flex items-center justify-center font-heading font-bold text-2xl mb-2 text-gold-400">
                  IL
                </div>
                <h3 className="font-heading font-bold text-lg text-white">Itunu Lawrence</h3>
                <p className="text-xs text-terracotta-400 font-semibold uppercase tracking-wider mt-0.5">Managing Partner</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <Badge variant="terracotta">Leadership Team</Badge>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal-900">
                Itunu Lawrence — Managing Partner
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Itunu Lawrence leads the firm's strategic direction and legal practice, bringing extensive experience in corporate and commercial law, corporate governance, capital markets, regulatory compliance, investment advisory, and real estate transactions. With a strong understanding of Nigeria's business and regulatory environment, Itunu advises local and international clients on business structuring, regulatory licensing, governance frameworks, investment transactions, and complex commercial matters.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Her leadership is driven by a commitment to excellence, innovation, and delivering practical legal solutions that enable businesses to grow with confidence.
              </p>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-charcoal-900 text-white p-8 rounded-xl space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-terracotta-400 uppercase">OUR VISION</span>
              <h3 className="font-heading font-bold text-2xl text-white">To Be Nigeria's Most Trusted Commercial Counsel</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                To be one of Nigeria's most trusted and respected commercial law firms, recognised for delivering innovative legal solutions that empower businesses, attract investment, and promote sustainable growth.
              </p>
            </div>

            <div className="bg-terracotta-500 text-white p-8 rounded-xl space-y-3">
              <span className="text-xs font-bold tracking-[0.2em] text-terracotta-100 uppercase">OUR MISSION</span>
              <h3 className="font-heading font-bold text-2xl text-white">Exceptional Advisory Through Integrity & Innovation</h3>
              <p className="text-xs text-terracotta-100 leading-relaxed">
                To provide exceptional legal and regulatory advisory services through integrity, professionalism, innovation, and a client-centred approach, helping businesses make informed decisions, manage risks, and achieve strategic objectives.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-heading font-bold text-3xl text-charcoal-900">Our Core Values</h2>
              <p className="text-xs text-slate-600">The institutional values that guide every client engagement and legal decision.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white p-6 rounded-xl border border-beige-300 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-full bg-beige-200 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h4 className="font-heading font-bold text-lg text-charcoal-900">{v.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Clients Choose Us */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-beige-300 space-y-8">
            <div className="space-y-2 max-w-2xl">
              <Badge variant="terracotta">Strategic Differentiation</Badge>
              <h2 className="font-heading font-bold text-3xl text-charcoal-900">Why Clients Choose Us</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoosePillars.map((item, idx) => (
                <div key={item.title} className="p-6 rounded-xl bg-linen-50 border border-beige-300 space-y-2">
                  <div className="text-xs font-bold text-terracotta-500">0{idx + 1}.</div>
                  <h4 className="font-heading font-bold text-base text-charcoal-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Link href="/contact">
              <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Partner With Us Today
              </Button>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
