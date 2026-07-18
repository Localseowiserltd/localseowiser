import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'
import sharp from 'sharp'

const out = path.join('public', 'images', 'portfolio', 'mbc-renovation')
fs.mkdirSync(out, { recursive: true })

const assetsDir =
  'C:/Users/HUSSNAIN.COM/.cursor/projects/c-Users-HUSSNAIN-COM-Downloads-localseo-main/assets'

const copies = [
  [
    'c__Users_HUSSNAIN.COM_AppData_Roaming_Cursor_User_workspaceStorage_e95df8e6c8824fd14e22fbc5e3cca863_images_Google_saerch_Console-04b3fda6-2336-48a4-97bc-33960532371b.png',
    'mbc-renovation-search-console.png',
  ],
  [
    'c__Users_HUSSNAIN.COM_AppData_Roaming_Cursor_User_workspaceStorage_e95df8e6c8824fd14e22fbc5e3cca863_images_google_Business_Profile_-42b3b308-14b6-4f82-b171-2dcda7619c6b.png',
    'mbc-renovation-google-business-profile.png',
  ],
  [
    'c__Users_HUSSNAIN.COM_AppData_Roaming_Cursor_User_workspaceStorage_e95df8e6c8824fd14e22fbc5e3cca863_images_keywords_search_conole-fd36bbbf-0e98-4ab3-ae9a-f4f342013b77.png',
    'mbc-renovation-search-queries.png',
  ],
]

for (const [src, dest] of copies) {
  const from = path.join(assetsDir, src)
  const toPng = path.join(out, dest)
  const toWebp = path.join(out, dest.replace('.png', '.webp'))
  fs.copyFileSync(from, toPng)
  await sharp(toPng).webp({ quality: 82 }).toFile(toWebp)
  console.log('copied', dest)
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

async function shot(url, file, viewport) {
  await page.setViewport(viewport)
  await page.goto(url, { waitUntil: 'domcontentloaded' })
  await new Promise((r) => setTimeout(r, 2500))
  const pngPath = path.join(out, `${file}.png`)
  await page.screenshot({ path: pngPath })
  await sharp(pngPath).webp({ quality: 80 }).toFile(path.join(out, `${file}.webp`))
  console.log('shot', file)
}

await shot('https://mbcrenovation.ae/', 'mbc-renovation-homepage-desktop', {
  width: 1440,
  height: 900,
})
await shot('https://mbcrenovation.ae/', 'mbc-renovation-homepage-mobile', {
  width: 390,
  height: 844,
})

const candidates = [
  ['https://mbcrenovation.ae/about/', 'mbc-renovation-about-page'],
  ['https://mbcrenovation.ae/about-us/', 'mbc-renovation-about-page'],
  ['https://mbcrenovation.ae/contact/', 'mbc-renovation-contact-page'],
  ['https://mbcrenovation.ae/contact-us/', 'mbc-renovation-contact-page'],
]

for (const [url, file] of candidates) {
  try {
    await page.setViewport({ width: 1440, height: 900 })
    const res = await page.goto(url, { waitUntil: 'domcontentloaded' })
    if (res && res.ok() && !fs.existsSync(path.join(out, `${file}.webp`))) {
      await new Promise((r) => setTimeout(r, 2000))
      const pngPath = path.join(out, `${file}.png`)
      await page.screenshot({ path: pngPath })
      await sharp(pngPath).webp({ quality: 80 }).toFile(path.join(out, `${file}.webp`))
      console.log('shot', file, url)
    } else {
      console.log('skip', url, res && res.status())
    }
  } catch (e) {
    console.log('fail', url, e.message)
  }
}

await page.setViewport({ width: 1440, height: 900 })
await page.goto('https://mbcrenovation.ae/', { waitUntil: 'domcontentloaded' })
await new Promise((r) => setTimeout(r, 2000))
const serviceHref = await page.evaluate(() => {
  const links = [...document.querySelectorAll('a[href]')].map((a) => a.href)
  return (
    links.find((h) => {
      const clean = h.replace(/\/$/, '')
      return (
        /renovation|kitchen|bathroom|villa|service|apartment|flooring/i.test(h) &&
        !/#|tel:|mailto:|wp-admin|facebook|instagram|linkedin|whatsapp|twitter/i.test(h) &&
        h.includes('mbcrenovation.ae') &&
        clean !== 'https://mbcrenovation.ae'
      )
    }) || null
  )
})
console.log('serviceHref', serviceHref)
if (serviceHref) {
  await page.goto(serviceHref, { waitUntil: 'domcontentloaded' })
  await new Promise((r) => setTimeout(r, 2000))
  const pngPath = path.join(out, 'mbc-renovation-service-page.png')
  await page.screenshot({ path: pngPath })
  await sharp(pngPath).webp({ quality: 80 }).toFile(path.join(out, 'mbc-renovation-service-page.webp'))
  console.log('shot service')
}

await page.goto('https://mbcrenovation.ae/', { waitUntil: 'domcontentloaded' })
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await new Promise((r) => setTimeout(r, 1500))
const footerPng = path.join(out, 'mbc-renovation-footer.png')
await page.screenshot({ path: footerPng })
await sharp(footerPng).webp({ quality: 80 }).toFile(path.join(out, 'mbc-renovation-footer.webp'))
console.log('shot footer')

await browser.close()
console.log('files', fs.readdirSync(out))
