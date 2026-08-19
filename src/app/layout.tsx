import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Newsreader } from "next/font/google";
import "@/styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "I. Lawrence Practice | Commercial & Corporate Law Firm",
  description:
    "Helping local and international businesses establish, expand and operate successfully through practical legal solutions in Corporate & Commercial Law, Capital Markets, Property Law and Regulatory Compliance in Nigeria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/images/logo/ilp-logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${newsreader.variable} scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-screen bg-white dark:bg-obsidian-950 text-slate-900 dark:text-white antialiased font-body selection:bg-primary-500 selection:text-white overflow-x-hidden">
        {/* Skip to Main Content Link for WCAG 2.2 AA Keyboard Compliance */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
