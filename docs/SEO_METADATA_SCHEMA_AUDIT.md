# Complete SEO Metadata & Schema Audit

**Date:** 2026-07-20  
**Site:** https://localseowiser.com  
**Status:** Report only — no code changes applied  

**Live Cursor canvas:** open beside chat from the Cursor project canvases folder (`seo-metadata-schema-audit.canvas.tsx`)  
**Repo report:** `docs/SEO_METADATA_SCHEMA_AUDIT.md` (this readable report)

---

## Snapshot

| Metric | Value |
|---|---|
| Routes audited | ~70 |
| Average SEO score | ~65/100 |
| Strong areas | Blog articles, locations, published industries, portfolio case studies |
| Weak areas | Services, hubs, about/contact, homepage social/canonical, `/areas` |

---

## Scope notes

- No standalone FAQ, Reviews, Privacy, Terms, or Refund routes.
- Homepage hosts FAQ + reviews.
- `/business` redirects to `/`.
- `/areas/[slug]` generates zero pages (locations use `/local-seo-*`).
- Zero draft blog posts currently.

---

## Score by page type

| Page type | Avg score /100 | Verdict |
|---|---:|---|
| Home | 48 | Critical gaps |
| Services | 39 | Critical gaps |
| Locations | 82 | Strong |
| Industries | 78 | Strong |
| Blog articles | 88 | Strong |
| Portfolio CS | 78 | Strong |
| About/Contact | 41 | Critical gaps |
| Hubs | 28 | Critical gaps |
| `/areas` | 12 | Critical gaps |

---

## Critical issues

1. **`/areas` in sitemap but served noindex** — `locationListingMeta` title/description/h1 are empty.
2. **All 11 service pages** lack canonical, Open Graph, Twitter, breadcrumb, and JSON-LD.
3. **Homepage title inflated by root layout template (~85 chars)**; missing canonical/OG/Twitter; schema incomplete (ProfessionalService only — missing Organization / WebSite / SearchAction).
4. **Orphan industries 404** — `/local-seo-for-accounting-firms` and `/local-seo-for-pest-control-companies` have data + `page.tsx` but are missing from `industryPages` registry.
5. **Citation & Landing Page services** missing dedicated `metaTitle` → template-bloated titles (~72–74 chars).

---

## High priority

| Issue | Pages | Impact |
|---|---|---|
| About & Contact missing canonical, OG, Twitter, schema, breadcrumb | `/about`, `/contact` | Weak social + rich results |
| `/services` & `/packages` missing description + structured data | 2 hubs | Thin SERP snippets |
| Homepage missing WebSite + Organization + SearchAction | `/` | Sitename potential underused |
| Blog index missing JSON-LD + OG image | `/blog` | Weaker social |
| Several service/industry titles > 60–70 chars | Multiple | Truncation risk |
| Brand string inconsistency (`Local SEO Wiser` vs `LocalSeoWiser`) | Sitewide | Brand SERP consistency |

---

## Medium priority

- Service H1s sometimes branding-led, not keyword-led (`/local-seo`, `/social-media-management`)
- Contact H1 weak primary-keyword alignment
- Portfolio listing title slightly short (43)
- Blog OG image missing on index
- Portfolio robots not explicit
- Homepage breadcrumb schema is Home-only
- No legal pages (Privacy/Terms/Refund)

---

## Low priority

- Location titles use `LocalSeoWiser` brand variant
- Some blog titles at edge of 50–60 band
- Sitewide image SEO not exhaustively measured per page
- Service pages lack cross-schema breadcrumbs

---

## Schema coverage vs expected

| Page type | Currently generated | Should contain | Gap |
|---|---|---|---|
| Homepage | ProfessionalService, FAQPage, BreadcrumbList | Organization, WebSite, LocalBusiness/ProfessionalService, BreadcrumbList, SearchAction | Missing Organization, WebSite, SearchAction |
| Service | None | Service, BreadcrumbList, FAQ (if visible), ImageObject | Full gap |
| Location | WebPage, LocalBusiness/ProfessionalService, FAQ, Breadcrumb | Service/LocalBusiness, Breadcrumb, FAQ, ImageObject | Strong |
| Industry | WebPage, entity types, FAQ, Breadcrumb | Service, Breadcrumb, FAQ, ImageObject | Strong when registered |
| Blog article | Organization, Article, Breadcrumb, FAQ | Article, Breadcrumb, ImageObject, FAQ if visible | Strong |
| Blog index | None | CollectionPage/WebPage + Breadcrumb optional | Missing |
| Contact | None | ContactPage, Breadcrumb, Organization | Full gap |
| About | None | AboutPage, Organization, Breadcrumb | Full gap |
| Portfolio case study | WebPage, CreativeWork, Breadcrumb | WebPage/CreativeWork, Breadcrumb, ImageObject | Good |
| Legal | N/A — routes absent | WebPage + Breadcrumb | Create only if required |

---

## Robots & sitemap

**robots.txt**

- Allow: `/`
- Sitemap: `https://localseowiser.com/sitemap.xml`
- Host set
- No disallow rules

**Sitemap includes**

- Home, about, blog, contact, services, packages, portfolio
- 11 services, 7 blogs, 12 portfolio case studies
- `/areas`, 13 locations, 11 industries

**Conflict:** `/areas` listed while page is noindex.

---

## Canonical / social gaps by type

| Type | Canonical | Open Graph | Twitter |
|---|---|---|---|
| Homepage | Missing | Missing | Missing |
| Services (all 11) | Missing | Missing | Missing |
| About / Contact | Missing | Missing | Missing |
| Services hub / Packages | Missing | Missing | Missing |
| Locations / Industries | OK | OK | OK |
| Blog articles | OK | OK | OK |
| Blog index | OK | Partial (no image) | Partial (no image) |
| Portfolio listing | OK | Partial (no image) | Partial (no image) |
| Portfolio case studies | OK | OK | OK |

---

## Meta titles — worst offenders

| URL | Chars | Status | Recommendation |
|---|---:|---|---|
| `/` | ~85 | Too long (template) | Use absolute title ~55 chars |
| `/seo-for-small-business` | 76 | Too long | Trim to one benefit + brand |
| `/google-map-optimization` | 73 | Too long | Shorten secondary phrase |
| `/local-business-citation` | ~72 | Too long (no metaTitle) | Add dedicated absolute metaTitle |
| `/local-seo-for-electricians` | 79 | Too long | Drop middle segment |
| `/services` | 56 | OK length / thin | Add absolute “Local SEO Services…” title |

---

## Master page scorecard (summary)

| Group | Canonical | OG/Twitter | Schema | Typical score |
|---|---|---|---|---:|
| Homepage | Missing | Missing | Partial | 48 |
| Services (11) | Missing | Missing | Gap | 32–44 |
| Locations (13) | OK | OK | Present | 82 |
| Industries published (11) | OK | OK | Present | 74–80 |
| Industries orphan (2) | N/A | N/A | 404 | 0 |
| Blog articles (7) | OK | OK | Present | 88 |
| Blog index | OK | Partial | Gap | 68 |
| About / Contact | Missing | Missing | Gap | 40–42 |
| `/services`, `/packages` | Missing | Missing | Gap | 28 |
| `/areas` | Missing | Missing | Gap + noindex | 12 |
| Portfolio listing | OK | Partial | Gap | 62 |
| Portfolio case studies (12) | OK | OK | Present | 78 |

Full interactive scorecard with every URL is in the Cursor canvas.

---

## Recommended fixes (awaiting approval)

| Priority | Fix | Exact action |
|---|---|---|
| P0 | Resolve `/areas` conflict | Fill `locationListingMeta` + index, **or** remove `/areas` from sitemap while noindex |
| P0 | Register orphan industries | Add accounting-firms + pest-control to `industryPages` **or** remove dead routes |
| P0 | Service page SEO pipeline | `buildServicePageMetadata` + JSON-LD (Service, Breadcrumb, FAQ, Image) |
| P0 | Homepage absolute metadata | Absolute title 50–60 chars; canonical; OG; Twitter; Organization + WebSite + SearchAction |
| P0 | Citation + Landing metaTitle | Add dedicated `metaTitle` / `metaDescription` in `service-page-seo.ts` |
| P1 | About / Contact completeness | Canonical + OG/Twitter + AboutPage/ContactPage schema + breadcrumbs |
| P1 | Hub pages | Unique descriptions for `/services` and `/packages`; absolute titles |
| P1 | Trim long titles | Shorten service + industry titles > 60–65 chars |
| P2 | Brand normalization | Pick one public brand string across titles |
| P2 | Blog/portfolio index OG images | Add default social share image |
| P3 | Legal pages (if required) | Privacy/Terms with WebPage + Breadcrumb only when needed |

---

## Methodology

Code-level audit of `generateMetadata`, JSON-LD builders, `sitemap.ts`, `robots.ts`, and content registries. Live HTML fetch / Google Rich Results Test not executed in this pass. Pixel widths unavailable without a SERP pixel simulator.

**No metadata, schema, titles, descriptions, or page content should be changed until this report is reviewed and approved.**
