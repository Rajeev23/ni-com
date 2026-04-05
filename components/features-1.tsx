import { ChartIllustration } from "@/components/ui/illustrations/chart-illustration"
import { InvoiceIllustration } from "@/components/ui/illustrations/invoice-illustration"

export default function FeaturesSection() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative grid overflow-hidden rounded-2xl border border-transparent bg-card/50 shadow-md ring-1 shadow-black/5 ring-border @max-4xl:divide-y @4xl:grid-cols-2 @4xl:divide-x">
          <div className="row-span-2 grid grid-rows-subgrid gap-8">
            <div className="px-8 pt-8">
              <h3 className="font-semibold text-balance">
                Powerful analytics dashboard
              </h3>
              <p className="mt-3 text-muted-foreground">
                Track performance metrics with real-time data visualization and
                customizable reports for informed.
              </p>
            </div>
            <div className="self-end pb-4">
              <ChartIllustration />
            </div>
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-8">
            <div className="relative z-10 px-8 pt-8">
              <h3 className="font-semibold text-balance">
                Streamlined invoicing system
              </h3>
              <p className="mt-3 text-muted-foreground">
                Generate, send, and manage professional invoices automatically
                with integrated payment tracking.
              </p>
            </div>
            <div className="self-end px-8 pb-8">
              <InvoiceIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
