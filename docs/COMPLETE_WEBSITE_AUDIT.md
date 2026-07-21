# COMPLETE ENTERPRISE WEBSITE AUDIT

**Site:** Local SEO Wiser (`https://localseowiser.com`)  
**Repository:** `localseo-main`  
**Audit date:** 2026-07-21  
**Auditor role:** Senior Technical SEO + Next.js + Performance + Accessibility + Code Review  
**Scope:** Full repository (read-only; no code changes)  
**Stack:** Next.js 15.5.19 App Router · React 19 · Bootstrap 5 · Sass · TypeScript  

### Methodology

| Method | Used |
|--------|------|
| App Router file inventory (`src/app`) | Yes |
| Data registries (services, locations, industries, blog, portfolio) | Yes |
| Metadata / schema builders (`src/lib/*-seo.ts`) | Yes |
| `robots.ts` / `sitemap.ts` / `next.config.ts` / `package.json` | Yes |
| Asset scan (`public/` ~252 files, ~89.5 MB) | Yes |
| Import / usage cross-checks | Yes (sampling + grep) |
| Live Lighthouse / Search Console / crawl of every rendered HTML DOM | **Not run** — fields that need a live crawl are marked `LIVE-CRAWL` |

### Status legend

| Status | Meaning |
|--------|---------|
| ✅ Pass | Meets launch bar |
| ⚠️ Warning | Should fix before or soon after launch |
| ❌ Error | Blocks or seriously risks launch / SEO / security |

### Severity legend

| Severity | Meaning |
|----------|---------|
| 🔴 Critical | Fix before launch |
| 🟠 High | Fix in first launch week |
| 🟡 Medium | Fix within 30 days |
| 🟢 Low | Backlog / polish |

### Executive summary

| Area | Score /100 | Verdict |
|------|------------|---------|
| SEO (on-page / content architecture) | 72 | Strong topical coverage; cannibalization + thin hub gaps |
| Technical SEO | 68 | Good sitemap/canonical system; `/areas` meta + stale redirects |
| Performance | 48 | Oversized images (~89 MB public); heavy CSS stack |
| Accessibility | 55 | Placeholder-only lead forms; empty alts |
| Security | 42 | No security headers / CSP; public Web3Forms key |
| Code quality | 70 | Clean (no console/TODO); oversized modules |
| Architecture | 74 | Solid App Router + data registries; unused `/areas/[slug]` |
| Content | 76 | Rich service/blog/location content; templated location copy |
| Internal linking | 71 | Good related-link helpers; footer Social column broken |
| Images | 40 | Many 1.8–2.9 MB WebPs; unused assets |
| Next.js | 65 | SSG-friendly; missing `not-found`/`error`/`middleware` |
| **Overall** | **64 / 100** | **Launch-capable with critical fixes first** |

---

# 1. WEBSITE STRUCTURE

## 1.1 Route inventory summary

| Category | Count | Pattern | Status |
|----------|------:|---------|--------|
| Home + hubs + legal | 12 | Static | ✅ |
| Services | 15 | `/[slug]` | ✅ |
| Locations | 13 | `/local-seo-{area}` dedicated pages | ✅ |
| Industries | 13 | `/local-seo-for-{industry}` | ✅ |
| Blog posts | 7 | `/blog/[slug]` | ✅ |
| Portfolio cases | 12 | `/portfolio/[slug]` | ✅ |
| Areas index | 1 | `/areas` | ⚠️ incomplete meta |
| Areas dynamic | 0 generated | `/areas/[slug]` exists but empty SSG | ⚠️ unused |
| Redirects | 5 | config + in-route | ⚠️ 3 stale |
| API routes | 0 | — | ✅ intentional |
| Middleware | 0 | — | ⚠️ |

**Approx. public HTML pages:** ~72 (+ `/robots.txt`, `/sitemap.xml`)

## 1.2 Complete URL map

### Hubs & legal

| URL | File | Notes |
|-----|------|-------|
| `/` | `src/app/page.tsx` | Home |
| `/about` | `src/app/about/page.tsx` | |
| `/services` | `src/app/services/page.tsx` | Services hub |
| `/contact` | `src/app/contact/page.tsx` | |
| `/faq` | `src/app/faq/page.tsx` | |
| `/blog` | `src/app/blog/page.tsx` | Blog index |
| `/portfolio` | `src/app/portfolio/page.tsx` | Portfolio hub |
| `/areas` | `src/app/areas/page.tsx` | Locations index |
| `/privacy-policy` | `src/app/privacy-policy/page.tsx` | |
| `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` | |
| `/refund-policy` | `src/app/refund-policy/page.tsx` | |
| `/business` | `src/app/(pages)/business/page.tsx` | **Redirects → `/`** |

### Services (`src/app/[slug]/page.tsx`)

| URL | Data source |
|-----|-------------|
| `/local-seo` | `service-page-seo.ts` |
| `/google-map-optimization` | `service-page-seo.ts` |
| `/seo-for-small-business` | `service-page-seo.ts` |
| `/technical-seo` | `service-page-seo.ts` |
| `/ppc-advertising` | `service-page-snap.ts` |
| `/google-ads` | `service-page-snap.ts` |
| `/content-writing` | `service-page-snap.ts` |
| `/social-media-marketing` | `service-page-snap.ts` |
| `/social-media-management` | `service-page-snap.ts` |
| `/web-design` | `service-page-snap.ts` |
| `/wordpress-development` | `service-page-snap.ts` |
| `/shopify-development` | `service-page-snap.ts` |
| `/link-building` | `service-page-snap.ts` |
| `/local-business-citation` | `service-page-snap.ts` |
| `/landing-page-optimization` | `service-page-snap.ts` |

### Locations (all published; custom root paths)

| URL |
|-----|
| `/local-seo-shadyside` |
| `/local-seo-lawrenceville` |
| `/local-seo-oakland` |
| `/local-seo-squirrel-hill` |
| `/local-seo-strip-district` |
| `/local-seo-north-shore` |
| `/local-seo-south-side` |
| `/local-seo-mt-lebanon` |
| `/local-seo-cranberry-township` |
| `/local-seo-monroeville` |
| `/local-seo-robinson-township` |
| `/local-seo-north-hills` |
| `/local-seo-south-hills` |

### Industries (all published)

| URL |
|-----|
| `/local-seo-for-dentists` |
| `/local-seo-for-doctors` |
| `/local-seo-for-lawyers` |
| `/local-seo-for-plumbers` |
| `/local-seo-for-hvac` |
| `/local-seo-for-electricians` |
| `/local-seo-for-roofers` |
| `/local-seo-for-restaurants` |
| `/local-seo-for-real-estate-agents` |
| `/local-seo-for-insurance-agencies` |
| `/local-seo-for-financial-advisors` |
| `/local-seo-for-accounting-firms` |
| `/local-seo-for-pest-control-companies` |

### Blog

| URL |
|-----|
| `/blog/what-is-local-seo` |
| `/blog/how-does-local-seo-work` |
| `/blog/google-business-profile-optimization` |
| `/blog/how-to-rank-higher-on-google-maps` |
| `/blog/local-seo-ranking-factors` |
| `/blog/local-seo-checklist` |
| `/blog/local-seo-audit` |

### Portfolio

| URL | Type |
|-----|------|
| `/portfolio/mbc-renovation` | Public |
| `/portfolio/fil-xpat-cleaning` | Public |
| `/portfolio/d-pet-care` | Public |
| `/portfolio/yara-luxe-interiors` | Public |
| `/portfolio/confidential-gsc-01` … `04` | Confidential |
| `/portfolio/confidential-gbp-01` … `04` | Confidential |

## 1.3 Structure issues

| Status | Severity | Problem | Why it matters | Affected | Recommended fix |
|--------|----------|---------|----------------|----------|-----------------|
| ❌ | 🟠 High | Stale redirects to deleted blog posts | Soft-404 risk / wasted crawl | `next.config.ts` → `/blog/google-business-profile-wins`, `/blog/local-citation-quality-vs-quantity`, `/blog/review-management-playbook` | Remove redirects or recreate posts |
| ⚠️ | 🟡 Medium | `/areas/[slug]` never generates pages | Dead route complexity | `src/app/areas/[slug]/page.tsx` | Remove route or migrate locations onto it |
| ⚠️ | 🟡 Medium | Mega-menu stubs point to `/services` | Thin UX / weak intent match | ecommerce / website-maintenance / reputation in `site-content.ts` | Build pages or remove menu items |
| ✅ | — | No slug conflict between services and location folders | Static wins over dynamic | App Router | Keep naming convention |
| ✅ | — | `/business` redirects to home | Avoids orphan theme page | `(pages)/business/page.tsx` | Keep |

---

# 2. PAGE INVENTORY

> **Note:** Titles/descriptions/canonicals/schemas verified from source. Word counts, exact H2/H3/link/image DOM counts marked `LIVE-CRAWL` where not measured from rendered HTML. Content volume assessed from data modules.

### Inventory — Hubs

| URL | Title | Meta Description | Canonical | Robots | OG | Twitter | Breadcrumb UI | Schema Types | H1 (source) | Main CTA | Target Keyword | Intent | Indexable | Status |
|-----|-------|------------------|-----------|--------|----|---------|---------------|--------------|-------------|----------|----------------|--------|-----------|--------|
| `/` | Local SEO Services Pittsburgh \| Local SEO Wiser | Grow… Local SEO Services in Pittsburgh… | `https://localseowiser.com` | index,follow | ✅ | ✅ | No | Organization, WebSite, ProfessionalService, FAQPage, BreadcrumbList | Hero H1 | WhatsApp / scan | local seo pittsburgh | Commercial | Yes | ⚠️ near-dupe `/local-seo` |
| `/about` | About Local SEO Wiser \| Our Local SEO Team | Meet the team… | `/about` | index,follow | ✅ | ✅ | No | AboutPage, Organization, BreadcrumbList, ImageObject | Hub H1 | WhatsApp | about local seo wiser | Navigational | Yes | ✅ |
| `/services` | (hub-seo) Services hub | Hub description | `/services` | index,follow | ✅ | ✅ | No | CollectionPage, ItemList, BreadcrumbList | Hub H1 | Consultation | seo services pittsburgh | Commercial | Yes | ✅ |
| `/contact` | Contact Local SEO Wiser \| Free Consultation | Contact… free consultation… | `/contact` | index,follow | ✅ | ✅ | Removed | ContactPage, Organization, BreadcrumbList | Hub H1 | Form / WhatsApp | contact local seo wiser | Transactional | Yes | ✅ |
| `/faq` | FAQ hub meta | FAQ | `/faq` | index,follow | ✅ | ✅ | Schema only | FAQPage, BreadcrumbList | FAQ H1 | Contact | local seo faq | Informational | Yes | ✅ |
| `/blog` | Blog index meta | Blog | `/blog` | index,follow | ✅ | ✅ | Schema only | CollectionPage, Blog, Organization, BreadcrumbList | Blog H1 | Read posts | local seo blog | Informational | Yes | ✅ |
| `/portfolio` | SEO Case Studies & Client Results \| Local SEO Wiser | Case studies… | `/portfolio` | index,follow | ✅ | ✅ | Schema only | CollectionPage, Organization, BreadcrumbList, ImageObject | Real Results for Local Businesses | WhatsApp | seo case studies | Commercial | Yes | ✅ |
| `/areas` | Local SEO Locations in Pittsburgh \| Areas We Serve | Explore… neighborhoods… | `/areas` | **omitted** | **Missing** | **Missing** | No | **None** | Serving the Entire Pittsburgh Metro | WhatsApp | local seo locations pittsburgh | Commercial | Likely yes | ❌ incomplete meta |
| `/privacy-policy` | Legal meta | Legal | path | index,follow | ✅ | ✅ | Schema | WebPage, BreadcrumbList | Policy H1 | — | privacy policy | Navigational | Yes | ✅ |
| `/terms-and-conditions` | Legal meta | Legal | path | index,follow | ✅ | ✅ | Schema | WebPage, BreadcrumbList | Terms H1 | — | terms | Navigational | Yes | ✅ |
| `/refund-policy` | Legal meta | Legal | path | index,follow | ✅ | ✅ | Schema | WebPage, BreadcrumbList | Refund H1 | — | refund policy | Navigational | Yes | ✅ |

### Inventory — Services (pattern)

| Field | Pattern (all 15) | Status |
|-------|------------------|--------|
| Title | `metaTitle` from data (absolute) | ✅ |
| Meta | `metaDescription` | ✅ |
| Canonical | `https://localseowiser.com/{slug}` | ✅ |
| Robots | index, follow | ✅ |
| OG / Twitter | Built in `buildServicePageMetadata` | ✅ |
| Breadcrumb UI | None (schema BreadcrumbList) | ⚠️ UX |
| Schema | Service, BreadcrumbList, ImageObject, FAQPage? | ✅ |
| CTA | Free consultation / WhatsApp / phone | ✅ |
| Intent | Commercial | ✅ |
| Word count | Long-form snap/seo modules (typically 1500–4000+ words source) | ✅ generally thick |

| URL | Primary Title (source) | Primary Keyword |
|-----|------------------------|-----------------|
| `/local-seo` | Local SEO Services Pittsburgh \| More Calls & Local Leads | local seo services pittsburgh |
| `/google-map-optimization` | Google Map Optimization Pittsburgh \| Rank Higher on Maps | google map optimization pittsburgh |
| `/seo-for-small-business` | SEO for Small Businesses Pittsburgh \| Affordable SEO Services | seo for small business pittsburgh |
| `/technical-seo` | Technical SEO Services Pittsburgh \| Fix & Improve Rankings | technical seo pittsburgh |
| `/ppc-advertising` | (snap metaTitle) | ppc advertising pittsburgh |
| `/google-ads` | (snap metaTitle) | google ads pittsburgh |
| `/content-writing` | (snap metaTitle) | content writing pittsburgh |
| `/social-media-marketing` | (snap metaTitle) | social media marketing pittsburgh |
| `/social-media-management` | (snap metaTitle) | social media management pittsburgh |
| `/web-design` | (snap metaTitle) | web design pittsburgh |
| `/wordpress-development` | (snap metaTitle) | wordpress development pittsburgh |
| `/shopify-development` | (snap metaTitle) | shopify development pittsburgh |
| `/link-building` | (snap metaTitle) | link building pittsburgh |
| `/local-business-citation` | (snap metaTitle) | local business citations pittsburgh |
| `/landing-page-optimization` | (snap metaTitle) | landing page optimization pittsburgh |

### Inventory — Locations (pattern × 13)

| Field | Pattern | Status |
|-------|---------|--------|
| Title | Unique per area (`metaTitle`) | ✅ / ⚠️ formulaic suffixes |
| Canonical | Custom path | ✅ |
| Robots | index/follow (preview → noindex) | ✅ |
| OG | Present if hero image set | ✅ |
| Breadcrumb UI | **Removed** | Schema BreadcrumbList remains |
| Schema | BreadcrumbList, WebPage, FAQ?, ImageObject?, LocalBusiness + ProfessionalService | ⚠️ `url` often homepage |
| CTA | Contact / Local SEO services | ✅ |
| Intent | Commercial + local | ✅ |
| Content | Substantial but templated | ⚠️ |

### Inventory — Industries (pattern × 13)

Same metadata/schema pattern via `industry-seo.ts` + entity types (Dentist, Attorney, etc.). Intent: commercial. Indexable: yes.

### Inventory — Blog (pattern × 7)

| Field | Pattern | Status |
|-------|---------|--------|
| Title | `seoTitle` or `{title} \| LocalSeoWiser` | ⚠️ brand inconsistency |
| OG type | `article` | ✅ |
| Schema | Organization, BreadcrumbList, Article, FAQ? | ✅ |
| Draft | All `draft: false` | ✅ |
| Intent | Informational | ✅ |

### Inventory — Portfolio (pattern × 12)

| Field | Pattern | Status |
|-------|---------|--------|
| Title | `metaTitle` | ✅ |
| Robots | **Omitted** on case studies | ⚠️ |
| Schema | BreadcrumbList, WebPage, CreativeWork | ✅ |
| Confidential | 8 of 12 anonymized | ✅ intentional |

### Cross-cutting inventory fields (LIVE-CRAWL required for exacts)

| Field | Repo finding | Live action needed |
|-------|--------------|--------------------|
| Word count | Data modules exist for all published URLs | Crawl + count |
| H2/H3 counts | SectionHeader + card titles; global H1/H2/H3 CSS scale set | DOM audit |
| Internal/external link counts | Nav/footer/related helpers present | Screaming Frog |
| Images / alt coverage | Mixed; empty alts in heroes/menus | Page-level crawl |
| Reading time | Blog likely has logic; hubs vary | Verify blog UI |
| Search intent | Mapped above by type | — |

---

# 3. KEYWORD MAPPING

| URL | Primary Keyword | Secondary | Intent | Competition | KD (est.) | Cannibalization risk | Related pages | Duplicate targeting | Missing opportunities |
|-----|-----------------|-----------|--------|-------------|-----------|----------------------|---------------|---------------------|------------------------|
| `/` | local seo pittsburgh | local seo services, google maps | Commercial | High | High | 🔴 vs `/local-seo` | `/local-seo`, `/areas`, blog | Near-identical title theme | Brand SERP differentiation |
| `/local-seo` | local seo services pittsburgh | map pack, gbp | Commercial | High | High | 🔴 vs `/` | locations, industries | Same core phrase | Unique angle / proof-led title |
| `/google-map-optimization` | google map optimization pittsburgh | google maps seo | Commercial | Med | Med | 🟡 vs blog Maps posts | `/local-seo`, GBP blog | Soft overlap with “rank google maps” | Keep service ≠ guide |
| `/areas` | local seo locations pittsburgh | areas we serve | Commercial | Med | Med | 🟢 | 13 location URLs | — | Add “near me” / suburb clusters |
| `/local-seo-{area}` | local seo {area} | local seo pittsburgh {area} | Local commercial | Med | Med–High | 🟡 between areas (template) | `/local-seo`, nearby areas | Shared suffixes | Unique NAP/proof per area |
| `/local-seo-for-{industry}` | local seo for {industry} | {industry} seo pittsburgh | Commercial | Med | Med | 🟢 vs `/local-seo` | `/local-seo`, related areas | — | City+industry combos |
| `/blog/what-is-local-seo` | what is local seo | local seo guide | Informational | High | Med | 🟢 (intent differ) | `/local-seo` | — | Update freshness |
| `/blog/how-to-rank-higher-on-google-maps` | how to rank higher on google maps | map pack tips | Informational | High | Med | 🟡 vs `/google-map-optimization` | GMP service | Same topic, different intent | Clarify in titles |
| `/portfolio` | seo case studies | local seo results | Commercial | Med | Low–Med | 🟢 | case studies | — | Pittsburgh-specific proof pages |
| `/contact` | contact local seo wiser | free consultation | Transactional | Low | Low | 🟢 | — | — | — |
| `/shopify-development` | shopify development pittsburgh | shopify store | Commercial | Med | Med | 🟢 | web design, wordpress | — | Shopify + local SEO bundle page |
| `/ppc-advertising` vs `/google-ads` | ppc / google ads | paid search | Commercial | Med | Med | 🟠 High between pair | each other | Overlapping paid intent | Merge or differentiate hard |

### Cannibalization flags

| Severity | Pair | Problem | Fix |
|----------|------|---------|-----|
| 🔴 Critical | `/` vs `/local-seo` | Same primary keyword family in titles | Differentiate home brand + `/local-seo` product title |
| 🟠 High | `/ppc-advertising` vs `/google-ads` | Parallel paid-search pages | One pillar + one supporting, or clear split |
| 🟡 Medium | GMP service vs Maps blog posts | Same topic, mixed SERP | Align titles by intent (service vs how-to) |
| 🟡 Medium | Location pages | Formulaic titles share suffixes | Unique proof / neighborhood entities |

---

# 4. META TAG AUDIT

| Check | Status | Severity | Problem | Why it matters | Affected | Fix |
|-------|--------|----------|---------|----------------|----------|-----|
| Titles present | ✅ mostly | — | — | CTR / ranking | Most pages | — |
| `/areas` missing OG/Twitter/robots | ❌ | 🟠 High | Incomplete metadata | Weak social + unclear index signals | `areas/page.tsx` | Use `buildHubPageMetadata` |
| Portfolio case `robots` omitted | ⚠️ | 🟡 Medium | Relies on defaults | Explicit control better | `portfolio-seo.ts` | Add robots |
| Home vs `/local-seo` near-dupe titles | ❌ | 🔴 Critical | SERP competition | Dilutes rankings | `page.tsx`, `service-page-seo.ts` | Rewrite one title set |
| Brand suffix inconsistent | ⚠️ | 🟡 Medium | `Local SEO Wiser` vs `LocalSeoWiser` | Brand SERP trust | Blog/portfolio | Standardize `SITE_NAME` |
| Title length | ⚠️ | 🟢 Low | Some long absolute titles | Truncation in SERPs | Services/locations | Aim 50–60 chars visible |
| Meta length | ⚠️ | 🟢 Low | Some long descriptions | Truncation | Various | Aim ~150–160 chars |
| Keyword stuffing | ✅ generally | — | Natural Pittsburgh usage | — | — | Monitor density |
| CTR optimization | ⚠️ | 🟡 Medium | Benefit-led but repetitive | Lower CTR | Locations | Add unique proof digits |
| Best practice score | **68/100** | — | Gaps above | — | — | Fix critical/high |

---

# 5. HEADING AUDIT

| Check | Status | Severity | Notes |
|-------|--------|----------|-------|
| Global H1/H2/H3 scale | ✅ intentional | — | Matched to snap service pages (`$h1/$h2/$h3` in `_variables.scss`) |
| Single H1 pattern | ⚠️ | 🟡 Medium | Most pages use one H1; card sections sometimes use `h2`/`h3` for UI | LIVE-CRAWL verify |
| Feature cards as `h2` | ⚠️ | 🟡 Medium | Areas/portfolio feature titles are `h2` → can inflate H2 count / hierarchy noise | Prefer `p`/`span` or `h3` under section H2 |
| Skipped levels | ⚠️ possible | 🟡 Medium | Section H2 then card H3 generally OK; verify Locations | LIVE-CRAWL |
| Duplicate headings across location set | ⚠️ | 🟡 Medium | Shared section titles (“Why Local SEO Matters”) | Unique H2 where possible |
| SEO optimization | ✅ | — | Primary keyword often in H1 | Keep |

| Issue | Severity | Problem | Why | Files | Fix |
|-------|----------|---------|-----|-------|-----|
| Global `h2 !important` blew Areas feature titles | Was 🔴; mitigated | Features used `h2` + global size | Layout bleed into image | `_inner-pages.scss` areas-hub | Keep `1rem !important` override; prefer non-heading tags |
| Multiple conceptual H1 risk on complex service pages | 🟡 | Snap layouts are dense | Accessibility + SEO | `ServiceDetailSnap.tsx` | Ensure only hero is H1 |

---

# 6. SCHEMA AUDIT

## 6.1 By page type

| Page type | Present types | Missing / weak | Invalid risks | Nested OK | Google eligible | Notes |
|-----------|---------------|----------------|---------------|-----------|-----------------|-------|
| Home | Organization, WebSite(+SearchAction), ProfessionalService, FAQPage, BreadcrumbList | LocalBusiness optional | SearchAction → `/blog?q=` may not work | OK | Mostly | Verify blog search |
| Service | Service, BreadcrumbList, ImageObject, FAQ? | Review/AggregateRating gated empty | — | OK | Yes | |
| Location | BreadcrumbList, WebPage, FAQ?, ImageObject?, LocalBusiness, ProfessionalService | Stronger page `url` | `url: SITE_ORIGIN` (homepage) | OK | Partial | Fix entity URL |
| Industry | Organization, Service, ProfessionalService, entity types, BreadcrumbList, WebPage… | Industries hub CollectionPage | Mid-crumb → `/local-seo` | OK | Yes | |
| Blog post | Organization, BreadcrumbList, Article, FAQ? | — | — | OK | Yes | |
| Portfolio case | BreadcrumbList, WebPage, CreativeWork | Review | — | OK | Yes | |
| `/areas` | **None** | All | — | — | No | Add CollectionPage + BreadcrumbList |
| Contact | ContactPage, Organization, BreadcrumbList | LocalBusiness optional | — | OK | Yes | |
| About | AboutPage, Organization, BreadcrumbList, ImageObject | — | — | OK | Yes | |

## 6.2 Schema issues

| Status | Severity | Problem | Why | Affected | Fix |
|--------|----------|---------|-----|----------|-----|
| ❌ | 🟠 High | Location business schema `url` points to homepage | Confuses entity ↔ page | `location-seo.ts` builders | Set `url` to page canonical |
| ❌ | 🟠 High | `/areas` has zero JSON-LD | Hub untyped | `areas/page.tsx` | Add CollectionPage + ItemList |
| ⚠️ | 🟡 Medium | Visible breadcrumbs removed; schema remains | OK for SEO; UX mismatch | Location/Industry views | Optional UI restore |
| ⚠️ | 🟡 Medium | `buildLocationBusinessSchema` unused | Dead code / dual LocalBusiness+ProfessionalService | `location-seo.ts` | Consolidate |
| ⚠️ | 🟡 Medium | WebSite SearchAction may 404/no-op | Invalid SearchAction | `HomePageSchema.tsx` | Point to real search or remove |
| ✅ | — | AggregateRating only if verified reviews | Avoids fake review schema | location-seo | Keep |

---

# 7. INTERNAL LINKING AUDIT

| Area | Status | Severity | Finding |
|------|--------|----------|---------|
| Primary nav | ✅ | — | About, Services mega, Areas, Portfolio, Blog, Contact |
| Footer Services | ⚠️ | 🟠 High | Content & Social column **broken** — looks up `social-media`, data uses `content-social` (`SiteFooter.tsx` / `site-content.ts`) |
| Related services | ✅ | — | `getRelatedServicePages` (max 3) |
| Location nearby + services | ✅ | — | `buildLocationInternalLinks` |
| Industry → areas | ✅ | — | Reuses location helper |
| Blog related | ✅ | — | `getRelatedBlogPosts` |
| Portfolio → services | ✅ | — | `relatedServiceLinks` |
| Orphan risk | ⚠️ | 🟡 Medium | Confidential portfolio + deep locations need hub/filter links | Ensure cards link from `/portfolio`, `/areas` |
| Crawl depth | ✅ | — | Most pages ≤ 2–3 clicks from home |
| Anchor text | ⚠️ | 🟡 Medium | Many “View Case Study” / “Learn more” generics | Prefer keyword-rich anchors in body copy |
| Broken internal (config) | ❌ | 🟠 High | 3 redirects to missing blog URLs | Remove/recreate |
| Industries hub page | ❌ | 🟡 Medium | No `/industries` index; nav may rely on mega/elsewhere | Add hub or link from services |

### Linking recommendations

1. Fix footer `content-social` id mismatch (quick win).  
2. Add contextual links from blog guides → matching services/locations.  
3. Create `/industries` CollectionPage hub.  
4. Ensure every location appears on `/areas` cards (already intended).  
5. Differentiate home ↔ `/local-seo` with distinct CTAs and internal link targets.

---

# 8. EXTERNAL LINK AUDIT

| Destination pattern | Purpose | Follow | New tab | noopener/noreferrer | Status |
|---------------------|---------|--------|---------|---------------------|--------|
| `https://wa.me/14126637288` | Primary CTA | follow | yes | usually yes | ✅ |
| `tel:+14126637288` | Call CTA | n/a | no | n/a | ✅ |
| `mailto:info@localseowiser.com` | Email | n/a | varies | n/a | ✅ |
| `https://api.web3forms.com/submit` | Form API | n/a | n/a | fetch | ⚠️ public key |
| Google Maps embed | Map | iframe | n/a | referrerpolicy set | ✅ |
| Social profiles (`footerSocialLinks` / top bar) | Brand | follow | yes | should have | LIVE-CRAWL verify all |
| Client live sites (portfolio) | Proof | follow | yes | should have | Verify `rel` |
| Google fonts (Rethink Sans) via CSS `@import` | Typography | — | — | — | ⚠️ perf |

| Issue | Severity | Problem | Fix |
|-------|----------|---------|-----|
| 🟡 | Social/external `rel` consistency | Mixed attributes | Standardize `noopener noreferrer` |
| 🟡 | Fonts via CSS import | Render-blocking | `next/font` self-host |
| 🟢 | No sponsored/ugc needed today | — | Add if paid placements appear |

**Full enumerated external href dump:** Requires LIVE-CRAWL of built HTML (not executed in this audit). Source-known externals listed above.

---

# 9. IMAGE AUDIT

## 9.1 Inventory summary

| Metric | Value |
|--------|------:|
| Files in `public/` | 252 |
| Total size | ~89.5 MB |
| WebP | 198 |
| PNG | 42 |
| JPG | 5 |
| SVG | 6 |
| ICO | 1 |

## 9.2 Critical oversized images (🔴 / 🟠)

| File | ~Size | Severity | Problem | Fix |
|------|------:|----------|---------|-----|
| `public/images/industries/local-seo-for-roofing-companies.webp` | 2.8 MB | 🔴 | LCP killer | Compress ≤200–300 KB |
| `public/pittsburgh-skyline-hero.jpg` | 2.7 MB | 🔴 | Used on Areas + Portfolio heroes | Convert WebP/AVIF ≤250 KB |
| `public/images/industries/pest-control-business-growth.webp` | 2.4 MB | 🔴 | Oversized | Compress |
| Many industry WebPs | 1.8–2.1 MB | 🟠 | Deploy + CWV | Batch compress + responsive `sizes` |

## 9.3 Unused / orphan candidates (⚠️ 🟡–🟠)

Not referenced under `src` (sample): Create-Next-App SVGs (`next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg`); `tech1.png`, `tech2.png`, `googlemap1.png`, `googlemap2.png`; some team/cofounder assets; `lseo-hero-stage-ref.png`; duplicate industry WebPs; unused favicon variants (`favicon-16.png`, `favicon-pin.png`, `icon-512.png`).

## 9.4 Format / loading

| Check | Status | Notes |
|-------|--------|-------|
| WebP adoption | ✅ majority | Still huge files |
| AVIF | ❌ | Not used |
| Lazy load | ⚠️ | Next/Image often; raw `<img>` in portfolio cards |
| Priority heroes | ✅ some | Verify LCP image has `priority` |
| Alt text | ⚠️ | Empty alts in `LocationPageView`, mega-menu, some service heroes |
| Duplicate images | ⚠️ | Transparent + non-transparent snap/gmp pairs |
| Responsive | ⚠️ | `sizes` inconsistent |

| Issue | Severity | Problem | Why | Files | Fix |
|-------|----------|---------|-----|-------|-----|
| Oversized industry assets | 🔴 | Multi-MB “WebP” | CWV fail | `public/images/industries/*` | Re-encode |
| Empty decorative vs content alts | 🟠 | Screen readers / SEO | A11y | Location/service components | Write meaningful alts |
| Raw portfolio `<img>` | 🟡 | Miss Next optimizer | Perf | `PortfolioCard.tsx` | Use `next/image` |

---

# 10. MEDIA AUDIT

| Asset class | Finding | Severity | Action |
|-------------|---------|----------|--------|
| Videos | None in `public/` | ✅ | — |
| Unused SVGs | Create-Next-App leftovers | 🟢 | Delete |
| Unused icons | Extra favicon PNGs | 🟢 | Delete |
| Logos | Multiple logo variants | 🟡 | Consolidate |
| Duplicate assets | Hero transparent pairs | 🟡 | Keep one |
| Large files | See §9 | 🔴 | Compress |
| Scratch media | `tmp-*.png`, `tmp-snaps/` | 🟠 | Delete; gitignore |
| Build junk | `.next-packages-removal/` (~206 MB) | 🔴 | Delete; never commit |

---

# 11. PERFORMANCE AUDIT

| Area | Status | Severity | Finding | Fix |
|------|--------|----------|---------|-----|
| LCP | ❌ | 🔴 | Multi-MB heroes | Compress + priority + dimensions |
| CLS | ⚠️ | 🟠 | Images without reserved space (raw img) | Always width/height or Next Image |
| INP | ⚠️ | 🟡 | 51 client components; Iconify runtime | Reduce client islands |
| Bundle / CSS | ⚠️ | 🟠 | Full Bootstrap + large SCSS | Purge unused Bootstrap / modularize |
| Code splitting | ⚠️ | 🟡 | Heavy `ServiceDetailSections.tsx` (1445 lines) | Split layouts |
| Dynamic imports | ⚠️ limited | 🟡 | Opportunity for Swiper/forms | `next/dynamic` |
| Fonts | ⚠️ | 🟠 | Google Fonts CSS `@import` in `_variables.scss` | `next/font` |
| Caching | ✅ default Next | — | Vercel/CDN assumed | Confirm production headers |
| Preload/prefetch | ⚠️ | 🟡 | Limited explicit preloads | Preload LCP image |
| RSC vs client | ⚠️ | 🟡 | 51 `'use client'` files | Push forms/carousels only |
| Hydration | ✅ no console | — | No known hydration logs in src | Monitor prod |
| Suspense/streaming | ⚠️ | 🟢 | Minimal loading UI | Add `loading.tsx` |

**Largest source modules:** `_inner-pages.scss` (~132 KB), `service-page-snap.ts` (~104 KB), `ServiceDetailSections.tsx` (~65 KB).

---

# 12. NEXT.JS AUDIT

| Feature | Status | Severity | Notes |
|---------|--------|----------|-------|
| App Router | ✅ | — | Used throughout |
| Metadata API | ✅ | — | Most pages |
| `generateMetadata` | ✅ | — | Dynamic content types |
| `generateStaticParams` | ✅ | — | services, blog (`dynamicParams:false`), portfolio, areas |
| ISR `revalidate` | ❌ unused | 🟢 | Optional for freshness |
| SSG default | ✅ | — | Good for SEO site |
| SSR forced | ❌ none | — | OK |
| Middleware | ❌ missing | 🟡 | Headers/redirects opportunity |
| `loading.tsx` | ❌ | 🟡 | UX |
| `error.tsx` / `global-error` | ❌ | 🟠 | Resilience |
| `not-found.tsx` | ❌ | 🟠 | Branded 404 |
| Route groups | ✅ `(pages)` | — | `/business` redirect only |
| API routes | ❌ none | — | Forms via Web3Forms client |
| Edge | ❌ | 🟢 | Not required |
| `dynamicParams` | ⚠️ | 🟡 | Services/portfolio default `true` → unknown slugs runtime 404 | Prefer `false` for strict SSG |
| Redirects | ⚠️ | 🟠 | Stale blog redirects | Clean |
| Best practices score | **65/100** | — | | |

---

# 13. CODE QUALITY

| Check | Result | Severity |
|-------|--------|----------|
| `console.log` in `src` | **0** | ✅ |
| `TODO` / `FIXME` in `src` | **0** | ✅ |
| `'use client'` files | **51** | 🟡 |
| Files >500 lines | Multiple (snap data, ServiceDetailSections, blog modules, LocationPageView) | 🟠 |
| Unused dependency `gumshoejs` | Declared, appears unused | 🟡 |
| `prettier` in `dependencies` | Should be devDependency | 🟢 |
| Duplicate layout logic | Service full vs snap vs technical vs gmp | 🟡 |
| Dead exports | `homeAreasServed`, unused schema builder | 🟢 |
| Footer category bug | `social-media` ≠ `content-social` | 🟠 |
| Debug logs | None found | ✅ |

| Issue | Severity | Problem | Fix |
|-------|----------|---------|-----|
| Monolithic `service-page-snap.ts` | 🟠 | Hard to review / ship | Split per service file |
| `ServiceDetailSections.tsx` size | 🟠 | Cognitive load | Extract snap/gmp/technical already partial — finish split |
| Unused `gumshoejs` | 🟡 | Bundle noise | Remove package |

---

# 14. FOLDER STRUCTURE

| Path | Verdict | Severity | Action |
|------|---------|----------|--------|
| `src/app` | ✅ clear hubs + dynamic | — | Keep |
| `src/data/*` | ✅ registries | — | Keep |
| `src/lib/*-seo.ts` | ✅ | — | Keep |
| `src/components` | ✅ | — | Keep |
| `public/images/*` | ⚠️ bloated | 🟠 | Compress + purge unused |
| `.next-packages-removal/` | ❌ junk | 🔴 | Delete |
| `tmp-snaps/`, `tmp-*.png` | ❌ junk | 🟠 | Delete + gitignore |
| `scripts/` | ✅ tooling | — | Keep |
| Naming | ⚠️ `globle.d.ts` typo | 🟢 | Rename |
| Scalability | ✅ data-driven pages | — | Add industries hub |

**Architecture quality:** Good for an SEO agency site; content growth is file-based and clear.

---

# 15. SEO CONTENT AUDIT

| Page class | Length | Thin risk | Duplicate risk | E-E-A-T | FAQs | CTAs | Trust | Score |
|------------|--------|-----------|----------------|---------|------|------|-------|-------|
| Home | Medium | Low | High vs `/local-seo` | Medium | ✅ | ✅ | Medium | 70 |
| Service snap/seo | Long | Low | Low–Med | Medium–High | Often ✅ | ✅ | Process/proof | 80 |
| Locations | Long but templated | Med | High similarity | Med | Often ✅ | ✅ | Local entities weak | 65 |
| Industries | Long | Low | Med template | Med | ✅ | ✅ | Entity schema helps | 75 |
| Blog | Very long | Low | Low | High informational | Often ✅ | ✅ | Strong | 85 |
| Portfolio | Medium | Low public / thin confidential | Med confidential sameness | High proof | — | ✅ | Strong for public | 78 |
| `/areas` | Medium | Med | — | Med | No | ✅ | Map + cards | 60 |
| Legal | Adequate | — | — | — | — | — | — | 70 |

| Issue | Severity | Problem | Fix |
|-------|----------|---------|-----|
| Location template sameness | 🟠 | Soft duplicate content | Unique proof, photos, neighborhood entities |
| Home/service overlap | 🔴 | Cannibalization | Distinct home narrative |
| Missing industries hub content | 🟡 | Topic cluster incomplete | Add `/industries` |

---

# 16. BLOG AUDIT

| Check | Status | Notes |
|-------|--------|-------|
| Published posts | 7 | All `draft: false` |
| Draft posts | 0 | ✅ |
| Categories | Present in cards | ✅ |
| Tags | Limited / verify | 🟡 |
| Author | Schema/org level | ⚠️ add Person author |
| Dates | `publishedDate` used | ✅ |
| Featured images | Under `public/images/blog` | ✅ |
| TOC | Present in article layout | ✅ |
| Related articles | Helper exists | ✅ |
| Canonical | `/blog/{slug}` | ✅ |
| Schema Article | ✅ | |
| Reading time | Verify UI | LIVE-CRAWL |
| Stale redirects to old posts | ❌ | Config issue |

---

# 17. LOCAL SEO AUDIT

| Signal | Value / finding | Status | Severity |
|--------|-----------------|--------|----------|
| Phone US | `+1 412 663 7288` | ✅ consistent in `site-content` | — |
| Phone UK | `+44 7454 758272` | ✅ secondary | — |
| Email | `info@localseowiser.com` | ✅ | — |
| Address full | `307 Freeland St, Pittsburgh, PA 15210` in `contactInfo.location` | ⚠️ | 🟡 vs short “Pittsburgh, PA” elsewhere |
| Top bar location | `Pittsburgh, PA` | ⚠️ NAP inconsistency | 🟡 |
| Maps embed | Official Local Seo Wiser place embed | ✅ | — |
| LocalBusiness schema | On location pages | ⚠️ url→home | 🟠 |
| Service areas | 13 location pages + `/areas` | ✅ | — |
| GBP references | Content + portfolio GBP cases | ✅ | — |
| Geo coordinates | In map embed pb params | ⚠️ not explicit schema geo | 🟡 |
| Business hours | Not consistently published | ⚠️ | 🟡 |
| Citations | Service page exists | ✅ | — |

| Issue | Severity | Problem | Fix |
|-------|----------|---------|-----|
| NAP variance | 🟠 | Full street vs city-only | Pick one public NAP; sync footer/contact/schema |
| Schema geo/hours | 🟡 | Incomplete local entity | Add OpeningHoursSpecification + geo |

---

# 18. ACCESSIBILITY AUDIT

| Check | Status | Severity | Evidence |
|-------|--------|----------|----------|
| Form labels | ❌ | 🔴 | `LocalSeoConsultationForm`, `VisibilityScanForm` placeholder-only |
| Contact form labels | ✅ | — | `ContactReviewForm` |
| Alt text | ⚠️ | 🟠 | Empty alts in location hero/logos, mega-menu |
| Keyboard / focus | ⚠️ | 🟡 | Bootstrap defaults; LIVE-CRAWL |
| Contrast | ⚠️ | 🟡 | Orange on white generally OK; verify gray text | LIVE-CRAWL |
| Heading order | ⚠️ | 🟡 | Feature `h2`s | See §5 |
| ARIA | Partial | 🟡 | Some `aria-label` on toolbars | Expand |
| Buttons vs links | Mostly ✅ | 🟢 | |
| Flag emoji in phone labels | ⚠️ | 🟢 | SR noise |

---

# 19. SECURITY AUDIT

| Check | Status | Severity | Notes |
|-------|--------|----------|-------|
| Security headers (CSP, HSTS, XFO, Referrer-Policy) | ❌ | 🔴 | Absent in `next.config.ts` / `vercel.json` |
| Secrets in repo | ✅ `.env*` gitignored | — | Ensure `.env.local` never committed |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | ⚠️ | 🟠 | Public by design → spam abuse | Server route + rate limit |
| XSS | ⚠️ | 🟡 | JSON-LD via `dangerouslySetInnerHTML` + `JSON.stringify` (controlled) | Keep data trusted |
| CSRF | ⚠️ | 🟡 | Third-party form endpoint | Honeypot/server proxy |
| Open redirects | ✅ | — | Controlled redirects list |
| Auth | N/A | — | Marketing site |
| Cookies | Minimal | — | Verify analytics if added |
| Rate limiting | ❌ | 🟠 | Forms | Add |
| Sensitive data | ✅ | — | No passwords in src |

---

# 20. TECHNICAL SEO

| Check | Status | Severity | Notes |
|-------|--------|----------|-------|
| `robots.ts` | ✅ allow all + sitemap | 🟢 consider disallow tmp if any public | |
| `sitemap.ts` | ✅ hubs+services+blog+portfolio+locations+industries+/areas | ✅ | |
| Canonicals | ✅ most pages | 🟠 `/areas` incomplete social | |
| Indexability | ✅ published only | ✅ drafts noindex | |
| Pagination | N/A | — | |
| Trailing slash | Default Next | LIVE-CRAWL consistency | |
| Soft 404 | ❌ risk | 🟠 | Stale blog redirects |
| 404 branded page | ❌ | 🟠 | Add `not-found.tsx` |
| Redirect chains | ⚠️ | 🟡 | Root blog slug → `/blog/slug` (intentional) |
| hreflang | ❌ | 🟢 | Single locale OK |
| OpenGraph | ⚠️ | 🟠 | Missing on `/areas` |
| Structured data | ⚠️ | 🟠 | Gaps §6 |
| Core Web Vitals | ❌ risk | 🔴 | Image weight |
| URL structure | ✅ descriptive | — | |
| Duplicate URLs | ⚠️ | 🟡 | `/business`→`/`; legacy blog aliases | |

---

# 21. REPOSITORY CLEANUP

### Safe to delete (cleanup checklist)

| Item | Severity | Safe? |
|------|----------|-------|
| `.next-packages-removal/` | 🔴 | Yes |
| `tmp-snaps/` | 🟠 | Yes |
| Root `tmp-*.png` | 🟠 | Yes |
| `public/next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg` | 🟢 | Yes if unused |
| Unused industry/tech PNGs listed in §9 | 🟡 | Confirm then delete |
| Package `gumshoejs` | 🟡 | Yes if unused |
| Move `prettier` to `devDependencies` | 🟢 | Yes |

### Add to `.gitignore`

```
.tmp*
tmp-*.png
tmp-snaps/
.next-packages-removal/
```

### Unused dependencies / scripts

| Item | Action |
|------|--------|
| `gumshoejs` | Remove |
| Scratch scripts under `scripts/` if one-off | Archive or keep documented |

---

# 22. DEPENDENCY AUDIT

| Package | Role | Risk | Recommendation |
|---------|------|------|----------------|
| `next@15.5.19` | Framework | ✅ current pin | Keep updated |
| `react@19.2.1` | UI | ✅ | Keep |
| `bootstrap` + `react-bootstrap` | Layout | 🟠 heavy CSS | Tree-shake / replace over time |
| `@iconify/react` | Icons | 🟠 runtime weight | Bundle subset / SVG sprites |
| `swiper` | Carousels | 🟡 | Dynamic import |
| `sass` | Styles | 🟡 legacy deprecations silenced | Migrate off deprecated APIs |
| `gumshoejs` | — | 🟡 unused | Remove |
| `prettier` | Format | 🟢 wrong dep type | Move to devDependencies |
| `react-countup` | Animation | 🟢 | Keep if used |
| `clsx` | Classnames | ✅ | Keep |
| `eslint-config-next` | Lint | ✅ | Keep |

**Security advisories:** Not live-queried (`npm audit` not run in this pass). **Action:** run `npm audit` before launch.

---

# 23. FINAL SCORE

| Category | Score /100 | Rationale |
|----------|------------|-----------|
| SEO | 72 | Strong pages; cannibalization + meta gaps |
| Technical SEO | 68 | Solid plumbing; `/areas`, redirects, 404 |
| Performance | 48 | Image weight dominates |
| Accessibility | 55 | Forms + alts |
| Security | 42 | No headers; public form key |
| Code quality | 70 | Clean habits; large files |
| Architecture | 74 | Good registries; unused route |
| Content | 76 | Thick services/blog; templated locations |
| Internal linking | 71 | Footer bug; missing industries hub |
| Images | 40 | Size + orphans |
| Next.js | 65 | Missing error/404/middleware |
| **Overall** | **64** | **Conditional go-live** |

---

# 24. PRIORITY ACTION PLAN

## Top 10 Critical / High issues

| # | Severity | Issue | Impact | Effort |
|---|----------|-------|--------|--------|
| 1 | 🔴 | Compress multi-MB heroes/industry images | CWV / SEO | Medium |
| 2 | 🔴 | Differentiate `/` vs `/local-seo` titles/intent | Rankings | Small |
| 3 | 🔴 | Add security headers (CSP, HSTS, XFO, Referrer-Policy) | Security | Small |
| 4 | 🔴 | Label lead-gen form fields (a11y + conversion) | A11y / UX | Small |
| 5 | 🟠 | Fix `/areas` metadata + JSON-LD | Technical SEO | Small |
| 6 | 🟠 | Remove/fix stale blog redirects | Crawl health | Small |
| 7 | 🟠 | Fix footer `content-social` id bug | Internal links | Tiny |
| 8 | 🟠 | NAP consistency (street vs city-only) | Local SEO | Small |
| 9 | 🟠 | Location schema `url` → page canonical | Local SEO | Small |
| 10 | 🟠 | Delete `.next-packages-removal` + tmp assets | Repo / deploy | Tiny |

## Top 20 improvements

1. Image compression pipeline  
2. Home vs Local SEO differentiation  
3. Security headers  
4. Form labels + honeypot/server proxy  
5. `/areas` hub SEO  
6. Stale redirects cleanup  
7. Footer social category fix  
8. NAP + OpeningHours + geo schema  
9. Location entity URL fix  
10. Repo junk purge + gitignore  
11. Branded `not-found.tsx` / `error.tsx`  
12. `next/font` for Rethink Sans  
13. Portfolio case `robots` explicit  
14. Industries hub page  
15. PPC vs Google Ads intent split  
16. Replace empty alts  
17. `dynamicParams: false` on services/portfolio  
18. Dynamic import Swiper  
19. Split `service-page-snap.ts`  
20. Run `npm audit` + Lighthouse CI  

## Quick wins (<30 mins)

| Task | Impact | Effort |
|------|--------|--------|
| Footer `content-social` fix | High link equity | 5 min |
| Delete tmp + `.next-packages-removal` | Repo health | 10 min |
| Remove 3 stale redirects | Crawl | 10 min |
| Add robots/OG to `/areas` via hub helper | SEO | 20 min |
| Explicit portfolio robots | SEO hygiene | 15 min |

## Medium tasks (2–8 hrs)

| Task | Impact | Effort |
|------|--------|--------|
| Compress top 20 images | CWV | 4 hrs |
| Form a11y + server proxy | A11y/security | 4 hrs |
| Security headers + CSP tune | Security | 3 hrs |
| NAP + LocalBusiness enrichment | Local SEO | 3 hrs |
| Home/Local SEO rewrite | SEO | 3 hrs |

## Large tasks (1–3 days)

| Task | Impact | Effort |
|------|--------|--------|
| Full image CDN/responsive pass | Performance | 2 days |
| Bootstrap reduction / design-system trim | Performance | 3 days |
| Industries hub + deeper linking | SEO | 1–2 days |
| Split mega service modules | Maintainability | 2 days |

## Priority matrix

| | High impact | Lower impact |
|--|-------------|--------------|
| **Low effort** | Footer fix, redirects, `/areas` meta, headers | Prettier dep move, SVG cleanup |
| **High effort** | Image CWV program, form security proxy | Full Bootstrap removal |

---

# APPENDIX A — Confirmed publish counts

| Type | Published | Drafts |
|------|----------:|-------:|
| Services | 15 | 0 |
| Locations | 13 | 0 |
| Industries | 13 | 0 |
| Blog | 7 | 0 |
| Portfolio | 12 | 0 (8 confidential) |

# APPENDIX B — Key files referenced

- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx`, `src/app/page.tsx`
- `src/config/site.ts`
- `src/lib/{hub,service,location,industry,blog,portfolio}-seo.ts`
- `src/data/site-content.ts`, `service-page-seo.ts`, `service-page-snap.ts`
- `src/data/locations/`, `industries/`, `blog/`, `portfolio/`
- `next.config.ts`, `package.json`, `vercel.json`
- `src/components/layout/SiteFooter.tsx`
- `src/assets/scss/_variables.scss`, `_global-site.scss`

# APPENDIX C — Follow-up live crawl checklist

Before calling launch “green,” run:

1. Screaming Frog / Sitebulb full crawl of production  
2. Lighthouse mobile on `/`, `/local-seo`, `/areas`, one location, one industry, one blog, `/portfolio`  
3. Rich Results Test on home, service, location, article  
4. `npm audit --production`  
5. Manual keyboard pass on forms + mega-menu  
6. Confirm Web3Forms spam protections  

---

**End of audit.**  
**Overall pre-launch verdict:** Conditionally ready — ship only after Critical (🔴) items 1–4 and High (🟠) items 5–10 are addressed.
