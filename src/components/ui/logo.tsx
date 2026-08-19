import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "white" | "blue-white" | "icon-only";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Logo({
  variant = "default",
  size = "md",
  className,
  ...props
}: LogoProps) {
  // Height configurations
  const heightClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
    xl: "h-16",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none group shrink-0",
        heightClasses[size],
        className
      )}
      {...props}
    >
      <Image
        src="/images/logo/logo.png"
        alt="I. Lawrence Practice Logo"
        width={300}
        height={100}
        className={cn(
          "w-auto object-contain transition-transform duration-300 group-hover:scale-105",
          heightClasses[size]
        )}
        priority
      />
    </div>
  );
}
