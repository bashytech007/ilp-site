import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Landmark, TrendingUp, Cpu, Building, HardHat, Factory, Smartphone, Sprout, Users, Globe, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Industries We Serve | I. Lawrence Practice",
  description:
    "Discover the commercial sectors served by I. Lawrence Practice: Financial Services, Capital Markets, FinTech, Real Estate, Manufacturing, Tech, Agriculture, Foreign Investors.",
});

export default function IndustriesPage() {
  const sectors = [
    { name: "Financial Services", desc: "Regulatory licensing, CBN compliance, structural advisory & risk management.", icon: <Landmark className="h-6 w-6 text-charcoal-900" /> },
    { name: "Capital Markets", desc: "SEC licensing, Fund Manager setup, Portfolio Manager compliance & product approval.", icon: <TrendingUp className="h-6 w-6 text-charcoal-900" /> },
    { name: "FinTech & Digital Assets", desc: "Payment services licences, digital asset compliance, sandbox onboarding & data protection.", icon: <Cpu className="h-6 w-6 text-charcoal-900" /> },
    { name: "Investment Companies", desc: "Private equity structuring, venture capital fund documentation & portfolio advisory.", icon: <Briefcase className="h-6 w-6 text-charcoal-900" /> },
    { name: "Real Estate & Property", desc: "Commercial property acquisition, Governor's Consent, title perfection & land verification.", icon: <Building className="h-6 w-6 text-charcoal-900" /> },
    { name: "Construction & Development", desc: "Joint Development Agreements (JDA), project finance, contractor agreements & approvals.", icon: <HardHat className="h-6 w-6 text-charcoal-900" /> },
    { name: "Manufacturing & Commerce", desc: "SON, NAFDAC regulatory compliance, factory permits, supply chain contracts & trade.", icon: <Factory className="h-6 w-6 text-charcoal-900" /> },
    { name: "Technology & Telecoms", desc: "Software licensing, NOTAP technology transfer agreements, IP protection & NCC approvals.", icon: <Smartphone className="h-6 w-6 text-charcoal-900" /> },
    { name: "Agriculture & Agribusiness", desc: "Agro-investment structuring, land acquisition leases, export compliance & trade.", icon: <Sprout className="h-6 w-6 text-charcoal-900" /> },
    { name: "Family Businesses", desc: "Succession planning, family governance charters, holding structures & asset protection.", icon: <Users className="h-6 w-6 text-charcoal-900" /> },
    { name: "Foreign Investors & Multinationals", desc: "Nigerian market entry, NIPC registration, business permits, CERPAC & expatriate quotas.", icon: <Globe className="h-6 w-6 text-charcoal-900" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-8 bg-terracotta-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-500">
                SECTORS & INDUSTRIES WE SERVE
              </span>
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-charcoal-900 leading-tight">
              Deep Sector Experience Across Commercial Ecosystems
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Our lawyers advise local enterprises, regulated financial institutions, property developers, fund managers, and foreign investors across key commercial sectors in Nigeria.
            </p>
          </div>

          {/* 11 Sector Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sec) => (
              <div
                key={sec.name}
                className="bg-white p-7 rounded-xl border border-beige-300 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-beige-200 flex items-center justify-center">
                  {sec.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-charcoal-900">{sec.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-charcoal-900 text-white p-8 sm:p-12 rounded-2xl text-center space-y-4">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Operating in a Regulated Sector?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Schedule an introductory briefing with our legal team to review your sector compliance and licensing requirements.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Discuss Your Sector Needs
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
