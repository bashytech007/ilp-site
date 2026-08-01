import * as React from "react";
import { HeaderNav } from "@/components/layout/header-nav";
import { Footer } from "@/components/layout/footer";
import { FaqAccordionSection } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Frequently Asked Questions | I. Lawrence Practice",
  description:
    "Find clear answers to common questions regarding company registration, foreign ownership, SEC capital market licensing, and land title verification in Nigeria.",
});

export default function FaqsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-linen-50 font-body antialiased">
      <HeaderNav />

      <main id="main-content" className="flex-grow pt-24">
        {/* Full FAQ 2-Column Section */}
        <FaqAccordionSection />

        {/* Bottom CTA Banner */}
        <div className="bg-charcoal-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
            Have a Specific Legal Question Not Covered Above?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Our legal practitioners are available to review your corporate query and provide tailored legal guidance.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button variant="terracotta" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                Ask Our Legal Team
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
