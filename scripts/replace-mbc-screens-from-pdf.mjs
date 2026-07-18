import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'
import sharp from 'sharp'

const downloads = 'C:\\Users\\HUSSNAIN.COM\\Downloads'
const out = path.join('public', 'images', 'portfolio', 'mbc-renovation')
fs.mkdirSync(out, { recursive: true })

const chrome =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const mapping = [
  {
    pdf: 'screencapture-mbcrenovation-ae-2026-07-17-21_45_30.pdf',
    base: 'mbc-renovation-homepage-desktop',
  },
  {
    pdf: 'screencapture-mbcrenovation-ae-2026-07-17-21_46_02.pdf',
    base: 'mbc-renovation-homepage-mobile',
  },
  {
    pdf: 'screencapture-mbcrenovation-ae-about-us-2026-07-17-22_19_51.pdf',
    base: 'mbc-renovation-about-page',
  },
  {
    pdf: 'screencapture-mbcrenovation-ae-contact-us-2026-07-17-22_19_14.pdf',
    base: 'mbc-renovation-contact-page',
  },
  {
    pdf: 'screencapture-mbcrenovation-ae-villa-renovation-dubai-2026-07-17-22_20_26.pdf',
    base: 'mbc-renovation-service-page',
  },
]

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: chrome,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files'],
})

const page = await browser.newPage()
page.setDefaultNavigationTimeout(120000)

for (const item of mapping) {
  const pdfPath = path.join(downloads, item.pdf)
  if (!fs.existsSync(pdfPath)) {
    console.error('missing', pdfPath)
    continue
  }

  const fileUrl = 'file:///' + pdfPath.replace(/\\/g, '/')
  console.log('rendering', item.pdf)

  // Use a wide viewport; PDF screencaptures are usually full-page tall
  await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 1 })
  await page.goto(fileUrl, { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1500))

  // Expand to full PDF height via scrollHeight of embed/viewer
  const dims = await page.evaluate(async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms))
    // Chrome PDF viewer uses embed
    const embed = document.querySelector('embed') || document.querySelector('iframe')
    if (embed) {
      await wait(800)
    }
    const body = document.body
    const html = document.documentElement
    return {
      width: Math.max(body.scrollWidth, html.scrollWidth, 1440),
      height: Math.max(body.scrollHeight, html.scrollHeight, 1200),
    }
  })

  // For Chrome's PDF viewer, fullPage screenshot often works better
  await page.setViewport({
    width: Math.min(Math.max(dims.width, 1200), 1600),
    height: Math.min(Math.max(dims.height, 900), 8000),
    deviceScaleFactor: 1,
  })
  await new Promise((r) => setTimeout(r, 500))

  const pngPath = path.join(out, `${item.base}.png`)
  await page.screenshot({ path: pngPath, fullPage: true })

  const meta = await sharp(pngPath).metadata()
  console.log(item.base, meta.width, meta.height)

  // Keep a practical max height for web (crop top portion if extremely tall for card use,
  // but keep full page for gallery - compress as webp)
  let pipeline = sharp(pngPath)
  if ((meta.height || 0) > 12000) {
    pipeline = sharp(pngPath).extract({
      left: 0,
      top: 0,
      width: meta.width || 1200,
      height: 12000,
    })
  }

  await pipeline.webp({ quality: 78 }).toFile(path.join(out, `${item.base}.webp`))
  console.log('wrote', item.base)
}

await browser.close()

// Footer: crop bottom portion from desktop homepage if available
const homePng = path.join(out, 'mbc-renovation-homepage-desktop.png')
if (fs.existsSync(homePng)) {
  const meta = await sharp(homePng).metadata()
  const w = meta.width || 1440
  const h = meta.height || 2000
  const cropH = Math.min(1100, Math.floor(h * 0.28))
  const top = Math.max(0, h - cropH)
  await sharp(homePng)
    .extract({ left: 0, top, width: w, height: cropH })
    .webp({ quality: 78 })
    .toFile(path.join(out, 'mbc-renovation-footer.webp'))
  await sharp(homePng)
    .extract({ left: 0, top, width: w, height: cropH })
    .png()
    .toFile(path.join(out, 'mbc-renovation-footer.png'))
  console.log('footer cropped from homepage bottom')
}

console.log('done', fs.readdirSync(out).filter((f) => f.endsWith('.webp')))
