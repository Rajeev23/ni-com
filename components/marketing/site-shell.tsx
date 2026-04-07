import FooterSection from "@/components/footer"
import { HeroHeader as Header } from "@/components/header"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <Header />
      <main className="relative overflow-x-clip pt-14 lg:pt-20">
        {children}
      </main>
      <FooterSection />
    </div>
  )
}
