# I. Lawrence Practice (ILP) - Design System Architecture & Component Patterns

## 1. Design Philosophy & Palette Tokens

The I. Lawrence Practice design system emphasizes modern corporate authority, warmth, and precision.

### Color Tokens
- **Terracotta Primary Accent**: `#C85228` (`--color-terracotta-500`), `#E07A5F` (`--color-terracotta-400`), `#FDF8F5` (`--color-linen-50`).
- **Charcoal Dark**: `#18181B` (`--color-charcoal-900`), `#09090B` (`--color-charcoal-950`).
- **Cream / Soft Blush**: `#FAF4F0`, `#F5EBE6` (Used for soft borders and elevated card backgrounds).
- **Gold Accent**: `#D4AF37` / `#F59E0B`.

---

## 2. Reusable Hero Pattern Architecture

The flagship Hero component pattern combines three key design elements to deliver high visual engagement and brand consistency across pages (Homepage, About Us, Practice Areas).

### Pattern Specifications

#### A. Wavy Line Background Texture (`<WavyBackground />`)
- **Location**: `src/components/ui/wavy-background.tsx`
- **Behavior**: Provides a subtle SVG pattern of horizontal wavy line-art (`stroke-terracotta-300/25`) running horizontally across the section background.
- **Accents**: Includes 6 asymmetric, scattered dot accents (`bg-terracotta-400/40`) positioned at varied offsets and opacities around the hero perimeter.
- **Usage**:
```tsx
import { WavyBackground } from "@/components/ui/wavy-background";

<WavyBackground className="pt-32 pb-20 bg-linen-50">
  {/* Hero Content */}
</WavyBackground>
```

#### B. Layered Circular Image Cluster
- **Layout**: Asymmetric 2-column hero grid (7-col content / 5-col image cluster).
- **Primary Circle**: 280px–320px circle featuring boardroom or key team interaction imagery (`hero-boardroom.jpg`), framed with a 6px–8px soft cream border (`border-[#FAF4F0]`).
- **Secondary Overlapping Circles**: Two 140px–180px overlapping circles placed at offset positions (bottom-left and top-right), featuring individual professional portraits (`hero-man-reading.jpg`, `hero-woman-lawyer.jpg`).
- **Shadow & Aura**: Outer soft blush glow (`bg-terracotta-100/40 rounded-full blur-2xl`) and drop shadows (`shadow-2xl`).

#### C. Serif Display Typography with Inline Color Accent
- **Headline Font**: `font-serif` (Newsreader display serif font).
- **Accent Treatment**: Target key value proposition phrases (e.g. `Business Growth`) with `text-terracotta-500 font-bold italic` inline styling.
- **Structure**:
```tsx
<h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-charcoal-900">
  Your Trusted Legal Partner for{" "}
  <span className="text-terracotta-500 font-bold italic">Business Growth</span>
  , Investment & Regulatory Compliance in Nigeria
</h1>
```

---

## 3. Brand Logo Mark Specification

- **Navbar & Footer Lockup**: Renders the canonical brand logo asset directly from `src/assets/logo-ilp.svg` (and `src/assets/logo-ilp-white.svg` for dark backgrounds). This file asset is the single source of truth for the I. Lawrence Practice logo mark and must not be dynamically regenerated or reinterpreted using CSS shapes.
