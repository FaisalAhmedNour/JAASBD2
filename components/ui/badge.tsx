import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/15 text-primary border-primary/30",
        secondary:
          "border-transparent bg-slate-800 text-slate-200",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground border-slate-700",
        glow: "border-primary/50 bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,229,153,0.25)]",
        discount: "border-amber-500/30 bg-amber-500/15 text-amber-300 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
