"use client"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import { CardTitle, CardDescription } from "@/components/ui/card"
import { useState } from "react"
import NumberFlow from "@number-flow/react"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState("annually")
  const annualReduction = 0.75

  const prices = {
    pro: {
      monthly: 19,
      annually: 19 * annualReduction,
    },
    startup: {
      monthly: 49,
      annually: 49 * annualReduction,
    },
  }

  return (
    <section className="relative bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl lg:tracking-tight">
            Pricing that scale with your business
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-balance text-muted-foreground">
            Choose the perfect plan for your needs and start optimizing your
            workflow today
          </p>

          <div className="my-12">
            <div
              data-period={billingPeriod}
              className="relative mx-auto grid w-fit grid-cols-2 rounded-full bg-foreground/5 p-1 *:block *:h-8 *:w-24 *:rounded-full *:text-sm *:text-foreground/75 *:hover:opacity-75"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-1 w-1/2 translate-x-full rounded-full border border-transparent bg-card shadow ring-1 ring-foreground/5 transition-transform duration-500 ease-in-out in-data-[period=monthly]:translate-x-0"
              />
              <button
                onClick={() => setBillingPeriod("monthly")}
                {...(billingPeriod === "monthly" && { "data-active": true })}
                className="relative data-active:font-medium data-active:text-foreground"
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("annually")}
                {...(billingPeriod === "annually" && { "data-active": true })}
                className="relative data-active:font-medium data-active:text-foreground"
              >
                Annually
              </button>
            </div>
            <div className="mt-3 text-center text-xs">
              <span className="font-medium text-primary">Save 25%</span> On
              Annual Billing
            </div>
          </div>
        </div>
        <div className="@container">
          <div className="mx-auto max-w-sm @3xl:max-w-2xl">
            <div className="grid gap-6 *:p-8 @3xl:grid-cols-2">
              <div className="row-span-4 grid grid-rows-subgrid gap-8 rounded-(--radius) border">
                <div className="self-end">
                  <CardTitle className="text-lg font-medium">Free</CardTitle>
                  <div className="mt-1 text-sm text-balance text-muted-foreground">
                    For developers trying out Neverinstall for the first time
                  </div>
                </div>

                <div>
                  <NumberFlow
                    value={0}
                    prefix="$"
                    className="text-3xl font-semibold"
                  />
                  <div className="text-sm text-muted-foreground">Per month</div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#">Get Started</Link>
                </Button>

                <ul role="list" className="space-y-3 text-sm">
                  {[
                    "Basic Analytics Dashboard",
                    "5GB Cloud Storage",
                    "Email and Chat Support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check
                        className="size-3 text-muted-foreground"
                        strokeWidth={3.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="row-span-4 grid grid-rows-subgrid gap-8 rounded-(--radius) bg-card shadow-xl ring-1 shadow-black/6.5 ring-border">
                <div className="self-end">
                  <CardTitle className="text-lg font-medium">Pro</CardTitle>
                  <CardDescription className="mt-1 text-sm text-balance text-muted-foreground">
                    Ideal for developers who need more features and support
                  </CardDescription>
                </div>

                <div>
                  <NumberFlow
                    value={prices.pro[billingPeriod as keyof typeof prices.pro]}
                    format={{
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    }}
                    className="text-3xl font-semibold"
                  />
                  <div className="text-sm text-muted-foreground">Per month</div>
                </div>
                <Button asChild className="w-full">
                  <Link href="#">Get Started</Link>
                </Button>

                <ul role="list" className="space-y-3 text-sm">
                  {[
                    "Everything in Free Plan plus:",
                    "5GB Cloud Storage",
                    "Email and Chat Support",
                    "Access to Community Forum",
                    "Single User Access",
                    "Access to Basic Templates",
                    "Mobile App Access",
                    "1 Custom Report Per Month",
                    "Monthly Product Updates",
                    "Standard Security Features",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="group flex items-center gap-2 first:font-medium"
                    >
                      <Check
                        className="size-3 text-muted-foreground group-first:hidden"
                        strokeWidth={3.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
