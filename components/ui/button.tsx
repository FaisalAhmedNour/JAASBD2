import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#082615] text-white hover:bg-[#0d3b21] shadow-md shadow-[#082615]/10 font-bold",
        primaryGreen:
          "bg-[#00E599] text-[#0A1616] hover:bg-[#00C885] font-bold shadow-md shadow-[#00E599]/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[#D1D5DB] bg-white text-[#0A1616] hover:bg-[#F9FAFB] hover:border-[#9CA3AF] shadow-sm",
        secondary:
          "bg-[#F3F4F6] text-[#0A1616] hover:bg-[#E5E7EB] border border-[#E5E7EB]",
        ghost: "text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#0A1616]",
        link: "text-[#067547] underline-offset-4 hover:underline",
        emeraldGlow:
          "bg-[#082615] text-white font-bold hover:bg-[#0d3b21] border border-[#00E599]/30 shadow-[0_4px_20px_rgba(0,229,153,0.15)] hover:shadow-[0_6px_25px_rgba(0,229,153,0.25)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-6 py-2.5 text-sm md:text-base",
        xl: "h-14 rounded-xl px-8 py-3.5 text-base font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
