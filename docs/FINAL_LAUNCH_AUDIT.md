# Final Launch Audit

**Site:** Local SEO Wiser (`https://localseowiser.com`)  
**Date:** 2026-07-21  
**Scope:** Post–launch-hardening verification (Critical fixes, verified cleanup, performance pass, production build + smoke + Lighthouse)  
**Companion report:** `docs/COMPLETE_WEBSITE_AUDIT.md` (preserved baseline; overall was 64/100)

---

## Build status

| Check | Result |
|-------|--------|
| `node scripts/validate-locations.mjs` | Pass — 0 stubs, 13 dedicated location files |
| `npx tsc --noEmit` | Pass |
| `npm run build` (`next build`) | Pass — 79 static routes generated |
| ESLint during build | Pass — **zero warnings or errors** |
| Production smoke (`next start`, localhost) | Pass — representative routes returned **200** |
| `/packages` redirect | Pass — **308** → `/contact` |
| Security headers on HTML responses | Pass — CSP, HSTS, nosniff, XFO, Referrer-Policy, Permissions-Policy |
| Canonical NAP | Pass — **Pittsburgh, PA** (no unverifiable street address) |

### Smoke routes exercised

`/`, `/local-seo`, `/areas`, `/local-seo-oakland`, `/local-seo-for-dentists`, `/blog/what-is-local-seo`, `/portfolio`, `/contact`, `/services`, `/sitemap.xml`, `/robots.txt`

### Metadata / schema spot checks (rendered HTML)

| Page | Title intent | Canonical | JSON-LD blocks |
|------|--------------|-----------|----------------|
| `/` | Brand agency: *Pittsburgh Digital Marketing Agency \| Local SEO Wiser* | `https://localseowiser.com` | Present (10) |
| `/local-seo` | Service intent: *Local SEO Services Pittsburgh \| Maps, GBP & Local Leads* | `…/local-seo` | Present (8) |
| `/areas` | Hub: *Local SEO Locations in Pittsburgh \| Areas We Serve* | `…/areas` | Present (8) — CollectionPage, ItemList, BreadcrumbList, Org |

---

## Remaining Critical / High issues

### Critical

**None remaining** from the launch-hardening list (cannibalization, `/areas` SEO, footer category, stale blog redirects, missing security headers, placeholder-only form names, street NAP, location schema `url`).

### High (post-launch week)

| ID | Issue | Notes |
|----|-------|-------|
| H1 | Public Web3Forms access key | Form endpoint key remains client-visible by design of Web3Forms; move submission behind a Server Action or Route Handler when the owner is ready. |
| H2 | CSP still allows `'unsafe-inline'` for scripts | Production no longer allows `'unsafe-eval'`; removing `'unsafe-inline'` requires a nonce-based Next.js CSP implementation. |
| H3 | Location / industry decorative empty `alt=""` | Intentional on some chrome images; ensure all *content* images keep meaningful alts (spot-check remaining). |

### Medium / backlog (not blocking launch)

- Bootstrap + large SCSS bundle still dominate CSS weight.
- Two Yara Luxe portfolio WebPs (~500–600 KB) could not be overwritten on Windows (file lock / EPERM) during recompress; already WebP and under prior multi-MB originals.

---

## Metadata / schema completeness

| Surface | Status |
|---------|--------|
| Shared hub metadata builder (`buildHubPageMetadata`) | Used by `/areas`, `/services`, `/about`, `/contact`, legal, FAQ, portfolio index |
| `/areas` hub schemas | CollectionPage + ItemList + BreadcrumbList + Organization |
| Location / industry page `url` | Points at page canonical (`getLocationPageUrl` / industry equivalent) |
| Geo / business hours in schema | Only when verified data exists (no fabricated street/hours) |
| `robots.txt` | Allow `/`, sitemap + host set |
| `sitemap.xml` | Includes hubs, services, blog, portfolio, `/areas` + published locations + industries |

Home vs `/local-seo` titles/descriptions are intentionally separated (brand vs Local SEO service).

---

## Internal linking

| Check | Status |
|-------|--------|
| Footer Social / Content column | Fixed — uses `content-social` category (was broken `social-media`) |
| Footer NAP | `Pittsburgh, PA` |
| Cross-links hubs ↔ locations ↔ industries ↔ services | Intact via existing related-link helpers |
| Stale deleted-blog redirects | Removed from `next.config.ts`; only `/packages` → `/contact` retained |

---

## Images & performance work completed

| Item | Result |
|------|--------|
| `public/` weight | ~**23.3 MB** across ~227 files (was ~89+ MB in baseline audit) |
| Industry / snap / hub heroes | Batch recompressed (many multi-MB → ~0.1–0.3 MB) |
| Fonts | Google Fonts CSS `@import` removed; **`next/font`** (Rethink Sans) in `layout.tsx`; SCSS uses `--font-rethink-sans` |
| `next/image` | Portfolio hub cards, location media/hero composition, portfolio logos |
| Client weight | Removed unused Swiper usage (`AboutTeamSlider`, dead showcases); **`swiper` package uninstalled** |
| Packages cleanup | `gumshoejs` removed; `prettier` in `devDependencies` |

Screenshot galleries intentionally keep native `<img>` so full-page scroll frames work.

---

## Lighthouse (mobile, simulated throttling)

**Environment:** Local production server (`next start`), Chrome headless, Lighthouse CLI 12.x, form factor **mobile**, throttling **simulate**.  
**Repro:**

```bash
npx next start -p 3456
npx lighthouse http://localhost:3456/ --form-factor=mobile --screenEmulation.mobile --throttling-method=simulate --chrome-path="C:\Program Files\Google\Chrome\Application\chrome.exe" --chrome-flags="--headless=new --no-sandbox --disable-gpu" --output=json --output-path=lh-home.json
```

| Page | Perf | A11y | Best Practices | SEO | LCP | CLS |
|------|-----:|-----:|---------------:|----:|-----|-----|
| `/` | 85 | 91 | 100 | 100 | 3.5 s | 0.081 |
| `/local-seo` | 84 | 91 | 100 | 100 | 3.3 s | 0 |
| `/areas` | 75 | 90 | 100 | 100 | 5.0 s | 0 |
| `/local-seo-oakland` | 84 | 86 | 100 | 100 | 3.3 s | 0 |
| `/local-seo-for-dentists` | 81 | 86 | 100 | 100 | 4.1 s | 0 |
| `/blog/what-is-local-seo` | 94 | 91 | 93 | 92 | 2.4 s | 0 |
| `/portfolio` (post-optimization, 3 runs) | **82–87** | 86 | 96–100 | 100 | **2.8–3.4 s** | 0.005–0.033 |

**Note:** Scores are lab estimates on localhost; field data (CrUX) may differ after deploy + CDN caching.

Forms: consultation / visibility scan fields now have persistent visually-hidden labels + accessible names; error messaging uses `aria-describedby` when errors are present. Contact review form labels preserved.

---

## Launch recommendation

**Ready to launch** from a technical SEO / security-headers / build standpoint. Portfolio mobile Performance now clears the 80+ target; the main remaining High follow-up is moving Web3Forms behind a server-owned endpoint.

Do not add unverifiable street addresses, review counts, hours, or ranking claims without owner verification.
