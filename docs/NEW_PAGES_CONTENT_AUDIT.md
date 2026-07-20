# New Pages Content Audit (Read-Only)

**Date:** 2026-07-20  
**Scope:** `/faq`, `/reviews`, `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`  
**Mode:** Read-only. No page content, design, redirects, metadata, or indexing settings were changed while producing this report.  
**Approval status:** **ALL CONTENT ON THESE FIVE PAGES IS UNAPPROVED BY THE SITE OWNER** unless the owner later confirms otherwise.

---

## Global findings (applies to all five pages)

### Shared chrome (via `SiteShell`)

Every page wraps content in:

- `src/components/layout/SiteShell.tsx` → `NavTopBar` + page body + `SiteFooter`
- Site header/nav (`src/components/navTopbar/NavTopBar.tsx`): Home, About, Services, Packages, Portfolio, Blog, Contact Us — **none of the five new routes appear in primary navigation**
- Site footer (`src/components/layout/SiteFooter.tsx`): copyright line now includes links to all five new routes (FAQ, Reviews, Privacy, Terms, Refunds), plus Contact Us, social links, USA/UK phone/email/address blocks, back-to-top button

### Shared metadata helper

`src/lib/hub-seo.ts` → `buildHubPageMetadata()` sets for each page:

- `title: { absolute: <title> }`
- `description`
- `alternates.canonical` = `https://localseowiser.com` + path
- Open Graph: title, description, url, type `website`, siteName `Local SEO Wiser`, image `https://localseowiser.com/logo.png`
- Twitter: `summary_large_image`, title, description, image `https://localseowiser.com/logo.png`
- `robots: { index: true, follow: true }`

### Sitemap / robots / deploy status

| Check | Status |
|-------|--------|
| Listed in `src/app/sitemap.ts` `staticRoutes` | **Yes** (all five) |
| In primary navigation | **No** (all five) |
| In footer copyright links | **Yes** (all five) — **UNAPPROVED site-wide link addition** |
| Page metadata robots | **index, follow** (all five) |
| Site `robots.ts` | Allows `/`; sitemap `https://localseowiser.com/sitemap.xml` |
| Live production (`https://localseowiser.com/...`) as of audit | **HTTP 404** for all five (not deployed / not live yet) |
| Local `http://localhost:3000/...` as of audit | **HTTP 500** (Turbopack `.next` ENOENT corruption; not a page-logic finding) |

### Screenshots (item 11)

**NOT CAPTURED.**

Reasons (factual):

1. Local Next.js Turbopack server returned **500** (`ENOENT` on `.next/static/development/_buildManifest.js.tmp.*`).
2. Production URLs for all five paths returned **404**.
3. No browser/screenshot MCP was available in this environment; Playwright is not installed in the project.

**No desktop or mobile screenshots are attached.** Capturing them requires a healthy local or deployed render and owner approval to restart/fix the dev server or deploy — not done per “do not make further changes.”

---

## 1. `/faq`

### 1. Exact source file path

- Page: `src/app/faq/page.tsx`
- FAQ copy source: `src/data/site-content.ts` → `export const faqItems`
- Schema/meta helpers: `src/lib/hub-seo.ts` → `buildHubPageMetadata`, `buildFaqPageSchemas`
- Layout chrome: `src/components/layout/SiteShell.tsx`, `src/components/layout/PageHeader.tsx`

### 2. Full visible page content

**UNAPPROVED.** Visible copy as coded (hero + accordion body). Header/nav/footer chrome is shared site chrome (footer newly links here).

**Hero / PageHeader**

- Badge/eyebrow: `FAQ`
- H1: `Local SEO FAQ`
- Supporting paragraph: `Answers to common questions about Local SEO, Google Business Profile optimization, pricing, timelines, and our process.`

**Accordion items** (each `<details>` / `<summary>` + answer `<p>`):

1. **Q:** How much do local SEO services cost in Pittsburgh?  
   **A:** It depends on your industry's competition and goals. Foundational plans start lower, while competitive categories like legal, medical, and home services need more. Our plans are listed above. A quick call gets you an exact number.

2. **Q:** How competitive is local SEO in Pittsburgh?  
   **A:** Very. With 2.4 million people in the metro, you're often up against dozens of established businesses for the top 3 Map Pack spots. The upside: many of them have weak local SEO, so there's real room to win if you invest strategically.

3. **Q:** How long until I see results?  
   **A:** Most Pittsburgh businesses see measurable improvement in 60–90 days, with stronger results building over 4–6 months. Competitive categories take longer. We set realistic timelines based on your market.

4. **Q:** Do you work with businesses in the Pittsburgh suburbs?  
   **A:** Yes. We cover the entire metro: Cranberry, Mt. Lebanon, Monroeville, Robinson, the North and South Hills, and everywhere between. Suburban search has its own dynamics and we tailor for it.

5. **Q:** What's the difference between local SEO and regular SEO?  
   **A:** Regular SEO competes globally; local SEO targets a specific area and a different set of signals: Google Business Profile, proximity, reviews, and citations. A modest local business can outrank a much bigger competitor by getting these right.

6. **Q:** Do you optimize for AI searches like ChatGPT and Google AI Overviews?  
   **A:** Yes. The good news is that strong local SEO fundamentals already make you eligible for most AI answers, so we build the foundation right and you benefit on both fronts.

7. **Q:** Do you guarantee #1 rankings?  
   **A:** No. You should be cautious of anyone who does. Google prohibits ranking guarantees. We commit to a transparent process and real, reported results instead.

8. **Q:** Are there long contracts?  
   **A:** No long contracts. We work month-to-month so you stay because results are coming in, not because you are locked in.

### 3. H1 and all H2/H3 headings

- **H1:** Local SEO FAQ
- **H2:** none in page body
- **H3:** none in page body  
  (Questions are `<summary>` elements, not heading tags.)

Footer still renders location block headings `USA.` and `UK.` as `<h3>` via shared footer (site-wide, not FAQ-specific content).

### 4. CTA text and destination links

- **No dedicated page CTA button** on `/faq`.
- Interactive: accordion open/close only (`<details>` / `<summary>`).
- No in-body internal links.
- Shared footer CTAs: “Contact Us” → `/contact`; legal/new-page links; tel/mailto in footer location blocks.

### 5. Metadata

| Field | Value |
|-------|--------|
| title | `Local SEO FAQ \| Frequently Asked Questions` |
| description | `Find answers to common questions about Local SEO, Google Business Profile optimization, pricing, timelines, and our SEO process.` |
| canonical | `https://localseowiser.com/faq` |
| Open Graph title | same as title |
| Open Graph description | same as description |
| Open Graph url | `https://localseowiser.com/faq` |
| Open Graph type | `website` |
| Open Graph siteName | `Local SEO Wiser` |
| Open Graph image | `https://localseowiser.com/logo.png` (alt = title) |
| Twitter card | `summary_large_image` |
| Twitter title / description / image | same as title / description / OG image |
| robots | `index: true`, `follow: true` |

### 6. JSON-LD schema currently rendered

1. **FAQPage** — `mainEntity` = all 8 questions/answers from `faqItems` as `Question` / `Answer`
2. **BreadcrumbList** — Home → `https://localseowiser.com/` ; FAQ → `https://localseowiser.com/faq`

### 7. Business claims / guarantees / stats / pricing / timelines / legal

| Claim in FAQ answers | Type | Notes |
|----------------------|------|--------|
| “Our plans are listed above” | Pricing / UX | **Broken on this page** — no plans section above on `/faq` (copy written for homepage context) |
| “Foundational plans start lower…” | Pricing (vague) | No dollar amounts on this page |
| “2.4 million people in the metro” | Statistic | Source not cited on page |
| “dozens of established businesses” / “top 3 Map Pack” | Competitive claim | Unsupported quantification |
| “many of them have weak local SEO” | Competitive claim | Unsupported |
| “measurable improvement in 60–90 days”, “4–6 months” | Timeline promise | Outcome expectation; not a guarantee of rankings, but still a performance claim |
| Suburb coverage list | Service-area claim | Named areas |
| AI / ChatGPT / AI Overviews eligibility claim | Capability claim | Strong wording (“eligible for most AI answers”) |
| “Google prohibits ranking guarantees” | Legal/policy statement | Ranking guarantee declined (good) |
| “No long contracts” / “month-to-month” | Contract claim | Commercial term |
| “real, reported results” | Soft performance claim | |

### 8. Content origin

| Layer | Origin |
|-------|--------|
| Page route, hero badge/H1/desc, accordion UI | **Newly written** for `/faq` (UNAPPROVED) |
| All Q&A text | **Copied** from existing homepage data `faqItems` in `src/data/site-content.ts`, also rendered by `src/app/(pages)/business/components/FAQ.tsx` |
| Meta title/description | **Newly written** for this route (aligned to prior SEO brief; UNAPPROVED as live page packaging) |

### 9. Header / footer / internal links added

- **Header/nav:** no new items for FAQ
- **Footer:** link label `FAQ` → `/faq` added to copyright row (**UNAPPROVED site-wide**)
- **On-page internal links:** none beyond shared chrome

### 10. Inclusion

| Channel | Included? |
|---------|-----------|
| sitemap | Yes |
| navigation | No |
| footer | Yes |
| robots indexing (page meta) | Yes (`index, follow`) |

### 11. Screenshots

Not captured (see Global findings).

### 12. Forms / buttons / interactive

- Accordion `<details>` items only
- No forms
- Shared footer: Contact Us link, social links, tel/mailto, back-to-top button

### 13. Legal / trust / SEO / factual risk

- **UNAPPROVED page published in code + sitemap + indexable + footer-linked** while production currently 404
- FAQ schema will mark all 8 answers as authoritative Q&A for Google
- “Our plans are listed above” is factually wrong on this URL
- Metro population, timelines, AI eligibility, and month-to-month terms may be inaccurate or overstated without owner verification
- Homepage FAQ and `/faq` can create duplicate FAQ content/schema surfaces

### Recommendation

**REWRITE** (or **KEEP AS DRAFT** until owner-approved FAQ copy unique to this page; remove or noindex until approved).  
Do not KEEP as-is while “plans listed above” and indexable FAQPage schema remain.

---

## 2. `/reviews`

### 1. Exact source file path

- Page: `src/app/reviews/page.tsx`
- Testimonial data: `src/data/site-content.ts` → `export const testimonials`
- Related empty verified set: `src/data/site-content.ts` → `export const verifiedGoogleReviews = []`
- Schema/meta: `src/lib/hub-seo.ts` → `buildHubPageMetadata`, `buildReviewsPageSchemas`
- Same testimonials also on homepage: `src/app/(pages)/business/components/Testimonial.tsx`

### 2. Full visible page content

**UNAPPROVED.**

**Hero / PageHeader**

- Badge: `Reviews`
- H1: `Client Reviews`
- Supporting paragraph: `Feedback from businesses we have helped improve local visibility, Google Maps presence, and lead generation.`

**Testimonial cards** (name, role, quote):

1. **Angela Park 🇺🇸** — Owner, Midtown Smiles  
   Local SEO Wiser gave us a clear roadmap and handled the execution. We now see consistent calls coming directly from Google Maps results.

2. **Joseph Reed 🇬🇧** — Managing Partner, Reed Family Law  
   The team improved our local visibility without overpromising. The reporting is transparent, strategic, and actually tied to leads, not rankings.

3. **Olivia Chen 🇦🇺** — Director, Harbour Clinic  
   Their review and profile strategy helped us stand out in a competitive area. The quality of leads we are getting from Google Maps has noticeably improved.

4. **Maria Santos 🇨🇦** — Marketing Lead, Riverstone Realty  
   Their local content and Pittsburgh neighborhood strategy helped us attract higher-intent buyers from the areas we actually serve.

5. **David Carter 🇳🇿** — Owner, Carter HVAC Services  
   We finally have consistent calls from discovery searches. People finding us on Maps who had no idea we existed before.

6. **Lisa Williams 🇺🇸** — Practice Manager, Northside Wellness  
   The review workflow and profile updates made a measurable difference in booked appointments within just a few weeks.

**Closing paragraph**

Looking for platform-verified ratings? Find Local SEO Wiser on [Google Maps](https://www.google.com/maps/search/?api=1&query=Local+SEO+Wiser+Pittsburgh).

### 3. H1 and all H2/H3 headings

- **H1:** Client Reviews
- **H2:** none
- **H3:** none in page body (footer `USA.` / `UK.` h3s still present via SiteShell)

### 4. CTA text and destination links

- In-body link text: `Google Maps` → `https://www.google.com/maps/search/?api=1&query=Local+SEO+Wiser+Pittsburgh` (external, new tab, `rel="noopener noreferrer"`)
- No button CTA on the page itself
- Shared footer Contact Us → `/contact`

Note: Homepage testimonials section button still says “See More Reviews” but links to `/contact`, not `/reviews` (`Testimonial.tsx`).

### 5. Metadata

| Field | Value |
|-------|--------|
| title | `Client Reviews \| Local SEO Wiser Success Stories` |
| description | `Read verified client reviews and learn how Local SEO Wiser has helped businesses improve rankings, visibility, and lead generation.` |
| canonical | `https://localseowiser.com/reviews` |
| Open Graph | title/description/url as above; type `website`; siteName `Local SEO Wiser`; image `https://localseowiser.com/logo.png` |
| Twitter | `summary_large_image` + same title/description/image |
| robots | `index: true`, `follow: true` |

### 6. JSON-LD schema currently rendered

1. **Organization** — name `Local SEO Wiser`, url `https://localseowiser.com`, logo `https://localseowiser.com/logo.png`
2. **BreadcrumbList** — Home → `/` ; Reviews → `/reviews`

**Review schema:** intentionally **not** emitted (`buildReviewsPageSchemas` comment: omitted until verified structured reviews with ratings exist).

### 7. Claims / testimonials inventory (with source)

| # | Displayed as | Quote claims | Source in codebase | Verifiable external source | Status |
|---|--------------|--------------|--------------------|----------------------------|--------|
| 1 | Angela Park 🇺🇸 / Midtown Smiles | roadmap, execution, consistent Google Maps calls | `testimonials` in `site-content.ts`; also homepage | None found in repo (`verifiedGoogleReviews` is `[]`) | **UNVERIFIED** |
| 2 | Joseph Reed 🇬🇧 / Reed Family Law | local visibility, transparent reporting tied to leads | same | none | **UNVERIFIED** |
| 3 | Olivia Chen 🇦🇺 / Harbour Clinic | review/profile strategy, improved Maps lead quality | same | none | **UNVERIFIED** |
| 4 | Maria Santos 🇨🇦 / Riverstone Realty | local content / Pittsburgh neighborhoods, higher-intent buyers | same | none | **UNVERIFIED** |
| 5 | David Carter 🇳🇿 / Carter HVAC Services | consistent discovery/Maps calls | same | none | **UNVERIFIED** |
| 6 | Lisa Williams 🇺🇸 / Northside Wellness | measurable booked appointments in a few weeks | same | none | **UNVERIFIED** |

Meta description uses the word **“verified”** while page body testimonials are unverified and `verifiedGoogleReviews` is empty.

### 8. Content origin

| Layer | Origin |
|-------|--------|
| Page route, hero, card layout, Google Maps blurb | **Newly written** (UNAPPROVED) |
| Six testimonials | **Copied** from existing `testimonials` (already on homepage Testimonial section) |
| Meta “verified client reviews” wording | **Newly written** for this route (UNAPPROVED) — conflicts with empty verified array |

### 9. Header / footer / internal links added

- Nav: no Reviews item
- Footer: `Reviews` → `/reviews` (**UNAPPROVED**)
- On-page: external Google Maps search URL only

### 10. Inclusion

| Channel | Included? |
|---------|-----------|
| sitemap | Yes |
| navigation | No |
| footer | Yes |
| robots indexing | Yes (`index, follow`) |

### 11. Screenshots

Not captured.

### 12. Forms / buttons / interactive

- No forms
- One external text link (Google Maps)
- Shared footer interactions only

### 13. Risk

- Meta claims **verified** reviews; body quotes are **UNVERIFIED**; flag/emoji names and businesses may be fictional
- Trust / advertising / FTC-style endorsement risk if treated as real clients
- SEO risk: thin duplicate of homepage testimonials on a dedicated indexable URL
- Google Maps link is a **search** URL, not a confirmed GBP place URL
- Footer + sitemap expose the page even though production is still 404

### Recommendation

**REMOVE** from public indexing/footer/sitemap **or KEEP AS DRAFT** until owner-supplied verified reviews exist.  
**REWRITE** if kept: remove “verified” from meta, replace with real attributed reviews (or empty state), and only then consider Review schema.

---

## 3. `/privacy-policy`

### 1. Exact source file path

- `src/app/privacy-policy/page.tsx`
- Helpers: `src/lib/hub-seo.ts` → `buildHubPageMetadata`, `buildLegalPageSchemas`

### 2. Full visible page content

**UNAPPROVED — newly generated legal-style copy.**

**Hero**

- Badge: `Legal`
- H1: `Privacy Policy`
- Description (same as meta description): `Read the Local SEO Wiser Privacy Policy to understand how we collect, use, store, and protect your personal information.`

**Body (complete)**

Last updated: July 20, 2026

Local SEO Wiser ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information when you visit localseowiser.com or contact us about our services.

**Information we collect**

We may collect information you provide directly, such as your name, email address, phone number, business name, website URL, and message details when you submit a form, request an audit, or contact us. We may also collect basic technical data such as browser type, device information, and pages visited to improve site performance and security.

**How we use information**

We use collected information to respond to inquiries, provide Local SEO consultations and services, improve our website and communications, and meet legal or operational requirements. We do not sell personal information.

**Sharing and retention**

We may share information with trusted service providers who help us operate our business (for example, hosting, analytics, or email tools), only as needed to perform those services. We retain information only as long as needed for the purposes described in this policy or as required by law.

**Your choices**

You may request access, correction, or deletion of personal information we hold about you by emailing info@localseowiser.com.

**Contact**

Questions about this Privacy Policy can be sent to info@localseowiser.com.

### 3. Headings

- **H1:** Privacy Policy
- **H2:** Information we collect; How we use information; Sharing and retention; Your choices; Contact
- **H3:** none in body

### 4. CTA / links

- `info@localseowiser.com` → `mailto:info@localseowiser.com` (appears twice)
- No other CTAs

### 5. Metadata

| Field | Value |
|-------|--------|
| title | `Privacy Policy \| Local SEO Wiser` |
| description | `Read the Local SEO Wiser Privacy Policy to understand how we collect, use, store, and protect your personal information.` |
| canonical | `https://localseowiser.com/privacy-policy` |
| OG / Twitter | mirrors title/description; image `https://localseowiser.com/logo.png`; OG type `website` |
| robots | index, follow |

### 6. JSON-LD

1. **WebPage** — name `Privacy Policy`, description = meta description, url `https://localseowiser.com/privacy-policy`, isPartOf WebSite `Local SEO Wiser`
2. **BreadcrumbList** — Home → Privacy Policy

### 7–8. Legal inventory & origin

**Origin:** **Newly generated** placeholder/general privacy text by the agent when the route was created. **Not** copied from a prior site legal page (none existed). **Not lawyer-reviewed. UNAPPROVED.**

| Element | Present? | Exact / as written |
|---------|----------|--------------------|
| Company name | Yes | Local SEO Wiser |
| Website | Yes | localseowiser.com |
| Address | **No** on this page | — |
| Email | Yes | info@localseowiser.com |
| Jurisdiction / governing law | **No** | — |
| Cookies policy | **No** dedicated cookie section | technical data mentioned only generally |
| Named third parties | **No** names | generic “hosting, analytics, or email tools” |
| Payment terms | No | — |
| Refund conditions | No | — |
| Data sale claim | Yes | “We do not sell personal information.” |
| Retention | Vague | “only as long as needed… or as required by law” |
| Rights | Access/correction/deletion via email | No CCPA/GDPR specifics |

### 9–10. Links & inclusion

- Footer `Privacy` → `/privacy-policy` (UNAPPROVED)
- Nav: no
- Sitemap: yes
- Indexable: yes

### 11–12. Screenshots / interactive

- Screenshots: not captured
- Interactive: mailto links only (+ shared chrome)

### 13. Risk

- Legal risk: incomplete privacy policy presented as real policy; may not match actual stack (analytics, forms, CRM, cookies)
- “Do not sell” and retention claims without counsel review
- Indexable + footer-linked while **UNAPPROVED**
- Last updated date set to July 20, 2026 without owner confirmation

### Recommendation

**REWRITE** with counsel-approved policy, **or KEEP AS DRAFT / REMOVE** from footer+sitemap+index until approved.  
Do not KEEP as-is.

---

## 4. `/terms-and-conditions`

### 1. Exact source file path

- `src/app/terms-and-conditions/page.tsx`
- Helpers: `buildHubPageMetadata`, `buildLegalPageSchemas`

### 2. Full visible page content

**UNAPPROVED — newly generated terms copy.**

**Hero**

- Badge: `Legal`
- H1: `Terms & Conditions`
- Description: `Review the Local SEO Wiser Terms & Conditions governing the use of our website, services, payments, and customer responsibilities.`

**Body (complete)**

Last updated: July 20, 2026

These Terms & Conditions govern your use of the Local SEO Wiser website and engagement with our services. By using this website or purchasing services, you agree to these terms.

**Services**

Local SEO Wiser provides digital marketing and related services, including Local SEO, Google Business Profile optimization, technical SEO, advertising support, and website development. Service details, deliverables, and timelines are defined in proposals or agreements shared with each client.

**Payments**

Fees, billing schedules, and payment methods are outlined in your proposal or invoice. Work may be paused if invoices remain unpaid beyond agreed terms.

**Client responsibilities**

Clients agree to provide accurate business information, timely access to required accounts (such as Google Business Profile or website CMS), and feedback needed to complete deliverables.

**No ranking guarantees**

Search engine rankings and lead volume depend on many factors outside our control. We do not guarantee specific rankings, traffic levels, or revenue outcomes.

**Website use**

Content on this website is for informational purposes. You may not misuse the site, attempt unauthorized access, or copy materials for commercial use without permission.

**Contact**

Questions about these terms can be sent to info@localseowiser.com.

### 3. Headings

- **H1:** Terms & Conditions
- **H2:** Services; Payments; Client responsibilities; No ranking guarantees; Website use; Contact
- **H3:** none in body

### 4. CTA / links

- mailto `info@localseowiser.com`

### 5. Metadata

| Field | Value |
|-------|--------|
| title | `Terms & Conditions \| Local SEO Wiser` |
| description | `Review the Local SEO Wiser Terms & Conditions governing the use of our website, services, payments, and customer responsibilities.` |
| canonical | `https://localseowiser.com/terms-and-conditions` |
| OG / Twitter | mirrors title/description; image logo.png |
| robots | index, follow |

### 6. JSON-LD

1. **WebPage** — name `Terms & Conditions`, url `https://localseowiser.com/terms-and-conditions`, description = meta description
2. **BreadcrumbList** — Home → Terms & Conditions

### 7–8. Legal inventory & origin

**Origin:** **Newly generated** (UNAPPROVED). Not copied from a prior Terms page.

| Element | Present? | Detail |
|---------|----------|--------|
| Company name | Yes | Local SEO Wiser |
| Address | **No** | — |
| Email | Yes | info@localseowiser.com |
| Jurisdiction / governing law | **No** | — |
| Payment terms | Partial | deferred to proposal/invoice; unpaid → work may pause |
| Refund conditions | **No** on this page | — |
| Ranking / revenue guarantees | Explicitly disclaimed | “We do not guarantee specific rankings, traffic levels, or revenue outcomes.” |
| Cookies / privacy | **No** | — |
| Third-party services | Mentions client access to GBP / CMS | not vendor list |
| Liability / indemnity / IP / termination | **Absent** | thin terms |

### 9–10. Inclusion

- Footer `Terms` → `/terms-and-conditions`
- Nav: no; sitemap: yes; indexable: yes

### 11–12. Screenshots / interactive

- Not captured; mailto only (+ shared chrome)

### 13. Risk

- Incomplete commercial terms may be treated as binding site terms
- Missing governing law, liability limits, IP, cancellation detail
- Payment pause language may conflict with real contracts
- UNAPPROVED + indexable + footer-linked

### Recommendation

**REWRITE** (counsel) or **KEEP AS DRAFT / REMOVE** until approved.  
Do not KEEP as-is.

---

## 5. `/refund-policy`

### 1. Exact source file path

- `src/app/refund-policy/page.tsx`
- Helpers: `buildHubPageMetadata`, `buildLegalPageSchemas`

### 2. Full visible page content

**UNAPPROVED — newly generated refund policy copy.**

**Hero**

- Badge: `Legal`
- H1: `Refund Policy`
- Description: `Read the Local SEO Wiser Refund Policy to understand eligibility, processing times, and conditions for service refunds.`

**Body (complete)**

Last updated: July 20, 2026

This Refund Policy explains when refunds may apply for Local SEO Wiser services. Because SEO and marketing work often includes setup, research, and ongoing optimization, refund eligibility depends on the service type and work already completed.

**General policy**

Fees for completed work, published deliverables, or time already spent on audits, setup, strategy, or optimization are generally non-refundable. If a project has not started, unused prepaid fees may be eligible for a refund at our discretion.

**Monthly retainers**

Month-to-month retainers are billed for the service period. Once a billing period has begun and work is underway, that period is typically non-refundable. Cancellation stops future billing according to your agreement.

**How to request a review**

To request a refund review, email info@localseowiser.com with your name, business name, invoice details, and reason for the request. We aim to respond within 5–7 business days.

**Processing**

Approved refunds are processed to the original payment method when possible. Timing may vary by payment provider.

### 3. Headings

- **H1:** Refund Policy
- **H2:** General policy; Monthly retainers; How to request a review; Processing
- **H3:** none in body

### 4. CTA / links

- mailto `info@localseowiser.com`

### 5. Metadata

| Field | Value |
|-------|--------|
| title | `Refund Policy \| Local SEO Wiser` |
| description | `Read the Local SEO Wiser Refund Policy to understand eligibility, processing times, and conditions for service refunds.` |
| canonical | `https://localseowiser.com/refund-policy` |
| OG / Twitter | mirrors title/description; image logo.png |
| robots | index, follow |

### 6. JSON-LD

1. **WebPage** — name `Refund Policy`, url `https://localseowiser.com/refund-policy`
2. **BreadcrumbList** — Home → Refund Policy

### 7–8. Legal inventory & origin

**Origin:** **Newly generated** (UNAPPROVED).

| Element | Present? | Detail |
|---------|----------|--------|
| Company name | Yes | Local SEO Wiser |
| Address | **No** | — |
| Email | Yes | info@localseowiser.com |
| Jurisdiction | **No** | — |
| Refund conditions | Yes | completed work generally non-refundable; unused prepaid if not started “at our discretion” |
| Monthly retainer rules | Yes | period underway typically non-refundable; cancel per agreement |
| Response SLA | Yes | “aim to respond within 5–7 business days” |
| Payment processing | Yes | original method when possible; provider-dependent timing |
| Cookies / data collection | No | — |
| Governing law | No | — |

### 9–10. Inclusion

- Footer `Refunds` → `/refund-policy`
- Nav: no; sitemap: yes; indexable: yes

### 11–12. Screenshots / interactive

- Not captured; mailto only (+ shared chrome)

### 13. Risk

- Publishes refund promises/discretion language that may not match real billing practice or consumer law in relevant jurisdictions
- “At our discretion” + “generally/typically non-refundable” can create dispute exposure if inaccurate
- 5–7 business day response is an operational commitment
- UNAPPROVED + indexable + footer-linked

### Recommendation

**REWRITE** (owner + counsel) or **KEEP AS DRAFT / REMOVE** until approved.  
Do not KEEP as-is.

---

## Summary recommendations

| Page | Recommendation | Primary reason |
|------|----------------|----------------|
| `/faq` | **REWRITE** (or **KEEP AS DRAFT**) | Unapproved packaging; reused homepage FAQ; broken “plans listed above”; indexable FAQPage schema |
| `/reviews` | **REMOVE** or **KEEP AS DRAFT** | Unverified testimonials; meta says “verified”; empty `verifiedGoogleReviews` |
| `/privacy-policy` | **REWRITE** or **KEEP AS DRAFT** / **REMOVE** | Unapproved generated legal copy; incomplete for real compliance |
| `/terms-and-conditions` | **REWRITE** or **KEEP AS DRAFT** / **REMOVE** | Unapproved thin terms; no governing law / liability |
| `/refund-policy` | **REWRITE** or **KEEP AS DRAFT** / **REMOVE** | Unapproved refund commitments may not match business practice |

### Site-wide UNAPPROVED side effects (not page body, but already in code)

1. Footer copyright links to all five URLs  
2. All five paths in `sitemap.ts`  
3. All five set to `robots: { index: true, follow: true }` via `buildHubPageMetadata`  
4. Production currently still **404** for these paths (code exists locally; not observed live)

---

## Stop

Audit complete. **No further changes made.** Awaiting owner approval before any edit, rewrite, draft/noindex, removal, redirect, or screenshot capture pass.
