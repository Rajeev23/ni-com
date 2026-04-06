import type { Metadata } from "next"

import { getBaseMetadata } from "@/lib/seo/metadata"
import { corePages } from "@/lib/content/site"
import {
  HeroAnimated,
  ProofBar,
  TwoWorkModes,
  WhyNow,
  DeploymentFlexibility,
  CompetitiveMatrix,
  FinalCta,
} from "@/components/marketing/animated-sections"
import { CustomerLogoCloud } from "@/components/marketing/customer-logos"

export const metadata: Metadata = getBaseMetadata({
  title: corePages.homepage.title,
  description:
    "Neverinstall delivers Desktop Workspaces and Secure Browser Workspaces on one cloud-native platform. Replace Citrix and VMware at 70–80% lower cost.",
  path: "/",
})

export default function Page() {
  return (
    <>
      {/* 1. Hero — staggered reveal with motion */}
      <HeroAnimated />

      {/* 2. Proof bar — four key metrics */}
      <ProofBar />

      {/* 3. Two work modes — side-by-side cards */}
      <TwoWorkModes />

      {/* 4. Why now — market timing cards */}
      <WhyNow />

      {/* 5. Deployment flexibility — three deployment models */}
      <DeploymentFlexibility />

      {/* 6. Competitive matrix — legacy VDI vs browser-only vs hyperscaler vs Neverinstall */}
      <CompetitiveMatrix />

      {/* 7. Customer logos — infinite slider */}
      <CustomerLogoCloud />

      {/* 8. Final CTA — Get Demo + TCO Calculator */}
      <FinalCta />
    </>
  )
}
