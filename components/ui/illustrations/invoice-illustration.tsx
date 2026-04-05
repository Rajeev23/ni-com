import { cn } from "@/lib/utils"
import { LogoIcon } from "@/components/logo"
import { DocumentIllustation } from "@/components/ui/illustrations/document-illustration"

export const InvoiceIllustration = ({ className }: { className?: string }) => {
  return (
    <div aria-hidden className="relative">
      <div
        className={cn(
          "group relative -mx-4 mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50",
          className
        )}
      >
        <div className="relative z-10 overflow-hidden rounded-2xl border border-transparent bg-illustration p-8 text-sm shadow-xl ring-1 shadow-black/6.5 ring-border-illustration">
          <div className="mb-6 flex items-start justify-between">
            <div className="space-y-0.5">
              <LogoIcon />
              <div className="mt-4 font-mono text-xs">INV-456789</div>
              <div className="mt-1 -translate-x-1 font-mono text-2xl font-semibold">
                $284,342.57
              </div>
              <div className="text-xs font-medium">Due in 15 days</div>
            </div>
            <DocumentIllustation />
          </div>

          <div className="space-y-1.5 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
            <div className="grid grid-cols-[auto_1fr] items-center">
              <span className="block w-18 text-muted-foreground">To</span>
              <span className="h-2 w-1/4 rounded-full bg-border px-2" />
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center">
              <span className="block w-18 text-muted-foreground">From</span>
              <span className="h-2 w-1/2 rounded-full bg-border px-2" />
            </div>

            <div className="grid grid-cols-[auto_1fr] items-center">
              <span className="block w-18 text-muted-foreground">Address</span>
              <span className="h-2 w-2/3 rounded-full bg-border px-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
