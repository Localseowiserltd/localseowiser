import fs from 'fs'
import path from 'path'

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.node-portable', 'dist', '.git'].includes(ent.name)) continue
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) walk(p, acc)
    else if (/\.(ts|tsx|js|jsx|md|mjs)$/.test(ent.name)) acc.push(p)
  }
  return acc
}

function collectAppRoutes(dir, base = '') {
  const routes = new Set()
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (ent.name.startsWith('(') && ent.name.endsWith(')')) {
        for (const r of collectAppRoutes(p, base)) routes.add(r)
      } else {
        const next = `${base}/${ent.name}`
        for (const r of collectAppRoutes(p, next)) routes.add(r)
      }
    } else if (ent.name === 'page.tsx' || ent.name === 'page.ts') {
      routes.add(base || '/')
    }
  }
  return [...routes]
}

const staticRoutes = new Set(
  collectAppRoutes(path.join('src', 'app')).filter((r) => !r.includes('[')),
)

function extractSlugs(globDir) {
  const slugs = new Set()
  for (const f of walk(globDir)) {
    const t = fs.readFileSync(f, 'utf8')
    const re = /slug:\s*'([a-z0-9-]+)'/g
    let m
    while ((m = re.exec(t))) slugs.add(m[1])
  }
  return slugs
}

const blogSlugs = extractSlugs('src/data/blog')
blogSlugs.delete('local-seowiser-editorial-team')

const portfolioSlugs = extractSlugs('src/data/portfolio')

const siteContent = fs.readFileSync('src/data/site-content.ts', 'utf8')
const serviceSeo = fs.readFileSync('src/data/service-page-seo.ts', 'utf8')
const serviceSlugs = new Set()
{
  for (const src of [siteContent, serviceSeo]) {
    const re = /slug:\s*'([a-z0-9-]+)'/g
    let m
    while ((m = re.exec(src))) serviceSlugs.add(m[1])
  }
}

const locationPaths = new Set()
for (const f of walk('src/data/locations')) {
  const t = fs.readFileSync(f, 'utf8')
  const pathM = t.match(/path:\s*'(\/[^']+)'/)
  const slugM = t.match(/slug:\s*'([a-z0-9-]+)'/)
  if (pathM) locationPaths.add(pathM[1])
  else if (slugM) locationPaths.add(`/areas/${slugM[1]}`)
}
for (const r of staticRoutes) {
  if (r.startsWith('/local-seo-') && !r.includes('for-')) locationPaths.add(r)
}

const industryPaths = new Set()
for (const f of walk('src/data/industries')) {
  const t = fs.readFileSync(f, 'utf8')
  const pathM = t.match(/path:\s*'(\/[^']+)'/)
  const slugM = t.match(/slug:\s*'([a-z0-9-]+)'/)
  if (pathM) industryPaths.add(pathM[1])
  else if (slugM) industryPaths.add(`/${slugM[1]}`)
}

function isValidPath(p) {
  if (
    !p ||
    p.startsWith('http') ||
    p.startsWith('mailto:') ||
    p.startsWith('tel:') ||
    p.startsWith('#') ||
    p.startsWith('?')
  ) {
    return true
  }
  const clean = p.split('?')[0].split('#')[0].replace(/\/$/, '') || '/'
  if (staticRoutes.has(clean) || clean === '/') return true
  if (clean.startsWith('/blog/')) return blogSlugs.has(clean.slice('/blog/'.length))
  if (clean.startsWith('/portfolio/')) return portfolioSlugs.has(clean.slice('/portfolio/'.length))
  if (clean.startsWith('/areas/')) return true
  const parts = clean.slice(1).split('/')
  if (parts.length === 1 && serviceSlugs.has(parts[0])) return true
  if (locationPaths.has(clean)) return true
  if (industryPaths.has(clean)) return true
  if (clean.startsWith('/local-seo-')) return staticRoutes.has(clean)
  return false
}

const linkHits = []
const extractRes = [
  /href:\s*['"](\/[^'"]+)['"]/g,
  /href=['"](\/[^'"]+)['"]/g,
  /\]\((\/[a-zA-Z0-9_/?#.-]+)\)/g,
  /permanentRedirect\(`?(\/[^`'"]+)/g,
  /destination:\s*`(\/[^`]+)`/g,
  /destination:\s*'(\/[^']+)'/g,
  /path:\s*['"](\/[^'"]+)['"]/g,
  /buildAbsoluteUrl\(['"](\/[^'"]+)['"]\)/g,
  /\$\{SITE_ORIGIN\}(\/[a-zA-Z0-9_/?-]*)/g,
]

for (const f of walk('src')) {
  const lines = fs.readFileSync(f, 'utf8').split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (const re of extractRes) {
      re.lastIndex = 0
      let mm
      while ((mm = re.exec(line))) {
        let link = mm[1]
        if (link.includes('${') || link.includes('{')) continue
        link = link.split('?')[0].split('#')[0]
        if (!link.startsWith('/')) continue
        const norm = link.replace(/\/$/, '') || '/'
        linkHits.push({
          path: norm,
          file: f.replace(/\\/g, '/'),
          line: i + 1,
        })
      }
    }
  }
}

const broken = []
const ok = new Map()
for (const h of linkHits) {
  if (isValidPath(h.path)) ok.set(h.path, (ok.get(h.path) || 0) + 1)
  else broken.push(h)
}

const hubs = [
  '/about',
  '/contact',
  '/blog',
  '/portfolio',
  '/faq',
  '/privacy-policy',
  '/terms-and-conditions',
  '/refund-policy',
  '/services',
  '/packages',
]

console.log('=== HUB PAGE EXISTENCE ===')
for (const h of hubs) {
  console.log(
    JSON.stringify({
      path: h,
      route: staticRoutes.has(h),
      refs: ok.get(h) || 0,
    }),
  )
}

const sitemapFile = fs.readFileSync('src/app/sitemap.ts', 'utf8')
console.log('\n=== SITEMAP CONTAINS HUBS ===')
for (const h of hubs) {
  console.log(h, sitemapFile.includes(`'${h}'`) ? 'IN_SITEMAP' : 'NOT_IN_SITEMAP')
}

const navFile = fs.readFileSync('src/components/navTopbar/NavTopBar.tsx', 'utf8')
const footerFile = fs.readFileSync('src/components/layout/SiteFooter.tsx', 'utf8')
console.log('\n=== NAV LINKS ===')
console.log([...navFile.matchAll(/href=["'](\/[^"']+)["']/g)].map((x) => x[1]).filter((v, i, a) => a.indexOf(v) === i).join(', '))
console.log('=== FOOTER LINKS ===')
console.log([...footerFile.matchAll(/href=["'](\/[^"']+)["']/g)].map((x) => x[1]).filter((v, i, a) => a.indexOf(v) === i).join(', '))

// old / alternate legal URLs
const altLegal = [
  '/privacy',
  '/terms',
  '/refund',
  '/refunds',
  '/terms-of-service',
  '/terms-of-use',
  '/privacy_policy',
  '/tos',
]
console.log('\n=== OLD LEGAL URL REFERENCES ===')
for (const a of altLegal) {
  const hits = linkHits.filter((h) => h.path === a)
  console.log(a, hits.length ? hits.map((h) => `${h.file}:${h.line}`).join('; ') : 'none')
}

console.log(`\n=== BROKEN INTERNAL LINKS (${broken.length}) ===`)
const byPath = new Map()
for (const b of broken) {
  if (!byPath.has(b.path)) byPath.set(b.path, [])
  byPath.get(b.path).push(b)
}
const sorted = [...byPath.entries()].sort((a, b) => b[1].length - a[1].length)
for (const [p, hits] of sorted) {
  console.log(`${p} x${hits.length}`)
  for (const h of hits.slice(0, 5)) console.log(`   ${h.file}:${h.line}`)
}

// canonical/path consistency for hub-seo builders vs pages
console.log('\n=== CANONICAL/PATH SELF-CHECK (hub-seo) ===')
const hubSeo = fs.readFileSync('src/lib/hub-seo.ts', 'utf8')
for (const h of hubs) {
  const mentioned = hubSeo.includes(`'${h}'`) || hubSeo.includes(`"${h}"`)
  console.log(h, mentioned ? 'IN_HUB_SEO' : 'not in hub-seo helpers')
}

console.log('\n=== SUMMARY ===')
console.log(
  JSON.stringify(
    {
      staticRoutes: staticRoutes.size,
      linkHits: linkHits.length,
      uniqueOk: ok.size,
      brokenUnique: byPath.size,
      brokenTotal: broken.length,
      blogSlugs: [...blogSlugs].sort(),
      serviceSlugCount: serviceSlugs.size,
    },
    null,
    2,
  ),
)
