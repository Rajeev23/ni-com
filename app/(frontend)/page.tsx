import type { Metadata } from "next"

import { getBaseMetadata } from "@/lib/seo/metadata"
import {
  HeroAnimated,
  ProofBar,
  TwoWorkModes,
  WhyNow,
  DeploymentFlexibility,
  CompetitiveMatrix,
  SeoFaq,
  FinalCta,
} from "@/components/marketing/animated-sections"
import { CustomerLogoCloud } from "@/components/marketing/customer-logos"

export const metadata: Metadata = getBaseMetadata({
  title: "Virtual Desktop, Cloud PC & DaaS Platform | Neverinstall",
  description:
    "Neverinstall is a cloud-native virtual desktop and cloud PC platform. Replace Citrix and VMware with desktop as a service (DaaS) and secure browser workspaces at 70-80% lower cost.",
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

      {/* 8. SEO FAQ */}
      <SeoFaq />

      {/* 9. Final CTA — Get Demo + TCO Calculator */}
      <FinalCta />
    </>
  )
}
