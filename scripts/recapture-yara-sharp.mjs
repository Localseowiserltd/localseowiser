import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import puppeteer from 'puppeteer'

const out = path.join('public', 'images', 'portfolio', 'yara-luxe-interiors')
fs.mkdirSync(out, { recursive: true })

const executablePath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
page.setDefaultNavigationTimeout(120000)

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0
      const distance = 600
      const timer = setInterval(() => {
        const { scrollHeight } = document.documentElement
        window.scrollBy(0, distance)
        total += distance
        if (total >= scrollHeight) {
          clearInterval(timer)
          window.scrollTo(0, 0)
          resolve(null)
        }
      }, 200)
    })
  })
}

async function saveSharp(pngPath, file) {
  const meta = await sharp(pngPath).metadata()
  const maxHeight = 12000
  let pipeline = sharp(pngPath)
  if ((meta.height || 0) > maxHeight) {
    pipeline = pipeline.resize({ height: maxHeight, fit: 'inside', withoutEnlargement: true })
  }
  const webpPath = path.join(out, `${file}.webp`)
  await pipeline.webp({ quality: 90, effort: 4 }).toFile(webpPath)
  const outMeta = await sharp(webpPath).metadata()
  console.log(
    'saved',
    file,
    `${meta.width}x${meta.height}`,
    '->',
    `${outMeta.width}x${outMeta.height}`,
    `${Math.round(fs.statSync(webpPath).size / 1024)}KB`,
  )
}

async function shot(url, file, { width, height, fullPage }) {
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  const res = await page.goto(url, { waitUntil: 'networkidle2' })
  console.log(url, res && res.status())
  if (!res || res.status() >= 400) return
  await page.evaluate(() => {
    const bar = document.getElementById('wpadminbar')
    if (bar) bar.style.display = 'none'
  })
  await autoScroll(page)
  await new Promise((r) => setTimeout(r, 2000))
  const pngPath = path.join(out, `${file}.png`)
  await page.screenshot({ path: pngPath, fullPage, type: 'png' })
  await saveSharp(pngPath, file)
}

await shot('https://yaraluxeinteriors.com.au/', 'yara-luxe-homepage-desktop', {
  width: 1440,
  height: 900,
  fullPage: true,
})
await shot('https://yaraluxeinteriors.com.au/', 'yara-luxe-homepage-alt', {
  width: 1440,
  height: 900,
  fullPage: false,
})
await shot('https://yaraluxeinteriors.com.au/', 'yara-luxe-homepage-mobile', {
  width: 390,
  height: 844,
  fullPage: true,
})
await shot(
  'https://yaraluxeinteriors.com.au/our-services/design-concept-development/',
  'yara-luxe-service-page',
  { width: 1440, height: 900, fullPage: true },
)
await shot('https://yaraluxeinteriors.com.au/portfolio-yarra/', 'yara-luxe-portfolio-page', {
  width: 1440,
  height: 900,
  fullPage: true,
})

// Also extract sharp service screenshots from user's PDF screencaptures when available
const downloads = 'C:/Users/HUSSNAIN.COM/Downloads'
const pdfMap = [
  ['residential-interior-design-html', 'yara-luxe-service-residential'],
  ['kitchen-interior-design-html-2026-06-05-23_45_55', 'yara-luxe-service-kitchen'],
  ['full-home-interior-design-8-html', 'yara-luxe-service-full-home'],
]

try {
  const { pdf } = await import('pdf-to-img')
  for (const [match, name] of pdfMap) {
    const file = fs.readdirSync(downloads).find((f) => f.includes(match) && f.endsWith('.pdf'))
    if (!file) {
      console.log('no pdf', match)
      continue
    }
    const doc = await pdf(path.join(downloads, file), { scale: 2 })
    let i = 0
    for await (const image of doc) {
      i += 1
      if (i !== 1) continue
      const pngPath = path.join(out, `${name}.png`)
      fs.writeFileSync(pngPath, image)
      await saveSharp(pngPath, name)
    }
  }
} catch (e) {
  console.log('pdf extract skipped:', e.message)
}

await browser.close()
