import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-[0.5px] border-white/10 bg-primary text-primary-foreground shadow-md ring-1 shadow-black/15 ring-(--ring-color) [--ring-color:color-mix(in_oklab,black_15%,var(--color-primary))] text-shadow-sm hover:bg-primary/90 dark:border-transparent dark:[--ring-color:color-mix(in_oklab,white_15%,var(--color-primary))] [&_svg]:drop-shadow-sm",
        destructive:
          "border-[0.5px] border-white/10 bg-destructive text-destructive-foreground shadow-md ring-1 shadow-black/25 ring-(--ring-color) [--ring-color:color-mix(in_oklab,black_15%,var(--color-destructive))] text-shadow-sm hover:bg-destructive/90 [&_svg]:drop-shadow-sm",
        outline:
          "border border-transparent bg-card shadow-sm ring-1 shadow-black/15 ring-foreground/10 duration-200 hover:bg-muted/50 dark:ring-foreground/15 dark:hover:bg-muted/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-foreground/5 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
