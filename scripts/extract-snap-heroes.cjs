const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const assets = path.join(__dirname, '../tmp-snaps')
const outDir = path.join(__dirname, '../public')

const map = {
  'ppc-advertising': '9eb0cca9',
  'google-ads': 'efe0c2a9',
  'content-writing': 'd1278302',
  'social-media-marketing': '863fac43',
  'social-media-management': 'd735c8eb',
  'web-design': 'c66f6dee',
  'wordpress-development': '154e15c6',
  'shopify-development': '33d1d632',
}

;(async () => {
  for (const [slug, id] of Object.entries(map)) {
    const src = path.join(assets, `${id}.png`)
    if (!fs.existsSync(src)) {
      console.log('MISSING', slug, src)
      continue
    }
    const meta = await sharp(src).metadata()
    const w = meta.width
    const h = meta.height
    // Portrait full-page mockups: devices sit mid-hero (~top 8–24%, center x)
    const left = Math.max(0, Math.floor(w * 0.28))
    const top = Math.max(0, Math.floor(h * 0.075))
    const width = Math.min(w - left, Math.floor(w * 0.44))
    const height = Math.min(h - top, Math.floor(h * 0.18))

    const { data, info } = await sharp(src)
      .extract({ left, top, width, height })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      const avg = (r + g + b) / 3
      if ((avg > 230 && max - min < 24) || (avg > 200 && avg <= 230 && max - min < 12)) {
        data[i + 3] = 0
      }
    }

    const out = path.join(outDir, `snap-hero-${slug}.png`)
    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim({ threshold: 12 })
      .png()
      .toFile(out)

    const outMeta = await sharp(out).metadata()
    console.log(slug, `${outMeta.width}x${outMeta.height}`, '->', out)
  }
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
