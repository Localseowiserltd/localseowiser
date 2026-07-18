import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import puppeteer from 'puppeteer'

const assets =
  'C:/Users/HUSSNAIN.COM/.cursor/projects/c-Users-HUSSNAIN-COM-Downloads-localseo-main/assets'
const out = path.join('public', 'images', 'portfolio', 'd-pet-care')
fs.mkdirSync(out, { recursive: true })

const files = fs.readdirSync(assets)
const map = [
  [/keywords_console-f93fb35d/, 'd-pet-care-search-queries.png'],
  [/google_business_profile-2328ce66/, 'd-pet-care-google-business-profile.png'],
  [/Search_Console-02a72223/, 'd-pet-care-search-console.png'],
  [/Semrush_snapshot-87950a3f/, 'd-pet-care-semrush-domain-overview.png'],
]

for (const [re, name] of map) {
  const hit = files.find((f) => re.test(f))
  if (!hit) {
    console.log('MISSING', String(re))
    continue
  }
  fs.copyFileSync(path.join(assets, hit), path.join(out, name))
  await sharp(path.join(out, name))
    .webp({ quality: 82 })
    .toFile(path.join(out, name.replace('.png', '.webp')))
  console.log('copied', name)
}

const executablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
page.setDefaultNavigationTimeout(90000)

await page.setViewport({ width: 1440, height: 900 })
await page.goto('https://dpetcare.ae/', { waitUntil: 'domcontentloaded' })
await new Promise((r) => setTimeout(r, 3000))

const architecture = await page.evaluate(() => {
  const links = [...document.querySelectorAll('a[href]')]
    .map((a) => ({
      text: (a.textContent || '').trim().replace(/\s+/g, ' '),
      href: a.href,
    }))
    .filter((l) => l.href.includes('dpetcare.ae') && l.text && l.text.length < 80)

  const unique = []
  const seen = new Set()
  for (const l of links) {
    const key = l.href.replace(/\/$/, '').toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(l)
  }

  return {
    title: document.title,
    nav: unique.slice(0, 100),
    headings: [...document.querySelectorAll('h1,h2')]
      .map((h) => h.textContent.trim())
      .filter(Boolean)
      .slice(0, 25),
  }
})

fs.writeFileSync('scripts/.d-pet-care-architecture.json', JSON.stringify(architecture, null, 2))
console.log('architecture links:', architecture.nav.length)

async function shot(url, file, viewport) {
  await page.setViewport(viewport)
  const res = await page.goto(url, { waitUntil: 'domcontentloaded' })
  console.log(url, res && res.status())
  if (!res || res.status() >= 400) return false
  await new Promise((r) => setTimeout(r, 2500))
  const png = path.join(out, `${file}.png`)
  await page.screenshot({ path: png })
  await sharp(png).webp({ quality: 80 }).toFile(path.join(out, `${file}.webp`))
  console.log('shot', file)
  return true
}

await shot('https://dpetcare.ae/', 'd-pet-care-homepage-desktop', { width: 1440, height: 900 })
await shot('https://dpetcare.ae/', 'd-pet-care-homepage-mobile', { width: 390, height: 844 })

const skip = /about|contact|blog|pricing|faq|trust|community|privacy|terms|booking|book|login|cart|account|guideline|legal|policy/i
const service = architecture.nav.find((l) => {
  const href = l.href.replace(/\/$/, '')
  if (href === 'https://dpetcare.ae') return false
  if (skip.test(href) || skip.test(l.text)) return false
  return /pet|dog|cat|sitting|walking|boarding|groom|daycare|care|service/i.test(href + ' ' + l.text)
})

console.log('serviceUrl', service?.href)
if (service?.href) {
  await shot(service.href, 'd-pet-care-service-page', { width: 1440, height: 900 })
}

await browser.close()
console.log(fs.readdirSync(out).join('\n'))
