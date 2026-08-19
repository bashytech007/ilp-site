import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, AlertCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white border-t border-charcoal-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-charcoal-800">
          
          {/* Column 1 (Left): Logo + Phone + Email */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Logo variant="blue-white" size="md" />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Corporate & Commercial Law Firm based in Lagos, Nigeria. Delivering practical, strategic legal solutions across Commercial Law, Capital Markets, Property Law and Regulatory Compliance.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-terracotta-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone[0].replace(/\s+/g, '')}`} className="hover:text-terracotta-400 transition-colors">
                  {siteConfig.contact.phone[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-terracotta-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-terracotta-400 transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="h-4 w-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Column 2 (Middle): Connect With Us Social Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-white tracking-wide">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Follow I. Lawrence Practice for regulatory updates, commercial insights, and legal masterclasses.
            </p>

            {/* Social Links List */}
            <div className="space-y-2.5 pt-1">
              <a
                href="https://linkedin.com/company/ilawrencepractice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-terracotta-400 transition-colors p-2 rounded bg-charcoal-800/60 border border-charcoal-700 w-fit"
              >
                <Linkedin className="h-4 w-4 text-terracotta-400" />
                <span>LinkedIn / I. Lawrence Practice</span>
              </a>

              <a
                href="https://twitter.com/ILawrenceLaw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-terracotta-400 transition-colors p-2 rounded bg-charcoal-800/60 border border-charcoal-700 w-fit"
              >
                <Twitter className="h-4 w-4 text-terracotta-400" />
                <span>Twitter / @ILawrenceLaw</span>
              </a>

              <a
                href="https://facebook.com/ILawrencePractice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-terracotta-400 transition-colors p-2 rounded bg-charcoal-800/60 border border-charcoal-700 w-fit"
              >
                <Facebook className="h-4 w-4 text-terracotta-400" />
                <span>Facebook / I. Lawrence Practice</span>
              </a>
            </div>

            {/* Flag Note for Pending Official Handles */}
            {/* <div className="flex items-start gap-1.5 text-[11px] text-amber-400/90 pt-1">
              <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
              <span></span>
            </div> */}
          </div>

          {/* Column 3 (Right): Legal Disclaimer */}
          <div className="space-y-4">
            <h4 className="font-heading text-base font-bold text-white tracking-wide">
              Legal Disclaimer
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The information provided on this website is for general informational purposes only and does not constitute formal legal advice or establish an attorney-client relationship. Clients should consult directly with our legal practitioners for advice on specific corporate transactions, regulatory matters, or legal disputes.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
