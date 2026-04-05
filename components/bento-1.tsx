import { CurrencyIllustration } from "@/components/ui/illustrations/currency-illustration"
import { ReplyIllustration } from "@/components/ui/illustrations/reply-illustration"
import { NotificationIllustration } from "@/components/ui/illustrations/notification-illustration"
import { Card } from "@/components/ui/card"
import { VisualizationIllustration } from "@/components/ui/illustrations/visualization-illustration"
import { PollIllustration } from "@/components/ui/illustrations/poll-illustration"

export default function BentoOne() {
  return (
    <section className="@container py-24">
      <h2 className="sr-only">Features</h2>
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid gap-3 not-dark:*:bg-card/50 @xl:grid-cols-2 @3xl:grid-cols-6">
          <Card className="grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div>
              <h3 className="font-semibold text-foreground">
                Scheduled Reports
              </h3>
              <p className="mt-3 text-muted-foreground">
                Automate report delivery to stakeholders with customizable
                scheduling options.
              </p>
            </div>
            <div className="relative -m-8 flex items-end bg-linear-to-b p-8">
              <Stripes />
              <NotificationIllustration variant="mixed" />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
            <div className="relative -m-8 flex items-end bg-linear-to-b p-8">
              <Stripes />
              <CurrencyIllustration />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
            <div className="relative -m-8 flex items-end bg-linear-to-b p-8">
              <Stripes />
              <ReplyIllustration className="relative mt-0 w-full" />
            </div>
          </Card>
          <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8 @3xl:col-span-2">
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>

            <div className="relative -m-8 flex items-end bg-linear-to-b p-8">
              <Stripes />
              <PollIllustration />
            </div>
          </Card>
          <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8 @xl:col-span-2 @3xl:col-span-4">
            <div>
              <h3 className="font-semibold text-foreground">
                Collaborative Analysis
              </h3>
              <p className="mt-3 text-balance text-muted-foreground">
                Add comments, share insights, and work together with your team
                to extract maximum.
              </p>
            </div>
            <VisualizationIllustration />
          </Card>
        </div>
      </div>
    </section>
  )
}

const Stripes = () => (
  <div
    aria-hidden
    className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-foreground)_1px,transparent_1px,transparent_6px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-3"
  />
)
