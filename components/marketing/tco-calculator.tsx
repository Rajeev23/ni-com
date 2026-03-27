"use client"

import * as React from "react"
import { Badge } from "@/components/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/tabs"

type Region = "india" | "us" | "eu" | "apac"
type Stack = "vdi" | "mdm" | "dlp" | "endpoint" | "vpn"
type UseCase = "daas" | "browser" | "both"

const regionMultiplier: Record<Region, number> = {
  india: 0.86,
  us: 1,
  eu: 1.08,
  apac: 0.94,
}

const useCaseMultiplier: Record<UseCase, number> = {
  daas: 1,
  browser: 0.58,
  both: 1.35,
}

const stackCost: Record<Stack, number> = {
  vdi: 30,
  mdm: 7,
  dlp: 8,
  endpoint: 9,
  vpn: 5,
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value)
}

function yearlyCost(perUserPerMonth: number, seats: number) {
  return perUserPerMonth * seats * 12
}

export function TcoCalculatorPanel() {
  const [headcount, setHeadcount] = React.useState(200)
  const [region, setRegion] = React.useState<Region>("india")
  const [useCase, setUseCase] = React.useState<UseCase>("both")
  const [ociCredits, setOciCredits] = React.useState(false)
  const [stack, setStack] = React.useState<Set<Stack>>(
    new Set(["vdi", "endpoint", "vpn"])
  )

  const legacyPupm = React.useMemo(() => {
    const selected = Array.from(stack)
    return (
      selected.reduce((sum, item) => sum + stackCost[item], 0) *
      regionMultiplier[region]
    )
  }, [region, stack])

  const neverinstallPupm = React.useMemo(() => {
    const base = 24 * useCaseMultiplier[useCase] * regionMultiplier[region]
    return ociCredits ? base * 0.88 : base
  }, [ociCredits, region, useCase])

  const legacyThreeYear = yearlyCost(legacyPupm, headcount) * 3
  const neverinstallThreeYear = yearlyCost(neverinstallPupm, headcount) * 3
  const savings = legacyThreeYear - neverinstallThreeYear
  const savingsPercent =
    legacyThreeYear > 0 ? (savings / legacyThreeYear) * 100 : 0
  const maxBar = Math.max(legacyThreeYear, neverinstallThreeYear, 1)
  const legacyWidth = `${(legacyThreeYear / maxBar) * 100}%`
  const neverinstallWidth = `${(neverinstallThreeYear / maxBar) * 100}%`

  function toggleStack(item: Stack) {
    setStack((prev) => {
      const next = new Set(prev)
      if (next.has(item)) {
        next.delete(item)
      } else {
        next.add(item)
      }
      return next
    })
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Input panel</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Configure seat count, region, stack components, and workload type.
        </p>

        <div className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Headcount: {headcount}</span>
            <input
              type="range"
              min={25}
              max={2500}
              step={25}
              value={headcount}
              onChange={(event) =>
                setHeadcount(Number.parseInt(event.currentTarget.value, 10))
              }
            />
          </label>

          <label className="grid gap-1.5 text-sm">
            <span className="font-medium">Region</span>
            <select
              className="h-10 rounded-lg border bg-background px-3"
              value={region}
              onChange={(event) =>
                setRegion(event.currentTarget.value as Region)
              }
            >
              <option value="india">India</option>
              <option value="us">US</option>
              <option value="eu">EU</option>
              <option value="apac">APAC</option>
            </select>
          </label>

          <div className="grid gap-1.5 text-sm">
            <span className="font-medium">Use case</span>
            <Tabs
              value={useCase}
              onValueChange={(value: string) => setUseCase(value as UseCase)}
            >
              <TabsList>
                <TabsTrigger value="daas">DaaS</TabsTrigger>
                <TabsTrigger value="browser">Secure Browser</TabsTrigger>
                <TabsTrigger value="both">Both</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <fieldset className="grid gap-2 text-sm">
            <legend className="mb-1 font-medium">Current stack</legend>
            {(["vdi", "mdm", "dlp", "endpoint", "vpn"] as const).map((item) => (
              <label key={item} className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={stack.has(item)}
                  onChange={() => toggleStack(item)}
                />
                <span className="capitalize">{item}</span>
              </label>
            ))}
          </fieldset>

          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={ociCredits}
              onChange={(event) => setOciCredits(event.currentTarget.checked)}
            />
            Apply OCI Universal Credits discount
          </label>
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Live output panel</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          3-year modeled cost for current stack and Neverinstall, with per-seat
          breakdown.
        </p>

        <div className="mt-6 grid gap-4">
          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">
              Current stack (3 years)
            </p>
            <p className="mt-1 text-2xl font-semibold">
              {formatCurrency(legacyThreeYear)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {formatCurrency(legacyPupm)}/seat/month
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-amber-500/80"
                style={{ width: legacyWidth }}
              />
            </div>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <p className="text-xs text-muted-foreground">
              Neverinstall (3 years)
            </p>
            <p className="mt-1 text-2xl font-semibold">
              {formatCurrency(neverinstallThreeYear)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {formatCurrency(neverinstallPupm)}/seat/month
            </p>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: neverinstallWidth }}
              />
            </div>
          </div>
          <div className="rounded-xl border p-4">
            <p className="text-xs text-muted-foreground">Projected savings</p>
            <p className="mt-1 text-2xl font-semibold text-emerald-600 dark:text-emerald-500">
              {formatCurrency(savings)}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {savingsPercent.toFixed(1)}% lower TCO
            </p>
            <Badge
              variant="secondary"
              className="mt-3 text-emerald-700 dark:text-emerald-500"
            >
              Modeled 3-year delta
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
