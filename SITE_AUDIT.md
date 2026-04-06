# Neverinstall.com Site Audit — April 2026

Comprehensive review of design, layout, web copy, and content quality across all pages.

---

## Executive Summary

The site has strong information architecture and well-structured content. However, it suffers from three systemic issues that undermine credibility with enterprise buyers:

1. **No product visuals** — Zero screenshots, mockups, or product imagery anywhere on the site. Enterprise buyers evaluating VDI replacements need to see the admin console, session view, and policy dashboard before booking a demo.
2. **Generic visual patterns** — Every grid card uses the same checkmark icon, every CTA band has identical copy, and all pages share a uniform indigo-only color scheme. The site looks auto-generated rather than designed.
3. **Copy repetition** — Key phrases ("70-80% lower cost", "sub-second session restore", "One platform. Two work modes.") appear so frequently that they lose impact.

---

## Page-by-Page Findings

### 1. Homepage (`/`)

#### Design & Layout

| Issue                                 | Severity | Detail                                                                                                                                                                                |
| ------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero is text-only                     | P0       | No product screenshot, demo video, or animated product preview. Every competitor (Island, AVD, Citrix) shows the product in the hero.                                                 |
| No customer logos                     | P0       | The CustomerProof section names Tally, Porter, Indovance, Alliance Broadband as text — but shows zero actual logos. Customer logo bars are table stakes for enterprise landing pages. |
| Generic Lucide icons throughout       | P1       | ProofBar uses Zap, DollarSign, Clock, Shield. TwoWorkModes uses Monitor, Globe. These are the same icons on thousands of SaaS sites.                                                  |
| Competitive Matrix uses basic check/x | P2       | The comparison table works structurally but the check/partial/x icons are very minimal.                                                                                               |

#### Web Copy

| Issue                                       | Severity | Detail                                                                                                                        |
| ------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| "One Platform. Two Work Modes." repeated 3x | P1       | Appears in hero headline, hero subtitle, and `corePages.homepage.metric`. The metric field literally duplicates the headline. |
| "70-80% lower cost" appears 3x on one page  | P2       | In ProofBar, browser bullets, and hook line below TwoWorkModes.                                                               |
| Trust context line too small                | P2       | "Live in production with enterprise customers..." is buried in `text-xs` at bottom of hero — easy to miss.                    |

#### Files

- `app/(frontend)/page.tsx`
- `components/marketing/animated-sections.tsx`

---

### 2. Pricing (`/pricing`)

#### Design & Layout

| Issue                             | Severity | Detail                                                                                                         |
| --------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| Summary cards redundant with tabs | P1       | Two "Secure Browser model" / "Desktop Workspaces model" cards at top repeat exactly what the tabs show below.  |
| No feature list per tier          | P0       | Each plan card shows only label + price + one sentence. Buyers can't differentiate Standard from Professional. |
| No "recommended" badge            | P1       | No visual distinction for recommended/popular plan.                                                            |
| No feature comparison table       | P1       | Missing a cross-tier feature matrix (Standard vs Professional vs Enterprise).                                  |
| No annual/monthly toggle          | P2       | Standard pattern for SaaS pricing pages, not present.                                                          |
| No "Contact Sales" for Enterprise | P2       | Enterprise tier shows fixed price instead of "Contact us" for custom deals.                                    |

#### Web Copy

| Issue                               | Severity | Detail                                                                            |
| ----------------------------------- | -------- | --------------------------------------------------------------------------------- |
| Plan descriptions are vague         | P1       | "Adds richer DLP controls and broader enterprise governance" — what specifically? |
| Ultra DaaS description says nothing | P1       | "For higher-performance and premium desktop use cases" is circular.               |
| "How to evaluate" section is filler | P2       | Just tells users to use the TCO calculator. Not actually helpful.                 |

#### Files

- `app/(frontend)/pricing/page.tsx`

---

### 3. About (`/company/about`)

#### Design & Layout

| Issue                                    | Severity | Detail                                                                                                       |
| ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| All 9 cards use identical checkmark icon | P1       | GridCardIcon renders the same SVG for "Our Story", Leadership, and "Backed" sections.                        |
| No leadership headshots                  | P1       | For enterprise trust, showing the team matters. Three identical icon cards for CEO/CTO/CRO looks unfinished. |
| "Backed for next phase" section is thin  | P2       | Just mentions one investor and two filler cards.                                                             |

#### Web Copy

| Issue                                           | Severity | Detail                                                                                                       |
| ----------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| "Enterprise computing, re-architected" is vague | P2       | Hero headline doesn't communicate what the company does.                                                     |
| Leadership bios are generic                     | P2       | "Leads product and company direction focused on secure enterprise platform execution" could describe anyone. |

#### Files

- `app/(frontend)/company/about/page.tsx`

---

### 4. Careers (`/company/careers`)

#### Design & Layout

| Issue                    | Severity | Detail                                                                                   |
| ------------------------ | -------- | ---------------------------------------------------------------------------------------- |
| No open positions listed | P1       | Just 3 generic value prop cards and a "Contact Recruiting" CTA. Dead end for candidates. |
| Page is extremely thin   | P2       | Hero + 3 cards + CTA band. No culture content, employee quotes, or team photos.          |

#### Web Copy

| Issue                     | Severity | Detail                                                                                                                |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| Generic employer branding | P2       | "Own meaningful systems", "Learn with expert peers", "Ship for real customers" — could be on any tech company's site. |

#### Files

- `app/(frontend)/company/careers/page.tsx`

---

### 5. Customer Stories (`/customers`)

#### Design & Layout

| Issue                          | Severity | Detail                                                                                                                                                     |
| ------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Only 3 stories, all anonymized | P0       | "Fintech team", "IT services firm", "Global delivery team" — no real company names. Meanwhile homepage names Tally, Porter, Indovance, Alliance Broadband. |
| No customer logos              | P1       | Zero logos on the page or story detail pages.                                                                                                              |
| Story detail pages are minimal | P2       | Just hero + summary + 3 bullets + CTA. No depth.                                                                                                           |

#### Web Copy

| Issue                      | Severity | Detail                                                                                                                     |
| -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| Hero subtitle too abstract | P2       | "See how enterprises reduce complexity, improve policy consistency, and scale rollout confidence" — says nothing specific. |

#### Files

- `app/(frontend)/customers/page.tsx`
- `lib/content/pages/customers.ts`

---

### 6. Security / Trust Center (`/security`)

#### Design & Layout

| Issue                                                       | Severity | Detail                                                                                        |
| ----------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| No compliance badges or certification icons                 | P1       | Trust pages should show SOC2, ISO, etc. logos. ResourceGrid cards are text-only.              |
| Three info cards are filler                                 | P2       | "For security review", "For documentation requests", "For product buyers" add no information. |
| "Talk to Security" CTA links to possibly non-existent route | P1       | Points to `/security/security-contact` which is not in the trust pages config.                |

#### Files

- `app/(frontend)/security/page.tsx`

---

### 7. Get Demo / Signup / Contact (`/get-demo`, `/signup`, `/contact`)

#### Design & Layout

| Issue                                  | Severity | Detail                                                                                |
| -------------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| All three forms visually identical     | P1       | Hero + narrow centered form + CTA. No social proof sidebar, trust badges, or context. |
| No expected response time on demo form | P2       | User has no idea what happens after submission.                                       |
| Trial page gives zero trial details    | P1       | "Start Free Trial" but no info on duration, inclusions, limits, or what happens next. |
| Contact form has no inquiry type       | P2       | "sales, support, or partnerships" all go to the same textarea. No way to categorize.  |

#### Files

- `app/(frontend)/get-demo/page.tsx`
- `app/(frontend)/signup/page.tsx`
- `app/(frontend)/contact/page.tsx`
- `components/marketing/forms.tsx`

---

### 8. Documentation (`/docs`)

#### Design & Layout

| Issue                                | Severity | Detail                                                                               |
| ------------------------------------ | -------- | ------------------------------------------------------------------------------------ |
| Placeholder page with no real docs   | P1       | 4 generic category cards with no links. Primary CTA goes to product pages, not docs. |
| Meta description reveals it's a stub | P2       | "External-facing documentation" in meta description.                                 |
| Should not be in nav if empty        | P1       | Creates a dead-end experience for visitors.                                          |

#### Files

- `app/(frontend)/docs/page.tsx`

---

### 9. Resources (`/resources`)

#### Design & Layout

| Issue                            | Severity | Detail                                                                             |
| -------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| Only 3 resource cards            | P1       | Platform Technology, Trust Center, TCO Calculator. Just a link hub to other pages. |
| No actual downloadable resources | P2       | No whitepapers, guides, webinar recordings, or gated content.                      |

#### Files

- `app/(frontend)/resources/page.tsx`

---

### 10. TCO Calculator (`/tco-calculator`)

#### Web Copy

| Issue                               | Severity | Detail                                        |
| ----------------------------------- | -------- | --------------------------------------------- |
| "Pricing estimates are directional" | P2       | Undercuts the calculator's value proposition. |

#### Files

- `app/(frontend)/tco-calculator/page.tsx`

---

### 11. Template Pages (Products, Solutions, Industries, Compares)

All pages rendered through `TemplatePage` share these systemic issues:

#### Design & Layout

| Issue                                            | Severity | Detail                                                                                                                                      |
| ------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Every BlockGrid card uses identical GridCardIcon | P1       | Same indigo checkmark SVG on 40+ cards across the entire site. "Sub-second session restore" gets the same icon as "Broadcom's acquisition". |
| All CtaBand sections have identical copy         | P1       | Every page ends with "Ready to evaluate Neverinstall?" + same body text. Only the button labels differ.                                     |

#### Files

- `components/marketing/sections.tsx` (GridCardIcon on line 199, CtaBand on line 681)
- `lib/content/pages/products.ts`
- `lib/content/pages/use-cases.ts`
- `lib/content/pages/industries.ts`
- `lib/content/pages/compares.ts`

---

## Global Issues

### Navigation

| Issue                                              | Severity | Detail                                      | File                                                 |
| -------------------------------------------------- | -------- | ------------------------------------------- | ---------------------------------------------------- |
| "Platform" appears twice in nav                    | P2       | Top-level item AND inside Products dropdown | `components/header.tsx`, `lib/content/navigation.ts` |
| Mobile nav shows Pricing separately from accordion | P3       | Inconsistent visual treatment               | `components/header.tsx`                              |

### Footer

| Issue                             | Severity | Detail                                                             | File                            |
| --------------------------------- | -------- | ------------------------------------------------------------------ | ------------------------------- |
| `/privacy` link likely 404s       | P0       | Should point to `/security/privacy-data-protection`                | `components/footer.tsx:107`     |
| `/terms` link likely 404s         | P0       | Should point to `/security/terms-conditions`                       | `components/footer.tsx:112`     |
| "All Systems Normal" is hardcoded | P2       | Not connected to any status monitoring. Misleading during outages. | `components/footer.tsx:119-125` |

### Web Copy (Global)

| Issue                                    | Severity | Detail                                                                                          |
| ---------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| "70-80% lower cost" overused             | P2       | Appears 10+ times across the site — homepage, product pages, comparison tables, stats sections. |
| "Sub-second session restore" overused    | P2       | Appears 8+ times across homepage, product pages, and comparison matrices.                       |
| "One platform. Two work modes." overused | P2       | Homepage hero, subtitle, metric, TwoWorkModes section title, about page blocks.                 |
| Inconsistent title separator             | P3       | Some pages use "                                                                                | Neverinstall", others use "- Neverinstall" in metadata titles. |

---

## Priority Summary

### P0 — Must Fix (Credibility / Broken)

1. No product screenshots/visuals anywhere
2. Customer logos missing site-wide
3. Footer `/privacy` and `/terms` links broken
4. Customer stories anonymized despite having real named customers
5. Pricing page has no feature breakdown per tier

### P1 — Should Fix (Quality / Conversion Impact)

1. Every grid card uses identical generic checkmark icon (40+ cards)
2. Every CtaBand is identical copy
3. Pricing page missing tier comparison table and "recommended" badge
4. About page leadership has no headshots
5. Docs page is a placeholder in the nav
6. Form pages have no social proof or context
7. Trust center has no compliance/certification visuals
8. Signup page doesn't explain trial details

### P2 — Nice to Fix (Polish)

1. Copy repetition ("70-80%", "sub-second", "one platform two work modes")
2. Vague plan descriptions on pricing
3. Generic employer branding on careers
4. Hardcoded status indicator in footer
5. Duplicate Platform nav entry
6. Thin resources page
7. "Enterprise computing, re-architected" vague about headline
