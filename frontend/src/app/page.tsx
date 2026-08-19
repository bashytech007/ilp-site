import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PositioningBand } from "@/components/sections/positioning-band";
// import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { MeetTheFirmSection } from "@/components/sections/meet-the-firm";
import { PracticeGrid } from "@/components/sections/practice-grid";
import { Roadmap10StepSection } from "@/components/sections/roadmap-10-step";
import { ReviewsCarouselSection } from "@/components/sections/reviews-carousel";
import { InsightsFeedSection } from "@/components/sections/insights-feed";
import { FaqAccordionSection } from "@/components/sections/faq-accordion";
import { CtaBannerSection } from "@/components/sections/cta-banner";
import { generateMetadata, generateLegalServiceSchema } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "I. Lawrence Practice | Commercial & Corporate Law Firm Nigeria",
  description:
    "Helping local and international businesses establish, expand and operate successfully through practical legal solutions in Corporate & Commercial Law, Capital Markets, Property Law and Regulatory Compliance in Nigeria.",
});

export default function HomePage() {
  const schemaData = generateLegalServiceSchema();

  return (
    <>
      {/* Schema.org LegalService JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased selection:bg-terracotta-500 selection:text-white">
        {/* Sticky Solid Charcoal Header Navigation */}
        <HeaderNav />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow">
          {/* 1. Hero Section */}
          <HeroSection />

          {/* 2. Strategic 5-Pillar Lifecycle Band */}
          <PositioningBand />

          {/* 3. Icon-Circle Practice Area Cards */}
          {/* <WhyChooseUsSection /> */}

          {/* 4. Meet The Firm (Itunu Lawrence Headshot & Overview) */}
          <MeetTheFirmSection />

          {/* 5. Core Practice Areas Grid */}
          <PracticeGrid />

          {/* 6. Flagship 10-Step Capital Market SEC Licensing Roadmap */}
          <Roadmap10StepSection />

          {/* 7. Client Testimonials & Anonymized Reviews */}
          <ReviewsCarouselSection />

          {/* 8. Thought Leadership & Scaffolded Legal Guides */}
          <InsightsFeedSection />

          {/* 9. Two-Column Asymmetric FAQ Accordion */}
          <FaqAccordionSection />

          {/* 10. Bottom Consultation CTA Banner */}
          <CtaBannerSection />
        </main>

        {/* Solid Dark Charcoal Footer */}
        <Footer />
      </div>
    </>
  );
}
