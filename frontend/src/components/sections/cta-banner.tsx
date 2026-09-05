"use client";

import * as React from "react";
import { Mail, Phone, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  company: 120,
  email: 254,
  phone: 30,
  message: 3000,
};

const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

function validateForm(data: typeof EMPTY_FORM): string | null {
  if (!data.firstName.trim()) return "First name is required.";
  if (!data.lastName.trim()) return "Last name is required.";
  if (!data.email.trim() || !EMAIL_REGEX.test(data.email)) return "Please enter a valid email address.";
  if (!data.phone.trim() || !PHONE_REGEX.test(data.phone)) return "Please enter a valid phone number.";
  if (!data.message.trim()) return "Please include a short message.";
  if (data.message.length > MAX_LENGTHS.message) return "Message is too long.";
  return null;
}

export function CtaBannerSection() {
  const [formData, setFormData] = React.useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // prevent duplicate submissions

    const validationError = validateForm(formData);
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSubmitted(true);
      setFormData(EMPTY_FORM);
    } catch {
      setErrorMessage("We couldn't reach the server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <h4 className="font-heading font-bold text-xl text-charcoal-900">Thank You</h4>
                  <p className="text-xs text-slate-600">
                    Thank you. Your enquiry has been received. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {errorMessage && (
                    <div className="flex items-start gap-2 bg-white/95 text-red-700 text-xs font-medium px-4 py-3 rounded-lg">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="sr-only">First Name</label>
                    <input
                      type="text"
                      required
                      maxLength={MAX_LENGTHS.firstName}
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Last Name</label>
                    <input
                      type="text"
                      required
                      maxLength={MAX_LENGTHS.lastName}
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Company</label>
                    <input
                      type="text"
                      maxLength={MAX_LENGTHS.company}
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={MAX_LENGTHS.email}
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Phone</label>
                    <input
                      type="tel"
                      required
                      maxLength={MAX_LENGTHS.phone}
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Message</label>
                    <textarea
                      rows={4}
                      required
                      maxLength={MAX_LENGTHS.message}
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 text-sm text-charcoal-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal-900 placeholder:text-slate-500 font-medium resize-none disabled:opacity-60"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-charcoal-950 text-white hover:bg-charcoal-900 px-8 py-3.5 rounded-lg font-bold text-sm transition-all shadow-md disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                      {isSubmitting ? "Submitting..." : "Submit"}
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