"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, PhoneCall, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

export function HeaderNav() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-charcoal-900 text-white border-b border-charcoal-800 shadow-md",
        isScrolled ? "py-0 shadow-lg" : "py-0"
      )}
    >
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with ILP Mark */}
        <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm">
          <Logo variant="blue-white" size="md" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          <Link
            href="/"
            className="text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors"
          >
            About Us
          </Link>

          {/* Practice Areas Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors focus-visible:outline-none py-2"
              aria-expanded={isMegaMenuOpen}
            >
              <span>Practice Areas</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isMegaMenuOpen && "rotate-180")} />
            </button>

            {isMegaMenuOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-charcoal-900 border border-charcoal-800 rounded-lg shadow-2xl p-5 grid grid-cols-2 gap-3 animate-in fade-in-50 duration-200">
                {siteConfig.mainNav[2].children?.map((practice) => (
                  <Link
                    key={practice.href}
                    href={practice.href}
                    className="p-3 rounded-md hover:bg-charcoal-800 transition-colors group/item"
                  >
                    <div className="font-heading font-bold text-sm text-white group-hover/item:text-terracotta-400 flex items-center justify-between">
                      <span>{practice.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-terracotta-400" />
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {practice.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/industries"
            className="text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/insights"
            className="text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors"
          >
            Case Studies
          </Link>
          <Link
            href="/faqs"
            className="text-sm font-medium text-slate-200 hover:text-terracotta-400 transition-colors"
          >
            FAQs
          </Link>
        </nav>

        {/* Right Callout Phone Link */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone[0].replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-terracotta-400 transition-colors bg-charcoal-800/80 px-3.5 py-2 rounded-full border border-charcoal-700"
          >
            <PhoneCall className="h-3.5 w-3.5 text-terracotta-400" />
            <span>{siteConfig.contact.phone[0]}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-slate-200 hover:bg-charcoal-800 rounded-md focus-visible:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden border-t border-charcoal-800 bg-charcoal-900 px-4 pt-4 pb-6 space-y-3">
          <Link href="/" className="block py-2 text-base font-medium text-white" onClick={() => setIsMobileOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block py-2 text-base font-medium text-white" onClick={() => setIsMobileOpen(false)}>
            About Us
          </Link>
          <div className="py-2 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-400">Practice Areas</span>
            <div className="pl-3 space-y-2 border-l-2 border-terracotta-500">
              {siteConfig.mainNav[2].children?.map((practice) => (
                <Link
                  key={practice.href}
                  href={practice.href}
                  className="block text-sm font-medium text-slate-300 hover:text-terracotta-400"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {practice.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/industries" className="block py-2 text-base font-medium text-white" onClick={() => setIsMobileOpen(false)}>
            Industries
          </Link>
          <Link href="/insights" className="block py-2 text-base font-medium text-white" onClick={() => setIsMobileOpen(false)}>
            Insights
          </Link>
          <Link href="/case-studies" className="block py-2 text-base font-medium text-white" onClick={() => setIsMobileOpen(false)}>
            Case Studies
          </Link>
          <Link href="/faqs" className="block py-2 text-base font-medium text-white" onClick={() => setIsMobileOpen(false)}>
            FAQs
          </Link>
          <div className="pt-4">
            <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
