export const VisualizationIllustration = () => {
  return (
    <div
      aria-hidden
      className="group relative -mx-4 mask-b-from-65% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-2xl before:border before:border-border before:bg-background after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-2xl after:border after:border-border after:bg-background/50"
    >
      <div className="relative z-10 rounded-2xl border border-transparent bg-illustration p-6 shadow-xl ring-1 shadow-black/6.5 ring-border-illustration">
        <div className="font-medium text-foreground">
          <span className="bg-amber-100 py-1 text-amber-900">Spending</span>{" "}
          Limit
        </div>
        <div className="mt-0.5 text-sm text-muted-foreground">
          New users by First user primary channel group
        </div>
        <div className="relative mt-4 mb-4 flex">
          <div className="h-5 w-1/5 rounded-l-md bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]" />
          <div className="h-5 w-1/5 bg-primary duration-300 group-hover:w-2/5" />
          <div className="h-5 w-3/5 rounded-r-md border [background-image:linear-gradient(-90deg,var(--stripes-color)_25%,transparent_25%,transparent_50%,var(--stripes-color)_50%,var(--stripes-color)_75%,transparent_75%,transparent)] [background-size:5px_5px] duration-300 [--stripes-color:--alpha(var(--color-foreground)/20%)] group-hover:w-2/5" />
        </div>
        <div className="flex gap-1 border-b border-dashed pb-3">
          <div className="w-2/5">
            <div className="text-xl font-medium text-foreground">40%</div>
            <div className="text-sm text-muted-foreground">Used</div>
          </div>
          <div className="w-3/5">
            <div className="text-xl font-medium text-foreground">60%</div>
            <div className="text-sm text-muted-foreground">Free</div>
          </div>
        </div>
        <div className="mt-3 space-y-1">
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <div className="size-1.5 rounded-full bg-[color-mix(in_oklab,var(--color-foreground)50%,var(--color-primary))]"></div>
            <div className="line-clamp-1 text-sm font-medium">
              Running <span className="text-muted-foreground">(20%)</span>{" "}
              average of 12 Minutes
            </div>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-2">
            <div className="size-1.5 rounded-full bg-primary"></div>
            <div className="line-clamp-1 text-sm font-medium">
              Swimming <span className="text-muted-foreground">(20%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
