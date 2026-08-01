/**
 * I. Lawrence Practice (ILP) - Production Design Tokens
 * Updated to reflect Lovable Visual Redesign (Poorvi B. Parkhie Direction)
 * Warm Terracotta Accent + Deep Charcoal + Warm Linen Canvas + Serif Headings
 */

export const ILP_TOKENS = {
  brand: {
    name: 'I. Lawrence Practice',
    abbreviation: 'ILP',
    tagline: 'Your Trusted Legal Partner for Business Growth, Investment & Regulatory Compliance',
  },

  colors: {
    // Primary Terracotta Accent Palette (Lovable Signature)
    terracotta: {
      50: '#FDF7F4',
      100: '#F9EBE5',
      200: '#F4D4C7',
      300: '#EAAB93',
      400: '#DD7C5E',
      500: '#C85228', // Core Brand Accent (Lovable Terracotta)
      600: '#B23E18', // Hover Terracotta
      700: '#942E10',
      800: '#7B2610',
      900: '#652211',
    },

    // Deep Charcoal Palette for Headers, Footers & High-Contrast Elements
    charcoal: {
      950: '#0E141B',
      900: '#141E28', // Navbar & Footer Solid Background
      800: '#1E2834', // Secondary Dark Control Fill
      700: '#2A3644', // Dark Border & Divider
      600: '#3A4858',
    },

    // Warm Surface & Canvas Palette (Linen & Beige)
    canvas: {
      linen: '#F9F6F0',      // Primary Warm Page Background
      linenAlt: '#F5F0E6',   // Alternate Section Surface
      beigeCircle: '#F5EBE1',// Circular Icon Card Container Tint
      cardWhite: '#FFFFFF',  // Pure Elevated Card White
      border: '#E8E1D7',     // Soft Warm Divider Border
    },

    // Text Hierarchy Palette
    text: {
      primary: '#141E28',    // Deep Charcoal Heading/Body Text
      secondary: '#4A5568',  // Subtitle & Secondary Paragraphs
      muted: '#718096',      // Metadata, Captions, Eyebrows
      terracotta: '#C85228', // Accent Eyebrows & Author Links
      white: '#FFFFFF',      // Inverse Dark Background Text
    },

    // WCAG 2.2 Compliant Semantics
    semantic: {
      success: { text: '#059669', bg: '#ECFDF5', border: '#A7F3D0' },
      warning: { text: '#D97706', bg: '#FFFBEB', border: '#FDE68A' },
      error: { text: '#DC2626', bg: '#FEF2F2', border: '#FECACA' },
      info: { text: '#0284C7', bg: '#F0F9FF', border: '#BAE6FD' },
    },
  },

  typography: {
    fontFamilies: {
      heading: '"Playfair Display", "Newsreader", Georgia, serif', // Lovable Serif Headings
      body: '"Plus Jakarta Sans", "Inter", sans-serif',           // Clean Sans Body
    },
    scale: {
      displayHero: { size: '4.00rem', lineHeight: '1.10', weight: '700' },
      h1: { size: '3.00rem', lineHeight: '1.15', weight: '700' },
      h2: { size: '2.25rem', lineHeight: '1.20', weight: '700' },
      h3: { size: '1.50rem', lineHeight: '1.30', weight: '600' },
      lead: { size: '1.125rem', lineHeight: '1.60', weight: '400' },
      bodyBase: { size: '1.00rem', lineHeight: '1.60', weight: '400' },
      caption: { size: '0.75rem', lineHeight: '1.40', weight: '600', letterSpacing: '0.15em' },
    },
  },

  shadows: {
    subtle: '0 1px 3px 0 rgba(20, 30, 40, 0.04)',
    card: '0 4px 20px -2px rgba(20, 30, 40, 0.05)',
    hover: '0 12px 32px -4px rgba(20, 30, 40, 0.08)',
  },

  radii: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
} as const;

export type ILPTokens = typeof ILP_TOKENS;
