import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import puppeteer from 'puppeteer'

const assets =
  'C:/Users/HUSSNAIN.COM/.cursor/projects/c-Users-HUSSNAIN-COM-Downloads-localseo-main/assets'
const out = path.join('public', 'images', 'portfolio', 'yara-luxe-interiors')
fs.mkdirSync(out, { recursive: true })

const files = fs.readdirSync(assets)
const gbp = files.find((f) => /image-ebef5967-54bf-469d-9a47-fc754376b8d8/.test(f))
if (!gbp) throw new Error('GBP screenshot not found')
fs.copyFileSync(path.join(assets, gbp), path.join(out, 'yara-luxe-google-business-profile.png'))
await sharp(path.join(out, 'yara-luxe-google-business-profile.png'))
  .webp({ quality: 82 })
  .toFile(path.join(out, 'yara-luxe-google-business-profile.webp'))
console.log('copied GBP')

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
await page.goto('https://yaraluxeinteriors.com.au/', { waitUntil: 'domcontentloaded' })
await new Promise((r) => setTimeout(r, 3500))

const architecture = await page.evaluate(() => {
  const links = [...document.querySelectorAll('a[href]')]
    .map((a) => ({
      text: (a.textContent || '').trim().replace(/\s+/g, ' '),
      href: a.href,
    }))
    .filter(
      (l) =>
        (l.href.includes('yaraluxeinteriors.com.au') || l.href.startsWith('/')) &&
        l.text &&
        l.text.length < 90,
    )

  const unique = []
  const seen = new Set()
  for (const l of links) {
    let href = l.href
    if (href.startsWith('/')) href = `https://yaraluxeinteriors.com.au${href}`
    const key = href.replace(/\/$/, '').toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    unique.push({ text: l.text, href })
  }

  return {
    title: document.title,
    nav: unique.slice(0, 120),
    headings: [...document.querySelectorAll('h1,h2')]
      .map((h) => (h.textContent || '').trim())
      .filter(Boolean)
      .slice(0, 30),
  }
})

fs.writeFileSync('scripts/.yara-architecture.json', JSON.stringify(architecture, null, 2))
console.log('nav links', architecture.nav.length)
console.log(JSON.stringify(architecture.nav.slice(0, 40), null, 2))

async function shot(url, file, viewport) {
  await page.setViewport(viewport)
  const res = await page.goto(url, { waitUntil: 'domcontentloaded' })
  console.log(url, res && res.status())
  if (!res || res.status() >= 400) return false
  await new Promise((r) => setTimeout(r, 2800))
  const png = path.join(out, `${file}.png`)
  await page.screenshot({ path: png })
  await sharp(png).webp({ quality: 80 }).toFile(path.join(out, `${file}.webp`))
  console.log('shot', file)
  return true
}

await shot('https://yaraluxeinteriors.com.au/', 'yara-luxe-homepage-desktop', {
  width: 1440,
  height: 900,
})
await shot('https://yaraluxeinteriors.com.au/', 'yara-luxe-homepage-mobile', {
  width: 390,
  height: 844,
})

const skip =
  /about|contact|blog|faq|privacy|terms|legal|book|consult|portfolio|project|home|#|mailto|tel|login|cart/i
const service = architecture.nav.find((l) => {
  const href = l.href.replace(/\/$/, '')
  if (href === 'https://yaraluxeinteriors.com.au') return false
  if (skip.test(href) && !/service/i.test(href)) return false
  if (skip.test(l.text) && !/service/i.test(l.text)) return false
  return /service|interior|design|renovation|styling|kitchen|bathroom|living/i.test(
    `${href} ${l.text}`,
  )
})

const portfolio = architecture.nav.find((l) =>
  /portfolio|project|our work|gallery/i.test(`${l.href} ${l.text}`),
)

console.log('service', service?.href)
console.log('portfolio', portfolio?.href)

if (service?.href) {
  await shot(service.href, 'yara-luxe-service-page', { width: 1440, height: 900 })
}
if (portfolio?.href) {
  await shot(portfolio.href, 'yara-luxe-portfolio-page', { width: 1440, height: 900 })
}

await browser.close()
console.log(fs.readdirSync(out).join('\n'))
