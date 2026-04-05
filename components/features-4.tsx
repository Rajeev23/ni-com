import { InvoiceIllustration } from "@/components/ui/illustrations/invoice-illustration"
import { VisualizationIllustration } from "@/components/ui/illustrations/visualization-illustration"
import { Sparkles, Cpu, Lock, Zap } from "lucide-react"

export default function FeaturesSection4() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid max-md:divide-y md:grid-cols-2 md:divide-x">
          <div className="row-span-2 grid grid-rows-subgrid gap-8 pb-12 md:pr-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Intuitive Invoice Creation
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Create professional invoices instantly with our intuitive tools.
                Customize templates and automate billing to save time.
              </p>
            </div>
            <InvoiceIllustration />
          </div>
          <div className="row-span-2 grid grid-rows-subgrid gap-8 pb-12 max-md:pt-12 md:pl-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Data Visualization
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Transform complex data into intuitive visualizations. Our
                powerful tools help you uncover insights and communicate
                findings effectively.
              </p>
            </div>
            <VisualizationIllustration />
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 border-t pt-12 sm:gap-6 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-foreground" />
              <h3 className="text-sm font-medium">Faaast</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an entire helping developers and innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4 text-foreground" />
              <h3 className="text-sm font-medium">Powerful</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              It supports an entire helping developers and businesses.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-foreground" />
              <h3 className="text-sm font-medium">Security</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              An helping developers businesses innovate.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-foreground" />

              <h3 className="text-sm font-medium">AI Powered</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Helping developers businesses innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
