import * as React from "react";
import { cn } from "@/lib/utils";

export interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  showDots?: boolean;
  className?: string;
}

export function WavyBackground({
  children,
  showDots = true,
  className,
  ...props
}: WavyBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {/* Horizontal Wavy Line-Art Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40">
        <svg
          className="w-full h-full text-terracotta-300/25 dark:text-terracotta-500/15"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
        >
          <pattern
            id="wavy-lines-pattern"
            x="0"
            y="0"
            width="120"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 20 Q 30 5, 60 20 T 120 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M 0 35 Q 30 20, 60 35 T 120 35"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wavy-lines-pattern)" />
        </svg>
      </div>

      {/* Asymmetric Scattered Dot Accents */}
      {showDots && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Dot 1 - Top Left Accent */}
          <div className="absolute top-12 left-8 w-3 h-3 rounded-full bg-terracotta-400/40 animate-pulse" />
          
          {/* Dot 2 - Near Title Accent */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-terracotta-500/30" />
          
          {/* Dot 3 - Top Right Corner */}
          <div className="absolute top-16 right-16 w-4 h-4 rounded-full bg-terracotta-300/35" />
          
          {/* Dot 4 - Mid Right Cluster */}
          <div className="absolute top-1/2 right-12 w-2.5 h-2.5 rounded-full bg-terracotta-400/50" />
          
          {/* Dot 5 - Bottom Left Cluster */}
          <div className="absolute bottom-16 left-1/4 w-3.5 h-3.5 rounded-full bg-terracotta-400/30" />
          
          {/* Dot 6 - Bottom Right Floating Dot */}
          <div className="absolute bottom-10 right-1/3 w-2 h-2 rounded-full bg-terracotta-500/40" />
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
