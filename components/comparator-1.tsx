import { cn } from "@/lib/utils"
import { Clover, Fan, Gem } from "lucide-react"

const features = [
  {
    name: "Daily Exercises",
    plans: {
      free: true,
      pro: true,
      team: true,
    },
  },
  {
    name: "Unlimited Access",
    plans: {
      free: false,
      pro: true,
      team: true,
    },
  },
  {
    name: "Advance Quickly",
    plans: {
      free: false,
      pro: true,
      team: true,
    },
  },
  {
    name: "Self-paced Learning",
    plans: {
      free: false,
      pro: true,
      team: true,
    },
  },
  {
    name: "Ad-free Experience",
    plans: {
      free: false,
      pro: true,
      team: true,
    },
  },
  {
    name: "Team Collaboration",
    plans: {
      free: false,
      pro: false,
      team: true,
    },
  },
]

export default function FAQs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex h-18 items-center">
                <div className="text-lg font-medium">Benefits</div>
              </div>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex h-14 items-center border-t max-md:text-sm"
                >
                  <div>{feature.name}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 rounded-2xl bg-linear-to-b from-indigo-500/10 via-emerald-500/5 to-background">
              <div>
                <div className="flex h-18 flex-col items-center justify-center gap-1 px-8 pt-2 text-center">
                  <Clover className="size-4" />
                  <div className="text-sm font-medium">Free</div>
                </div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex h-14 items-center justify-center border-t px-6"
                  >
                    <div>
                      {feature.plans.free ? (
                        <Indicator checked />
                      ) : (
                        <Indicator />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="my-2 rounded-lg bg-card shadow-lg ring-1 shadow-black/10 ring-foreground/5 last:mr-2">
                <div className="flex h-16 flex-col items-center justify-center gap-1 px-6 text-center">
                  <Gem className="size-4" />
                  <div className="text-sm font-medium">Pro</div>
                </div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex h-14 items-center justify-center border-t px-8"
                  >
                    <div>
                      {feature.plans.pro ? (
                        <Indicator checked />
                      ) : (
                        <Indicator />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex h-18 flex-col items-center justify-center gap-1 px-8 pt-2 text-center">
                  <Fan className="size-4" />
                  <div className="text-sm font-medium">Team</div>
                </div>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex h-14 items-center justify-center border-t px-6"
                  >
                    <div>
                      {feature.plans.team ? (
                        <Indicator checked />
                      ) : (
                        <Indicator />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Indicator = ({ checked = false }: { checked?: boolean }) => {
  return (
    <span
      className={cn(
        "flex size-5 items-center justify-center rounded-full bg-foreground/[0.065] font-sans text-xs font-semibold text-foreground/65",
        checked && "bg-emerald-500/10 text-emerald-600"
      )}
    >
      {checked ? "✓" : "✗"}
    </span>
  )
}
