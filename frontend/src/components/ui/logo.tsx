import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import logoPrimary from "@/assets/logo-ilp.svg";
import logoWhite from "@/assets/logo-ilp-white.svg";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "white" | "blue-white" | "icon-only";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Logo({
  variant = "blue-white",
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

  const logoAsset = variant === "white" ? logoWhite : logoPrimary;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none group",
        heightClasses[size],
        className
      )}
      {...props}
    >
      <Image
        src={logoAsset}
        alt="I. Lawrence Practice Logo"
        className={cn(
          "w-auto object-contain transition-transform duration-300 group-hover:scale-105",
          heightClasses[size]
        )}
        priority
      />
    </div>
  );
}
