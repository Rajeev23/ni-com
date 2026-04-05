import { cn } from "@/lib/utils"

interface IllustrationProps {
  className?: string
  variant?: "elevated" | "outlined" | "mixed"
}

export const NotificationIllustration = ({
  className,
  variant = "elevated",
}: IllustrationProps) => {
  return (
    <div aria-hidden className={cn("relative w-full", className)}>
      <div
        className={cn(
          "group relative grid w-full [grid-template-columns:auto_1fr] gap-2.5 rounded-2xl bg-illustration p-4 text-xs duration-300",
          {
            "shadow-lg shadow-black/6.5": variant === "elevated",
            border: variant === "outlined",
            "border border-transparent shadow-md ring-1 shadow-black/6.5 ring-border-illustration":
              variant === "mixed",
          }
        )}
      >
        <div className="relative h-fit">
          <div className="absolute bottom-1.5 -left-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">
            PDF
          </div>
          <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-gray-100 to-gray-200" />
        </div>
        <div className="mt-0.5">
          <div className="text-sm font-medium">react-visualizations.pdf</div>
          <div className="relative my-1.5 h-1 overflow-hidden rounded-full bg-foreground/5 before:absolute before:inset-0 before:w-1/3 before:rounded-r-full before:bg-primary before:delay-150 before:duration-300 group-hover:before:w-2/3" />
          <div className="text-xs text-muted-foreground">29 KB / 120KB</div>
        </div>
      </div>
    </div>
  )
}
