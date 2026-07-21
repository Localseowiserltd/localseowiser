const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const srcDir = 'C:/Users/HUSSNAIN.COM/.cursor/projects/c-Users-HUSSNAIN-COM-Downloads-localseo-main/assets'
const outDir = path.join(__dirname, '../public')

const slugs = [
  'ppc-advertising',
  'google-ads',
  'content-writing',
  'social-media-marketing',
  'social-media-management',
  'web-design',
  'wordpress-development',
  'shopify-development',
  'link-building',
  'local-business-citation',
]

// Flood-fill near-white pixels connected to the image border so the
// white dashboard areas inside the laptop screen keep their pixels.
function removeOuterWhite(data, width, height) {
  const isWhite = (i) => {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    return r > 236 && g > 236 && b > 236 && Math.max(r, g, b) - Math.min(r, g, b) < 20
  }
  const visited = new Uint8Array(width * height)
  const stack = []
  const push = (x, y) => {
    const p = y * width + x
    if (!visited[p] && isWhite(p * 4)) {
      visited[p] = 1
      stack.push(p)
    }
  }
  for (let x = 0; x < width; x++) {
    push(x, 0)
    push(x, height - 1)
  }
  for (let y = 0; y < height; y++) {
    push(0, y)
    push(width - 1, y)
  }
  while (stack.length) {
    const p = stack.pop()
    data[p * 4 + 3] = 0
    const x = p % width
    const y = (p / width) | 0
    if (x > 0) push(x - 1, y)
    if (x < width - 1) push(x + 1, y)
    if (y > 0) push(x, y - 1)
    if (y < height - 1) push(x, y + 1)
  }
}

;(async () => {
  const dims = {}
  for (const slug of slugs) {
    const src = path.join(srcDir, `gen-hero-${slug}.png`)
    if (!fs.existsSync(src)) {
      console.log('MISSING', src)
      continue
    }
    const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
    removeOuterWhite(data, info.width, info.height)
    const out = path.join(outDir, `snap-hero-${slug}.png`)
    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim({ threshold: 1 })
      .png({ compressionLevel: 9 })
      .toFile(out)
    const meta = await sharp(out).metadata()
    dims[slug] = { width: meta.width, height: meta.height }
    console.log(slug, `${meta.width}x${meta.height}`)
  }
  fs.writeFileSync(path.join(__dirname, 'gen-hero-dims.json'), JSON.stringify(dims, null, 2))
})().catch((err) => {
  console.error(err)
  process.exit(1)
})
