import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.99]",
  {
    variants: {
      variant: {
        primary: "bg-terracotta-500 text-white hover:bg-terracotta-600 shadow-sm hover:shadow-md",
        secondary: "bg-charcoal-900 text-white hover:bg-charcoal-950 border border-charcoal-800",
        outline: "border border-slate-300 bg-white text-charcoal-900 hover:bg-linen-50 hover:border-slate-400",
        terracotta: "bg-terracotta-500 text-white hover:bg-terracotta-600 font-bold shadow-sm",
        gold: "bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold shadow-sm",
        ghost: "text-slate-700 hover:bg-linen-100 hover:text-slate-900",
        link: "text-terracotta-500 underline-offset-4 hover:underline p-0 h-auto font-medium",
      },
      size: {
        sm: "h-9 px-3 text-xs gap-1.5",
        md: "h-11 px-5 text-sm gap-2",
        lg: "h-13 px-7 text-base gap-2.5",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin text-current" /> : leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);
Button.displayName = "Button";
