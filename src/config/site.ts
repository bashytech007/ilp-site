/**
 * Site Configuration for I. Lawrence Practice (ILP)
 */

export const siteConfig = {
  name: "I. Lawrence Practice",
  shortName: "ILP",
  tagline: "Your Trusted Legal Partner for Business Growth, Investment & Regulatory Compliance",
  description:
    "Helping local and international businesses establish, expand and operate successfully through practical legal solutions in Corporate & Commercial Law, Capital Markets, Property Law and Regulatory Compliance in Nigeria.",
  url: "https://ilawrencepractice.com",
  ogImage: "https://ilawrencepractice.com/images/og/og-main.jpg",
  
  managingPartner: {
    name: "Itunu Lawrence",
    title: "Managing Partner",
    bio: "Itunu Lawrence leads the firm's strategic direction and legal practice, bringing extensive experience in corporate and commercial law, corporate governance, capital markets, regulatory compliance, investment advisory, and real estate transactions.",
  },

  contact: {
    address: "Lagos Office, Victoria Island / Ikoyi Commercial District, Lagos, Nigeria",  
    phone: ["+234 (0) 803 353 0777", "+234 (0) 801 111 2222"],
    email: "contact@ilawrencepractice.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM (WAT)",
  },

  regulators: [
    { name: "Corporate Affairs Commission", abbr: "CAC" },
    { name: "Securities and Exchange Commission", abbr: "SEC" },
    { name: "Central Bank of Nigeria", abbr: "CBN" },
    { name: "Nigerian Investment Promotion Commission", abbr: "NIPC" },
    { name: "Federal Competition & Consumer Protection Commission", abbr: "FCCPC" },
    { name: "National Agency for Food & Drug Administration & Control", abbr: "NAFDAC" },
    { name: "Nigerian Upstream Petroleum Regulatory Commission", abbr: "NUPRC" },
    { name: "Lagos State Real Estate Regulatory Authority", abbr: "LASRERA" },
  ],

  lifecyclePillars: [
    { id: "start", label: "START", desc: "Business incorporation, licensing, and regulatory approvals" },
    { id: "structure", label: "STRUCTURE", desc: "Corporate governance, contracts, and legal frameworks" },
    { id: "scale", label: "SCALE", desc: "Cross-border expansion, investment transactions, and strategic advisory" },
    { id: "regulate", label: "REGULATE", desc: "Approvals, licensing, compliance, ongoing board and corporate governance support" },
    { id: "protect", label: "Business Restructuring", desc: "Property transactions, dispute resolution, risk management, and legal compliance" },
  ],

  mainNav: [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
      title: "Practice Areas",
      href: "/practices",
      children: [
        { title: "Commercial Law", href: "/practices/commercial-law", description: "Company formation, foreign investment, licences & M&A" },
        { title: "Corporate Governance & Compliance", href: "/practices/corporate-governance", description: "Board advisory, secretarial services & AML/CFT risk" },
        { title: "Property Law", href: "/practices/property-law", description: "Property acquisition, title perfection & development advisory" },
        { title: "Capital Market Advisory", href: "/practices/capital-market", description: "Flagship 10-Step SEC operator licensing roadmap" },
      ],
    },
    { title: "Industries", href: "/industries" },
    { title: "Insights", href: "/insights" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "FAQs", href: "/faqs" },
    { title: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
