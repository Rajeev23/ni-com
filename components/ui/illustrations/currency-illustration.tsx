import { Bitcoin, DollarSign, Euro, Signature } from "lucide-react"

export const CurrencyIllustration = () => {
  return (
    <div aria-hidden className="flex -space-x-4">
      <div className="relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration to-illustration p-2 shadow-md ring-1 shadow-black/6.5 ring-border-illustration [--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)] before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-blue-500/15 before:from-25% before:to-75% before:mask-b-from-65%">
        <div className="flex -translate-x-0.5 items-center gap-0.5 text-blue-900 dark:text-blue-300">
          <Bitcoin className="size-3" />
          <span className="text-xs font-medium">BTC</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2.5 rounded-full bg-border" />
            <div className="h-[3px] w-6 rounded-full bg-border" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2.5 rounded-full bg-border" />
            <div className="h-[3px] w-6 rounded-full bg-border" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="h-[3px] w-full rounded-full bg-border" />
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2/3 rounded-full bg-border" />
            <div className="h-[3px] w-1/3 rounded-full bg-border" />
          </div>
        </div>

        <Signature className="ml-auto size-3" />
      </div>
      <div className="relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration to-illustration p-2 shadow-md ring-1 shadow-black/6.5 ring-border-illustration [--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)] before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-green-500/15 before:from-25% before:to-75% before:mask-b-from-65%">
        <div className="flex -translate-x-0.5 items-center gap-0.5 text-green-900 dark:text-green-300">
          <DollarSign className="size-3" />
          <span className="text-xs font-medium">USD</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2.5 rounded-full bg-border" />
            <div className="h-[3px] w-6 rounded-full bg-border" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2.5 rounded-full bg-border" />
            <div className="h-[3px] w-6 rounded-full bg-border" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="h-[3px] w-full rounded-full bg-border" />
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2/3 rounded-full bg-border" />
            <div className="h-[3px] w-1/3 rounded-full bg-border" />
          </div>
        </div>

        <Signature className="ml-auto size-3" />
      </div>
      <div className="relative w-16 translate-y-1 -rotate-12 space-y-2 rounded-lg bg-illustration to-illustration p-2 shadow-md ring-1 shadow-black/6.5 ring-border-illustration [--color-border:color-mix(in_oklab,var(--color-foreground)15%,transparent)] before:absolute before:inset-0.5 before:rounded-[6px] before:border before:border-foreground/5 before:bg-linear-to-b before:from-red-500/15 before:from-25% before:to-75% before:mask-b-from-65%">
        <div className="flex -translate-x-0.5 items-center gap-0.5 text-red-900 dark:text-red-300">
          <Euro className="size-3" />
          <span className="text-xs font-medium">EURO</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2.5 rounded-full bg-border" />
            <div className="h-[3px] w-6 rounded-full bg-border" />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2.5 rounded-full bg-border" />
            <div className="h-[3px] w-6 rounded-full bg-border" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="h-[3px] w-full rounded-full bg-border" />
          <div className="flex items-center gap-1">
            <div className="h-[3px] w-2/3 rounded-full bg-border" />
            <div className="h-[3px] w-1/3 rounded-full bg-border" />
          </div>
        </div>

        <Signature className="ml-auto size-3" />
      </div>
    </div>
  )
}

export default CurrencyIllustration
