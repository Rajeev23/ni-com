import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { LogoIcon } from "@/components/logo"

export default function CallToAction() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Card className="relative overflow-hidden p-8 shadow-lg md:px-32 md:py-20">
          <LogoIcon
            uniColor
            aria-hidden
            className="pointer-events-none absolute inset-0 size-full translate-y-3/4 text-foreground/10"
          />
          <div className="relative text-center">
            <h2 className="text-3xl font-semibold text-balance text-foreground md:text-4xl">
              Create, Sell and Grow
            </h2>
            <p className="mt-4 mb-6 text-balance text-muted-foreground">
              Join a community of over 1000+ companies and developers who have
              already discovered the power of Neverinstall.{" "}
            </p>

            <Button asChild>
              <Link href="#">Contact Sales</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
