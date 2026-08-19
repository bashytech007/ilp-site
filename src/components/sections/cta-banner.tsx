"use client";

import * as React from "react";
import { Mail, Phone, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CtaBannerSection() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-24 bg-linen-50 relative overflow-hidden border-t border-beige-300">
      {/* Ambient scattered accent dots */}
      <div className="absolute top-12 left-8 w-2 h-2 rounded-full bg-terracotta-400/40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-2.5 h-2.5 rounded-full bg-terracotta-400/30 pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-2 h-2 rounded-full bg-terracotta-400/40 pointer-events-none" />
      <div className="absolute top-1/2 right-12 w-2.5 h-2.5 rounded-full bg-terracotta-400/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Contact Details & Embedded Lagos Location Map */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-terracotta-500" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-terracotta-600">
                BOOK A CONSULTATION
              </span>
            </div>

            {/* Serif Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 leading-tight">
              Speak With a Lawyer at I. Lawrence Practice
            </h2>

            {/* Supporting Text */}
            <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
              Tell us about your business and the outcome you need. Our team responds to every enquiry with practical next steps.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3 pt-2 text-sm font-medium text-charcoal-900">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 hover:text-terracotta-600 transition-colors"
              >
                <Mail className="h-4 w-4 text-terracotta-500 shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone[0].replace(/\s+/g, "")}`}
                className="flex items-center gap-3 hover:text-terracotta-600 transition-colors"
              >
                <Phone className="h-4 w-4 text-terracotta-500 shrink-0" />
                <span>{siteConfig.contact.phone[0]}</span>
              </a>
            </div>

            {/* Embedded Interactive Google Map showing Lagos Office Location */}
            <div className="pt-4">
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-beige-300 shadow-sm bg-slate-200">
                <iframe
                  title="I. Lawrence Practice Lagos Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728773950228!2d3.4246!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7d69b%3A0x2d1f7c402!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Terracotta Card ("Let's Talk") */}
          <div className="lg:col-span-6">
            <div className="bg-terracotta-500 rounded-2xl p-8 sm:p-10 text-white shadow-2xl space-y-6">
              
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Let's Talk
              </h3>

              {isSubmitted ? (
                <div className="bg-white text-charcoal-900 p-8 rounded-xl space-y-3 text-center animate-in fade-in-50">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-charcoal-900">Inquiry Submitted</h4>
                  <p className="text-xs text-slate-600">
                    Thank you for reaching out to I. Lawrence Practice. Our team will review your enquiry and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="sr-only">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Company</label>
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-charcoal-950 text-white hover:bg-charcoal-900 px-8 py-3.5 rounded-lg font-bold text-sm transition-all shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
