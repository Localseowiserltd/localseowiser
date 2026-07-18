# Local SEO Wiser — Complete Website & Codebase Audit

**Live site:** https://localseowiser.com/  
**Codebase:** Next.js 15 App Router (`localseo-main`)  
**Audit date:** 17 July 2026  
**Scope:** Live crawl + full route/data/component review  
**Rule followed:** No production/code changes made for this audit (report only)

---

## 1. Executive summary

Local SEO Wiser is a conversion-oriented Pittsburgh local SEO agency site with strong homepage messaging, transparent pricing ranges, a clear process narrative, and several well-developed service pages (especially Local SEO, Google Map Optimization, Technical SEO, WordPress/Shopify, PPC/Google Ads).

The site is **not yet ready for aggressive SEO campaigns**. Critical gaps block trust, crawl clarity, and ranking reliability:

1. **21 internal links 404** (`/areas/*` × 13, `/industries/*` × 8) — homepage actively links to them.
2. **No `robots.txt`, no XML sitemap** (both 404 on live).
3. **No canonical tags, no Open Graph, no `metadataBase`** anywhere.
4. **JSON-LD only on homepage**; AggregateRating intentionally disabled because `verifiedGoogleReviews = []`.
5. **EEAT risk:** homepage testimonials, 4.9 rating, About “18.7M+ / 90%+” stats, and blog authors are not backed by verifiable evidence in code or on-page proof.
6. **Blog content is thin** (3 short paragraphs per “7–10 min” article) and sits on root URLs competing with service topics.
7. **Homepage and `/local-seo` cannibalize** the same primary keyword: *Local SEO Services in Pittsburgh, PA*.
8. **Pricing messaging conflicts:** homepage shows dollar ranges; `/packages` says “No fixed rates.”
9. **No Privacy / Terms pages** (trust and compliance gap for lead forms).
10. Portfolio proof is real-looking GSC screenshots for **one** client (4s Chemicals, Norman OK) plus external website cards — not Pittsburgh Map Pack case studies.

**Overall readiness:** Strong marketing foundation, weak technical SEO + proof layer. Fix Critical items before scaling content, ads, or outreach.

---

## 2. Overall website score

| Dimension | Score (/10) | Notes |
|-----------|-------------|-------|
| SEO foundation | **4.5** | Missing sitemap/robots/canonical/OG; broken area/industry links |
| Content depth | **6.0** | Strong service pages; thin blog; templated citation/landing pages |
| Search intent fit | **6.5** | Home + key services align well; blog/packages weaker |
| EEAT / trust | **3.5** | Team named; reviews/stats/authors unverifiable; no legal pages |
| UX / design | **7.0** | Clear sections, good CTA rhythm; some misleading buttons |
| Conversion | **7.0** | Strong hero CTA + form; pricing/proof conflicts hurt trust |
| Technical quality | **5.0** | Modern Next.js; metadata gaps; soft-404 link graph |
| Ranking potential (current) | **4.0** | Can rank with fixes; not campaign-ready as-is |
| **Overall** | **5.4 / 10** | |

---

## 3. Critical ranking blockers

| # | Issue | Where | Why it matters | Severity | Fix | Impact |
|---|--------|-------|----------------|----------|-----|--------|
| C1 | No XML sitemap | Live `/sitemap.xml` 404; no `src/app/sitemap.ts` | Crawl discovery delayed; Google relies on links only | Critical | Add `sitemap.ts` covering all 200 URLs | Faster indexing |
| C2 | No robots.txt | Live `/robots.txt` 404; no `robots.ts` | Crawlers lack crawl policy + sitemap pointer | Critical | Add `robots.ts` → allow all + sitemap URL | Crawl hygiene |
| C3 | 13 area URLs 404 | Homepage `AreasWeServe` → `/areas/*` | Soft-404 internal link graph; wastes crawl budget; hurts UX | Critical | Either ship unique area pages **or** remove/relink pills to `#`/`/contact`/`/local-seo` | Trust + crawl |
| C4 | 8 industry URLs 404 | Homepage `Industries` cards | Same as C3 | Critical | Ship 3–5 real industry pages **or** unlink | Trust + crawl |
| C5 | No canonical URLs | All pages (`canonical: null` in crawl) | Duplicate/param risk; unclear preferred URL | Critical | Set `metadataBase` + per-page `alternates.canonical` | Index clarity |
| C6 | Home vs `/local-seo` title clash | Both target “Local SEO Services in Pittsburgh, PA” | Keyword cannibalization | Critical | Differentiate: Home = agency; `/local-seo` = service | Ranking focus |
| C7 | Unverifiable AggregateRating path | UI shows 4.9; schema wisely empty | If schema ever filled with unverified reviews → Google spam risk | Critical | Only emit Review schema from real GBP reviews | Compliance |
| C8 | Thin blog at commercial root URLs | `/google-business-profile-wins` etc. | Weak pages competing for GBP/citation/review topics | Critical | Expand or noindex until substantial; move under `/blog/` | Authority |

---

## 4. Critical conversion blockers

| # | Issue | Where | Why it matters | Severity | Fix | Impact |
|---|--------|-------|----------------|----------|-----|--------|
| V1 | Testimonials look synthetic | Home `testimonials` in `site-content.ts` | Flag-emoji names, generic businesses, no photos/links/source | Critical | Replace with real clients + permission, or remove | Trust → leads |
| V2 | “See More Reviews” → `/contact` | `Testimonial.tsx` | Misleading CTA; feels bait-and-switch | Critical | Link to GBP reviews or remove button | Trust |
| V3 | About stats unsupported | `aboutPageStats` (50+, 90%+, 18.7M+, 4.9/5) | Exaggeration risk if not documented | Critical | Prove or remove | Trust |
| V4 | Pricing contradiction | Home ranges vs Packages “No fixed rates” | Confuses buyers mid-funnel | Critical | Align messaging; show ranges on both or neither | Conversion |
| V5 | No Privacy / Terms | Missing routes | Form + Web3Forms lead capture without policy | Critical | Add `/privacy` and `/terms`; link in footer + form | Compliance/trust |
| V6 | Contact page incomplete NAP | Contact “Office” omits street address shown in footer/schema | NAP inconsistency | Important→Critical for local | Show full US (+ optional UK) address | Local trust |
| V7 | Portfolio geographic mismatch | Pittsburgh agency; proof is OK + Dubai/AU sites | Weak local social proof for Pittsburgh buyers | Important | Add Pittsburgh/US Map Pack case studies | Conversion |

---

## 5. Complete route inventory

### 5.1 Live / implementable (HTTP 200)

| URL | Purpose | Primary keyword (inferred) | Intent | Title (live) | Meta description | H1 | ~Words | Indexable | Canonical | Schema | Weaknesses |
|-----|---------|----------------------------|--------|--------------|------------------|----|--------|-----------|-----------|--------|------------|
| `/` | Agency homepage | local SEO services Pittsburgh | Commercial / local | Local SEO Services in Pittsburgh, PA | Unique, ~161 chars | Local SEO Services in Pittsburgh… Map Pack and AI Search | ~1802 | Yes (default) | Missing | ProfessionalService + FAQPage + Breadcrumb (home only) | 404 links; title clash with `/local-seo`; unverifiable testimonials |
| `/about` | Company story + team | about Local SEO Wiser / Pittsburgh local SEO agency | Navigational / commercial | About Local SEO Wiser \| … | Unique ~150 | About Local SEO Wiser | ~1155 | Yes | Missing | None | Unproven stats; no author bios for blog writers |
| `/contact` | Lead gen | contact local SEO Pittsburgh | Transactional | Contact Local SEO Wiser \| … | Unique ~139 | Let's Grow Your Local Business Together | ~722 | Yes | Missing | None | Incomplete street NAP in body |
| `/services` | Service hub | local SEO services / digital services | Commercial | Services \| … (template) | **Inherited root** (not unique) | Everything you need to grow locally… | ~529 | Yes | Missing | None | Thin; H1 mentions “automation” (no automation service) |
| `/packages` | Pricing models | local SEO packages Pittsburgh | Commercial / transactional | Packages \| … | Inherited root | Flexible engagement models… | ~461 | Yes | Missing | None | Contradicts home pricing; thin |
| `/portfolio` | Proof hub | local SEO case studies / portfolio | Commercial | Portfolio \| … | Inherited root | Verified GSC reporting… | ~697 | Yes | Missing | None | One SEO client; websites not SEO case studies |
| `/blog` | Content hub | local SEO blog | Informational | Blog \| … | Inherited root | Actionable local SEO insights… | ~412 | Yes | Missing | None | Only 3 posts; thin index |
| `/local-seo` | Core service | local SEO services Pittsburgh | Commercial / local | Local SEO Services in Pittsburgh, PA \| Local SEO Wiser | Unique but **201 chars** (long) | Get Found First. Get Chosen First. | ~1540 | Yes | Missing | None | H1 weak for SEO; title duplicates home |
| `/google-map-optimization` | GBP / Maps service | Google map optimization Pittsburgh / GBP | Commercial | Google Map Optimization in Pittsburgh \| … | Unique ~169 | Google Map Optimization in Pittsburgh, PA | ~1800 | Yes | Missing | None | Strong page; needs schema + OG |
| `/seo-for-small-business` | SMB SEO offer | SEO for small business | Commercial | SEO for Small Business \| … | Unique ~190 (long) | SEO For Small Business | ~1952 | Yes | Missing | None | Overlaps local SEO; clarify differentiation |
| `/local-business-citation` | Citations | local business citations | Commercial | Local Business Citation \| … | Unique ~132 (short) | Local Business Citation | ~668 | Yes | Missing | None | Templated/thin vs flagship services |
| `/landing-page-optimization` | CRO/landing SEO | landing page optimization | Commercial | Landing Page Optimization \| … | Unique ~127 (short) | Landing Page Optimization | ~675 | Yes | Missing | None | Templated/thin |
| `/technical-seo` | Technical SEO | technical SEO Pittsburgh | Commercial | Technical SEO Services in Pittsburgh \| … | Unique ~167 | Technical SEO Services in Pittsburgh, PA | ~1823 | Yes | Missing | None | Strong; no schema |
| `/ppc-advertising` | PPC | PPC advertising Pittsburgh | Commercial | PPC Advertising in Pittsburgh, PA \| … | Unique ~213 (long) | PPC Advertising… | ~1892 | Yes | Missing | None | Overlaps Google Ads |
| `/google-ads` | Google Ads | Google Ads management Pittsburgh | Commercial | Google Ads Management… | Unique ~178 | Google Ads Management… | ~1870 | Yes | Missing | None | Cannibalization risk with PPC |
| `/wordpress-development` | WP builds | WordPress development Pittsburgh | Commercial | WordPress Development… | Unique ~202 (long) | WordPress Development… | ~1831 | Yes | Missing | None | Strong commercial page |
| `/shopify-development` | Shopify | Shopify development Pittsburgh | Commercial | Shopify Development… | Unique ~186 | Shopify Development… | ~1898 | Yes | Missing | None | Strong |
| `/social-media-management` | SMM | social media management Pittsburgh | Commercial | Social Media Management… | Unique ~215 (long) | Show Up Consistently… | ~1402 | Yes | Missing | None | H1 brand-y not keyword-led |
| `/google-business-profile-wins` | Blog article | Google Business Profile tips | Informational | 9 Google Business Profile Wins… | Unique ~122 (short) | Matches title | ~448 | Yes | Missing | None | Extremely thin; root URL |
| `/local-citation-quality-vs-quantity` | Blog | local citations quality | Informational | Local Citations… | ~110 short | Matches | ~444 | Yes | Missing | None | Thin; root URL |
| `/review-management-playbook` | Blog | review management local | Informational | Review Management Playbook… | ~120 | Matches | ~448 | Yes | Missing | None | Thin; root URL |
| `/portfolio/reports/*` (8) | Report detail | branded / supporting | Navigational | Report title \| template | Short insight | Report title | ~400–450 | Yes | Missing | None | Screenshot-led; thin text; OK as support URLs |
| `/business` | Legacy | — | — | redirects `/` | — | — | — | N/A | — | — | Keep redirect |

**Portfolio report URLs:**  
`/portfolio/reports/6-month-gsc-overview`, `impression-surge-report`, `early-traction-phase`, `sustained-growth-report`, `april-call-snapshot`, `6-month-call-trend`, `recent-call-activity`, `call-baseline-report`

### 5.2 Linked but broken (HTTP 404)

**Areas:** `/areas/shadyside`, `lawrenceville`, `oakland`, `squirrel-hill`, `strip-district`, `south-side`, `north-shore`, `mt-lebanon`, `cranberry-township`, `monroeville`, `robinson-township`, `north-hills`, `south-hills`  
Source: `homeAreasServed` + `AreasWeServe.tsx`

**Industries:** `/industries/law-firms`, `dentists-medical`, `hvac`, `plumbers`, `contractors`, `roofing`, `restaurants`, `professional-financial`  
Source: `homeIndustries` / Industries section

### 5.3 Missing expected routes

| Expected | Status |
|----------|--------|
| `/privacy`, `/terms`, refund policy | Missing (404) |
| `/sitemap.xml`, `/robots.txt` | Missing (404) |
| `/reviews` or GBP reviews page | Missing (“See More Reviews” fake) |
| `/blog/[slug]` structure | Not used (root slugs instead) |
| Dedicated FAQ page | FAQ only as homepage sections |
| Admin / private app routes | None found |

### 5.4 Dynamic routing (code)

- `src/app/[slug]/page.tsx` → blogPosts + servicePages  
- `src/app/portfolio/reports/[slug]/page.tsx` → portfolioReportsDetailed  
- Data: `src/data/site-content.ts`, `service-page-seo.ts`, `portfolio-reports.ts`

---

## 6. Page-by-page scorecard

Scores: SEO / Content / Intent / EEAT / UX / Conversion / Technical / Ranking potential

| Page | SEO | Cont | Intent | EEAT | UX | Conv | Tech | Rank | Notes |
|------|-----|------|--------|------|----|------|------|------|-------|
| `/` | 6 | 8 | 8 | 3 | 8 | 8 | 4 | 5 | Best commercial page; trust holes |
| `/about` | 6 | 7 | 7 | 4 | 7 | 6 | 5 | 5 | Good story; prove numbers |
| `/contact` | 6 | 6 | 8 | 5 | 7 | 8 | 5 | 6 | Strong funnel; fix NAP + legal |
| `/services` | 4 | 4 | 6 | 4 | 7 | 6 | 4 | 4 | Hub only; unique meta needed |
| `/packages` | 4 | 4 | 6 | 3 | 6 | 4 | 4 | 3 | Conflicts with home pricing |
| `/portfolio` | 5 | 5 | 6 | 5 | 7 | 6 | 5 | 4 | Real screenshots; narrow proof |
| `/blog` | 3 | 3 | 5 | 2 | 6 | 4 | 4 | 2 | Thin index |
| `/local-seo` | 6 | 8 | 8 | 5 | 8 | 8 | 5 | 6 | Fix title/H1 vs home |
| `/google-map-optimization` | 8 | 8 | 9 | 6 | 8 | 8 | 5 | 7 | Strongest service SEO page |
| `/seo-for-small-business` | 7 | 8 | 8 | 5 | 8 | 7 | 5 | 6 | Clarify vs local SEO |
| `/local-business-citation` | 4 | 4 | 6 | 4 | 6 | 5 | 4 | 3 | Templated |
| `/landing-page-optimization` | 4 | 4 | 6 | 4 | 6 | 5 | 4 | 3 | Templated |
| `/technical-seo` | 7 | 8 | 8 | 5 | 8 | 7 | 5 | 6 | Strong |
| `/ppc-advertising` | 6 | 8 | 7 | 5 | 8 | 7 | 5 | 5 | Overlap Google Ads |
| `/google-ads` | 7 | 8 | 8 | 5 | 8 | 7 | 5 | 6 | Keep; merge PPC later if needed |
| `/wordpress-development` | 7 | 8 | 8 | 5 | 8 | 7 | 5 | 6 | Strong |
| `/shopify-development` | 7 | 8 | 8 | 5 | 8 | 7 | 5 | 6 | Strong |
| `/social-media-management` | 5 | 7 | 6 | 4 | 7 | 6 | 5 | 4 | Weaker keyword H1 |
| Blog articles (avg) | 2 | 2 | 4 | 2 | 5 | 3 | 4 | 1 | Not rank-ready |
| Portfolio reports (avg) | 3 | 3 | 4 | 5 | 6 | 4 | 5 | 2 | Support assets only |

---

## 7. Homepage audit

**File:** `src/app/page.tsx` + business components under `src/app/(pages)/business/components/`

### What works
- Clear Pittsburgh geographic positioning and neighborhood framing.
- Hero H1 matches commercial local intent.
- Primary CTA (“Free Visibility Scan”) + phone secondary CTA above the fold.
- Service overview, process, industries, areas, pricing, portfolio teaser, FAQ, honest-bit (anti-guarantee) — strong conversion architecture.
- Home schema: ProfessionalService + FAQPage present (`HomePageSchema.tsx`).

### Problems
- **Keyword conflict** with `/local-seo` (same title theme).
- **Broken area/industry links** (Critical).
- **Testimonials + 4.9** without verifiable source; “See More Reviews” → contact.
- **Portfolio proof** is Oklahoma industrial SEO, not Pittsburgh Map Pack.
- Footer/map embed present; GBP review link not featured as primary trust.
- No OG tags for social sharing of homepage.

### Recommended homepage positioning

**Primary keyword:** `Pittsburgh local SEO agency` (or `local SEO agency Pittsburgh`)  
**Not:** broad “digital marketing agency” or “SEO and web development agency” as primary.

**Why:** Site voice, schema, NAP, and strongest content are Map Pack / local SEO. Web, Shopify, PPC should be secondary offers under the agency umbrella — not equal homepage targets.

**Secondary homepage themes:** Google Business Profile, Map Pack, free visibility scan, transparent pricing.

**Avoid stuffing homepage for:** WordPress, Shopify, social, PPC as equal co-primaries (use service pages).

---

## 8. Service architecture audit

### Keep (already exist — improve, don’t duplicate)

| Service | URL | Verdict |
|---------|-----|---------|
| Local SEO | `/local-seo` | Keep as pillar |
| Google Map / GBP optimization | `/google-map-optimization` | Keep (covers GBP well) |
| SEO for small business | `/seo-for-small-business` | Keep; differentiate from local SEO |
| Citations | `/local-business-citation` | Keep but deepen |
| Landing page optimization | `/landing-page-optimization` | Keep or merge into CRO/web later |
| Technical SEO | `/technical-seo` | Keep |
| PPC | `/ppc-advertising` | Keep short-term; consider consolidating |
| Google Ads | `/google-ads` | Keep as primary paid page |
| WordPress | `/wordpress-development` | Keep |
| Shopify | `/shopify-development` | Keep |
| Social | `/social-media-management` | Keep as supporting offer |

### Do **not** create separate thin pages for (cover as sections on pillars)

- Local keyword research → section on `/local-seo` + blog cluster  
- Local content strategy → section on `/local-seo`  
- Review management → section on `/google-map-optimization` + deeper blog later  
- Local link building → section on `/local-seo`  
- On-page SEO → `/technical-seo` or `/seo-for-small-business`  
- Website redesign / maintenance / speed → sections under WordPress (+ Technical SEO)  
- PPC landing pages → `/landing-page-optimization` or Google Ads  
- Conversion optimization → expand landing-page page rather than new URL  
- eCommerce development → Shopify page covers; don’t fork unless demand proven  
- Local SEO audit as standalone → can be `/local-seo-audit` **only if** unique transactional content + form; else keep as CTA

### Recommended **new** pages (quality over quantity)

| URL | Primary keyword | Intent | Audience | Required sections | Internal links | Cannibalization risk |
|-----|-----------------|--------|----------|-------------------|----------------|----------------------|
| `/industries/dentists` (or `/dentists-medical`) | dentist SEO Pittsburgh / local SEO for dentists | Commercial | Dental practices | Pain points, Map Pack, reviews, HIPAA-safe claims, process, FAQ, CTA | `/local-seo`, `/google-map-optimization`, portfolio | Low if Pittsburgh + industry specific |
| `/industries/law-firms` | local SEO for law firms Pittsburgh | Commercial | Law firms | Practice-area caveats, ethics, leads quality | `/local-seo`, `/google-ads` | Medium vs generic local SEO |
| `/industries/hvac` or plumbers/contractors (pick 1–2 home services first) | HVAC SEO Pittsburgh | Commercial | Home services | Emergency intent, GBP categories, call tracking | `/local-seo`, `/google-ads` | Low |
| `/areas/mt-lebanon` (and 2–3 suburbs only) | local SEO Mt. Lebanon / near me agency angle as **service-area for agency** | Local commercial | Suburb businesses | Unique market notes, proof, map, CTA — **not** spun city spam | `/local-seo`, `/contact` | High if thin duplicates |
| `/privacy`, `/terms` | — | Navigational | All | Legal copy | Footer, forms | None |
| Optional later: `/local-seo-audit` | free local SEO audit Pittsburgh | Transactional | Leads | Deliverable of audit, timeline, form | Home CTA, contact | Low if not ranking for “services” |

**Do not** mass-publish all 13 area pages. Publish **only** where unique local proof and copy exist.

---

## 9. Local SEO audit (as a Local SEO agency site)

| Signal | Status | Detail |
|--------|--------|--------|
| Business name | Present | Local SEO Wiser |
| US address | Present in footer + schema | 307 Freeland St, Pittsburgh, PA 15210 |
| UK address | Present in footer | Wolverhampton office |
| Phone | Present | US +1 412 663 7288; UK +44 7454 758272 |
| Email | Present | info@localseowiser.com |
| NAP consistency | **Partial fail** | Contact page body omits full street; homepage areas 404 |
| Hours | Present | Mon–Fri 9–5 |
| Map embed | Present | Homepage Areas section iframe |
| GBP link | Weak | Maps search URL in footer; not “Leave a review” / profile hub |
| LocalBusiness / ProfessionalService schema | Home only | Good type choice; no `sameAs` social URLs in schema |
| Social sameAs | Missing in schema | Socials exist in `socialLinks` but not wired into JSON-LD |
| Service-area pages | Linked, not built | Critical |
| Local reviews on-site | Fake/unverified pattern | `verifiedGoogleReviews` empty (good for schema); UI still claims 4.9 |
| Geographic content | Strong on home + several services | Pittsburgh neighborhoods named repeatedly |

### Location page recommendation

**Only if** unique content can be written (local competition notes, real clients/served markets, distinct FAQs):

| Priority | City/region | Suggested URL | Primary keyword | Unique content needed | Local proof | Duplication risk |
|----------|-------------|---------------|-----------------|----------------------|-------------|------------------|
| 1 | Mt. Lebanon | `/areas/mt-lebanon` | local SEO Mt. Lebanon PA | Suburb search behavior, service mix | Real client or documented outreach | Medium |
| 2 | Cranberry Township | `/areas/cranberry-township` | local SEO Cranberry Township | North corridor dynamics | Same | Medium |
| 3 | Shadyside or Lawrenceville | `/areas/shadyside` | local SEO Shadyside Pittsburgh | Dense urban pack competition | Same | High if thin |

Until then: **remove 404 links**.

---

## 10. Industry-page recommendations

Recommend **4 first**, matching homepage industry cards and realistic offer:

| URL | Primary keyword | Intent | Pain points | Proof required | Sections | Related services | Case study | Cannibalization |
|-----|-----------------|--------|-------------|----------------|----------|------------------|------------|-----------------|
| `/industries/dentists-medical` | local SEO for dentists Pittsburgh | Commercial | Map Pack vs chains; reviews; appointments | Real dental client results **or** anonymized with permission | Problems, GBP categories, review system, HIPAA-aware notes, FAQ, CTA | `/local-seo`, `/google-map-optimization` | real evidence required | Low–medium |
| `/industries/law-firms` | local SEO for law firms Pittsburgh | Commercial | Ethics, practice areas, competitive packs | Verified legal client | Same + lead quality | `/local-seo`, `/google-ads` | real evidence required | Medium |
| `/industries/hvac` | HVAC SEO Pittsburgh | Commercial | Emergency intent, seasonality | Call-tracking screenshots | Same | `/local-seo`, `/google-ads` | real evidence required | Low |
| `/industries/plumbers` **or** `/contractors` | plumber SEO Pittsburgh | Commercial | Near-me, service area | Same | Same | `/local-seo` | real evidence required | Low |

**Defer:** restaurants, financial (harder proof / different conversion), roofing until home-services template proven.

**Do not** invent industry case studies.

---

## 11. Portfolio audit

### Current state
- `/portfolio` exists with filters (All / GSC / Calls).
- **8 report detail pages** for **4s Chemicals** (Norman, OK) with screenshot assets — genuine-looking performance artifacts.
- Separate “Client websites” cards: Dubai/AU/US sites (external links only) — web design proof, not local SEO case studies.
- Homepage portfolio teaser points at same 4s Chemicals story.

### Gaps vs ideal structure
- No filters by industry/service beyond GSC vs Calls.
- No Pittsburgh Map Pack before/after.
- No full case study narrative (problem → strategy → timeline → results → testimonial).
- Report pages are thin wrappers around screenshots (~400 words).
- Website projects lack dedicated internal project pages.

### Ideal structure (recommended)

**Portfolio landing (`/portfolio`):** intro, filters (service, industry, location), featured projects, results summary, service links, CTA.

**Project page (new pattern, e.g. `/portfolio/4s-chemicals`):** overview, problem, goals, services, strategy, stack, SEO work, before/after, screenshots, mobile, performance, leads, timeline, testimonial, related services/projects, CTA.

**Case study vs portfolio project:**  
- Portfolio project = showcase + metrics snapshot.  
- Case study = narrative + decisions + transferable lessons (often longer, blog-adjacent).

### Which existing assets should become full case studies
1. **4s Chemicals** — already has multi-month GSC + call data → **best candidate** for one deep case study (**real evidence already partially present**; still need client permission statement, goals, and qualitative story).  
2. Website builds (D Pet Care, etc.) — only if SEO/lead outcomes exist; otherwise keep as design portfolio cards (**real evidence required** for SEO claims).

---

## 12. Case study recommendations

| Candidate | Action | Missing (label clearly) |
|-----------|--------|-------------------------|
| 4s Chemicals | Build `/portfolio/4s-chemicals` + optional `/blog/` lesson post | Client quote permission, market context, worklog summary — **real evidence required** for any Pittsburgh claims |
| Pittsburgh Map Pack client | Priority #1 for sales | **real evidence required** — none visible on site today |
| WordPress/Shopify build with ranking lift | Secondary | **real evidence required** |

**Do not invent** traffic, rankings, revenue, or testimonials.

---

## 13. Blog and topical authority plan

### Current blog reality
- 3 posts, each **3 short paragraphs**, falsely labeled 7–10 min reads.
- Authors (Sara Khan, Ibrahim Hayes, Nadia Brooks) **not** on About team.
- Root URLs compete with service topics.
- No Article schema, no TOC, no update policy, no references.

**Verdict:** Current posts are **not** topical authority assets. Expand to 1,500–2,500+ words with unique insights **or** noindex until rewritten; move to `/blog/[slug]`.

### Practical cluster plan (20–30 high-value articles)

#### Cluster A — Local SEO pillar (`/local-seo`)
1. How Local SEO Works in Pittsburgh Neighborhoods — *local SEO Pittsburgh neighborhoods* — Informational — TOFU  
2. Local SEO vs Traditional SEO for Service Businesses — Informational — TOFU  
3. How Long Does Local SEO Take to Work? — Informational — MOFU  
4. Local SEO Pricing Guide for Small Businesses — Commercial investigation — MOFU  
5. Map Pack Ranking Factors Explained (No Fluff) — Informational — TOFU  

#### Cluster B — GBP (`/google-map-optimization`)
6. Google Business Profile Optimization Checklist (2026) — Informational  
7. How to Choose GBP Categories for Home Services — Informational  
8. GBP Posts That Drive Calls (Examples) — Informational  
9. Geo-Grid Rank Tracking: What It Means — Informational  
10. Multi-Location GBP Management Basics — Informational  

#### Cluster C — Citations & NAP (`/local-business-citation`)
11. NAP Consistency Guide for Multi-Directory Listings — Informational  
12. Best Citation Sources for Pittsburgh Businesses — Informational/local  
13. Duplicate Listings: How to Find and Fix Them — Informational  

#### Cluster D — Reviews
14. Ethical Review Generation Workflow for Local Businesses — Informational  
15. How to Respond to Negative Google Reviews — Informational  

#### Cluster E — Web / CRO
16. SEO Checklist Before Launching a WordPress Site — Informational → `/wordpress-development`  
17. Core Web Vitals Fixes That Affect Local Rankings — Informational → `/technical-seo`  
18. Landing Page Structure for High-Intent Local Ads — Informational → `/landing-page-optimization` / `/google-ads`  

#### Cluster F — Shopify / ecom
19. Shopify SEO Basics for Local Retailers — Informational → `/shopify-development`  
20. Collection & Product Page SEO Mistakes — Informational  

#### Cluster G — Paid + organic
21. When to Use Google Ads vs Local SEO — Commercial — MOFU  
22. Call Tracking Setup for Local Campaigns — Informational  

#### Cluster H — Industry (only after industry pages exist)
23. Local SEO for Dentists in Competitive Suburbs — Informational/commercial  
24. Local SEO for Law Firms: What Actually Moves Leads — Informational/commercial  
25. HVAC Seasonal Search Demand and GBP Strategy — Informational  

**Prioritize 12** before writing all 25. Link every article to parent service + contact CTA. Avoid cannibalizing service page primary keywords with near-identical titles.

---

## 14. EEAT and trust audit

| Element | Status | Notes |
|---------|--------|-------|
| Company identity | Partial | Clear positioning; dual US/UK footprint needs clearer “who serves what” |
| Founders/team | Present | Usman Fadi, Bilal Ahmad, Najaf, Tayyab on About |
| Blog authors | **Mismatch** | Not listed on team |
| Experience claims | Weak | “50+ markets”, “18.7M+ views”, “90%+ retention” — **unsupported in repo** |
| Portfolio | Partial | Real GSC screenshots for one client |
| Testimonials | **High risk** | Appear templated; no GBP embed/link verification |
| 4.9 rating | **High risk** | Shown in UI; `verifiedGoogleReviews` empty |
| Contact info | Strong | Phones, email, addresses, hours |
| Social profiles | Present | X, LinkedIn, FB, IG, TikTok, Pinterest |
| Privacy / Terms | **Missing** | Critical |
| Process transparency | Strong | Home + services |
| Anti-guarantee honesty | Strong | “Honest Bit” section — keep |
| Certifications/partners | Missing | Optional; don’t fake |
| Security (forms) | Partial | Web3Forms + honeypot; disclose privacy |

**Unsupported / vague claims to fix or remove:**
- 4.9 average client satisfaction / “verified local campaigns”
- 18.7M+ map discovery views improved  
- 90%+ clients staying beyond 12 months  
- 50+ markets with active campaigns  
- Flag-emoji international testimonials without attribution  
- Blog “8–10 min” read times  

---

## 15. Technical SEO audit

| Item | Live / code finding |
|------|---------------------|
| Metadata implementation | Per-page titles uneven; several inherit root description |
| Dynamic metadata | `[slug]` uses service/blog fields |
| Duplicate titles | Home + `/local-seo` thematic clash |
| Duplicate descriptions | `/services`, `/packages`, `/portfolio`, `/blog` share root description |
| Missing unique descriptions | Same as above |
| Canonical | **None** |
| Absolute canonical | N/A |
| robots meta | Default index; 404 pages `noindex` (good) |
| robots.txt | **404** |
| XML sitemap | **404** |
| Redirects | `/business` → `/`; no www rules in `next.config.ts` |
| Trailing slash | Next default (verify hosting) |
| HTTPS | Live site HTTPS |
| Structured data | Home only |
| Open Graph / Twitter | **None** (`hasOG: false` all crawled URLs) |
| Breadcrumbs | Visual partial; schema breadcrumb home-only (Home only item) |
| Heading hierarchy | Generally one H1; service templates OK |
| next/image | Mixed; blog/report use `<img>` in places |
| Fonts / JS weight | Bootstrap + Swiper + Iconify — monitor CWV |
| Forms | Labels present on VisibilityScanForm |
| Broken links | 21 area/industry |
| 404 page | Default Next notFound |
| Hydration | Empty `<style suppressHydrationWarning>{}` in root layout — odd but intentional FOUC hack? |

**Key files:** `src/app/layout.tsx`, `src/app/[slug]/page.tsx`, `src/components/seo/HomePageSchema.tsx`, `src/data/site-content.ts`, `next.config.ts`, `vercel.json`

---

## 16. Schema audit

| Type | Present? | Appropriate? | Recommendation |
|------|----------|--------------|----------------|
| ProfessionalService | Yes (home) | Yes | Add `sameAs`, `priceRange`, `openingHours`, `image` |
| LocalBusiness | No | Optional alternative / additional | Prefer one primary org type; don’t duplicate conflicting NAPs |
| Organization | No | Yes as WebSite publisher | Add with logo + sameAs |
| Service | No | Yes on service pages | Add per service when content supports |
| BreadcrumbList | Yes (home only, single crumb) | Weak | Real crumbs on inner pages |
| FAQPage | Yes (home) | Yes — FAQs visible | Add on service pages that show FAQs |
| Article / BlogPosting | No | Only after real articles | Don’t add on thin posts |
| WebSite | No | Yes | Add SearchAction only if site search exists (it doesn’t — skip Action) |
| Person | No | For authors/team | Add when real bios exist |
| Review / AggregateRating | Code-ready, empty array | **Do not enable** until real reviews | Keep empty |

**Do not** add AggregateRating based on the decorative 4.9 UI.

---

## 17. UX and mobile audit

### Strengths
- Clear nav + services mega menu (`NavTopBar`, `ServicesMegaMenu`).
- Strong section rhythm on homepage.
- Visible phone + WhatsApp paths.
- Transparent pricing block (when believed).
- Honest Bit differentiates from spammy agencies.

### Weaknesses
- Broken area/industry pills destroy credibility on click.
- “See More Reviews” mislabel.
- Packages page undercuts homepage pricing clarity.
- Services H1 mentions “automation” with no automation offer.
- Blog UX promises depth it doesn’t deliver.
- Contact office line lacks full address vs footer.
- Dual US/UK positioning may confuse local Pittsburgh buyers if not framed (“Pittsburgh HQ, serving…”) earlier.

**Visual/content smell test:** Some service pages feel carefully written; citation/landing + blog feel templated/AI-short. Testimonials read generic.

---

## 18. Internal linking audit

### Strong
- Mega menu → 11 services  
- Footer service columns  
- Service pages → contact / tel / related explore  
- Blog related articles loop  

### Broken / harmful
- Homepage → 13 areas + 8 industries (404)  
- Home sticky portfolio slides → `/portfolio` (OK) but not deep report URLs consistently  

### Orphan / weak
- Portfolio reports mainly linked from portfolio hub  
- No topical links from services → blog (blog too thin anyway)  
- No industry ↔ service bidirectional links (pages missing)

### Anchor text
- Mostly descriptive service titles — good  
- Area pills use city names — good **if** pages exist  

---

## 19. Image SEO audit

| Finding | Detail |
|---------|--------|
| Brand logo | `/logo.png`, footer variant — OK |
| Favicon | Pin favicon implemented in codebase (layout links) |
| Portfolio | GSC/call screenshots — high value; ensure compressed WebP |
| Blog images | Present; alt/file naming needs review in components |
| next/image | Used widely on home/portfolio; inconsistent on blog/reports |
| Decorative vs informative | Hero/industry cards mostly supportive |
| Missing | Pittsburgh before/after Map Pack visuals, process diagrams, annotated GBP screenshots on service pages |
| File names | Many hashed from `src/assets`; public marketing shots should use descriptive names when possible |

---

## 20. Competitor-level gap analysis

Compared with strong local SEO / web agency sites, Local SEO Wiser is missing:

1. Clean technical baseline (sitemap, robots, canonical, OG)  
2. Zero soft-404 navigation  
3. Verified review engine (GBP embed / tagged reviews)  
4. Pittsburgh-specific case studies  
5. Real industry landing pages  
6. Depth content hub (not 3 stub posts)  
7. Legal pages  
8. Consistent pricing story  
9. Author EEAT alignment  
10. Service-level schema  

**Content/service coverage** is actually closer to competitive than proof/trust/technical layers.

---

## 21. Missing pages

**Must-have before campaigns:**
- `/privacy`, `/terms`
- `sitemap.xml` + `robots.txt` (via App Router)
- Fix or remove area/industry destinations

**Should-have next:**
- 3–4 industry pages with real proof hooks  
- 1 flagship case study page  
- Expanded blog under `/blog/[slug]`  

**Nice-to-have later:**
- 2–3 suburb pages with unique content  
- `/reviews` pointing to GBP  
- Optional `/local-seo-audit` transactional page  

---

## 22. Pages that should be removed or merged

| Page | Recommendation |
|------|----------------|
| Current 3 blog stubs | Rewrite deeply or noindex/remove until ready |
| `/ppc-advertising` vs `/google-ads` | Keep both short-term; long-term consider `/ppc-advertising` as hub linking to Google Ads + Meta sections **or** merge if analytics show overlap |
| `/local-business-citation` + `/landing-page-optimization` | Don’t remove; **upgrade** from template depth |
| `/business` | Keep redirect only |
| All `/areas/*` and `/industries/*` 404s | Not pages — remove links until built |

---

## 23. Keyword cannibalization risks

| Conflict | Pages | Resolution |
|----------|-------|------------|
| local SEO services Pittsburgh | `/` and `/local-seo` | Home → *agency*; service → *services* + H1 with keyword |
| Google Ads / PPC | `/google-ads`, `/ppc-advertising` | Differentiate: Google-only vs multi-channel |
| Small business SEO vs Local SEO | `/seo-for-small-business`, `/local-seo` | SMB = budget/scope framing; Local = Map Pack system |
| GBP topics | `/google-map-optimization` vs thin blog GBP post | Service wins; blog supports with long-form unique angles |
| Citations | `/local-business-citation` vs citation blog | Same |
| Inherited meta | hub pages | Unique titles/descriptions each |

---

## 24. Priority roadmap

### Critical (do before active SEO campaigns)
1. Remove or fix all `/areas/*` and `/industries/*` 404 links (`AreasWeServe.tsx`, industry data hrefs).  
2. Add `src/app/sitemap.ts` + `src/app/robots.ts`.  
3. Add `metadataBase` + canonicals + unique meta for hub pages.  
4. Add Open Graph basics.  
5. Replace/remove unverifiable testimonials + 4.9 UI **or** wire real GBP reviews.  
6. Align About stats with proof or remove.  
7. Add Privacy + Terms; link near forms.  
8. Resolve home vs `/local-seo` title/H1 strategy.  
9. Align Packages vs homepage pricing copy.  
10. Fix “See More Reviews” button target.

### Important (before scaling content)
1. Expand citation + landing-page service pages beyond template.  
2. Move blogs to `/blog/[slug]`; rewrite to real depth; align authors with team.  
3. Add FAQ/Service schema on top service pages.  
4. Ship 1 real case study page from 4s Chemicals (+ permission).  
5. Complete NAP on contact page.  
6. Add `sameAs` to organization/professional schema.  
7. Standardize image component usage + compression.

### Growth (scale traffic & authority)
1. 3–4 industry pages with real evidence hooks.  
2. 12 priority blog articles in clusters.  
3. 2–3 unique suburb pages only if content quality bar met.  
4. Pittsburgh Map Pack case study (real evidence required).  
5. Optional audit landing page for paid/organic lead magnets.  
6. Continuous CWV monitoring (Bootstrap/Swiper weight).

---

## 25. Final verdict

### Already strong
- Homepage narrative, process, pricing transparency concept, FAQ honesty  
- `/google-map-optimization`, `/local-seo`, `/technical-seo`, `/seo-for-small-business`, WordPress/Shopify/Google Ads service depth  
- Contact funnel + VisibilityScanForm pattern  
- Portfolio screenshots for 4s Chemicals as raw evidence assets  
- Clear Pittsburgh positioning vs generic “national SEO” fluff  

### Need improvement
- Hub pages meta (`/services`, `/packages`, `/portfolio`, `/blog`)  
- Packages messaging vs home pricing  
- Schema coverage beyond home  
- Contact NAP completeness  
- Social proof authenticity  
- Internal link integrity  

### Thin
- All 3 blog articles  
- `/local-business-citation`, `/landing-page-optimization` relative to flagship services  
- Individual portfolio report pages (OK as support, not as ranking targets)  
- `/packages`, `/blog` index  

### Missing
- robots/sitemap/canonical/OG  
- Privacy/Terms  
- Real industry + area pages (links exist, pages don’t)  
- Verified reviews layer  
- Pittsburgh case study  

### Competing with each other
- `/` vs `/local-seo`  
- `/ppc-advertising` vs `/google-ads`  
- `/local-seo` vs `/seo-for-small-business` (manageable with clear angles)  
- Service pages vs thin root blogs on GBP/citations/reviews  

### Ready to rank?
**Not yet for sustained organic growth campaigns.**  
Foundation content is good enough to compete **after** Critical technical + trust fixes. Ranking is never guaranteed; this site’s ceiling rises sharply once 404s, sitemap/robots, proof honesty, and cannibalization are fixed.

### Must complete before active SEO campaigns begin
1. Eliminate 404 internal links  
2. Ship robots + sitemap + canonicals + unique hub metas  
3. Clean EEAT (reviews, stats, authors)  
4. Legal pages for lead forms  
5. Differentiate homepage vs `/local-seo` targeting  
6. Decide Packages pricing story  
7. Plan one real case study + 3 industry pages before large content pushes  

---

### Issue log format reminder (examples)

**Exact issue:** Homepage industries link to `/industries/law-firms` (404).  
**Affected:** `src/data/site-content.ts` industry `href`s; live `/`.  
**Why:** Soft-404s harm trust and crawl.  
**Severity:** Critical.  
**Fix:** Build page or change href to `/contact` or `/local-seo#industries`.  
**Impact:** Cleaner crawl graph; higher conversion trust.

**Exact issue:** No `/sitemap.xml`.  
**Affected:** Live site; missing `src/app/sitemap.ts`.  
**Severity:** Critical.  
**Fix:** Generate sitemap for all 200 URLs.  
**Impact:** Faster, more complete indexing.

---

*End of audit. No code changes were applied as part of this report.*
