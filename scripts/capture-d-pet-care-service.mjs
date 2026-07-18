import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import puppeteer from 'puppeteer'

const out = path.join('public', 'images', 'portfolio', 'd-pet-care')
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

async function check(url) {
  const res = await page.goto(url, { waitUntil: 'domcontentloaded' })
  console.log(url, res && res.status())
  return Boolean(res && res.ok())
}

for (const url of [
  'https://dpetcare.ae/services/',
  'https://dpetcare.ae/pricing/',
  'https://dpetcare.ae/faq/',
  'https://dpetcare.ae/book/',
  'https://dpetcare.ae/booking/',
  'https://dpetcare.ae/cat-sitting-dubai/',
]) {
  await check(url)
}

await page.goto('https://dpetcare.ae/services/', { waitUntil: 'domcontentloaded' })
await new Promise((r) => setTimeout(r, 2000))
const serviceLinks = await page.evaluate(() =>
  [...document.querySelectorAll('a[href]')]
    .map((a) => ({
      text: (a.textContent || '').trim().replace(/\s+/g, ' '),
      href: a.href,
    }))
    .filter(
      (l) =>
        l.href.includes('dpetcare.ae') &&
        /sitting|walking|boarding|overnight|daycare|groom|care|service/i.test(l.href),
    ),
)
const uniq = [...new Map(serviceLinks.map((l) => [l.href.replace(/\/$/, ''), l])).values()]
fs.writeFileSync('scripts/.d-pet-care-services.json', JSON.stringify(uniq, null, 2))
console.log('service links', uniq.length)

await page.goto('https://dpetcare.ae/cat-sitting-dubai/', { waitUntil: 'domcontentloaded' })
await new Promise((r) => setTimeout(r, 2500))
const png = path.join(out, 'd-pet-care-service-page.png')
await page.screenshot({ path: png })
await sharp(png).webp({ quality: 80 }).toFile(path.join(out, 'd-pet-care-service-page.webp'))
console.log('shot service')
await browser.close()
