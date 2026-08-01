import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional classNames with Tailwind CSS v4 class merging.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency to Nigerian Naira (NGN) or USD
 */
export function formatCurrency(
  amount: number,
  currency: "NGN" | "USD" = "NGN",
  locale: string = "en-NG"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Create URL slug from string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

/**
 * Estimate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
