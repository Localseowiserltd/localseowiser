import sharp from 'sharp'
import fs from 'fs'

function pngToIco(pngBuffers) {
  const count = pngBuffers.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)
  const parts = [header]
  let offset = 6 + count * 16
  for (const png of pngBuffers) {
    const entry = Buffer.alloc(16)
    const w = png.readUInt32BE(16)
    const h = png.readUInt32BE(20)
    entry.writeUInt8(w >= 256 ? 0 : w, 0)
    entry.writeUInt8(h >= 256 ? 0 : h, 1)
    entry.writeUInt8(0, 2)
    entry.writeUInt8(0, 3)
    entry.writeUInt16LE(1, 4)
    entry.writeUInt16LE(32, 6)
    entry.writeUInt32LE(png.length, 8)
    entry.writeUInt32LE(offset, 12)
    parts.push(entry)
    offset += png.length
  }
  for (const png of pngBuffers) parts.push(png)
  return Buffer.concat(parts)
}

const src = 'public/favicon-pin.png'
const png16 = await sharp(src)
  .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer()
const png32 = await sharp(src)
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer()
const png48 = await sharp(src)
  .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer()

await sharp(png16).toFile('public/favicon-16.png')
await sharp(png32).toFile('public/favicon-32.png')
await sharp(src)
  .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/apple-touch-icon.png')

const ico = pngToIco([png16, png32, png48])
fs.writeFileSync('public/favicon.ico', ico)
fs.writeFileSync('src/app/favicon.ico', ico)

await sharp(src)
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('src/app/icon.png')
await sharp(src)
  .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('src/app/apple-icon.png')

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <path d="M32 4C20.4 4 11 13.4 11 25c0 14.2 16.2 30.6 19.4 33.6a2.2 2.2 0 0 0 3.2 0C36.8 55.6 53 39.2 53 25 53 13.4 43.6 4 32 4z" fill="#F15A24"/>
  <circle cx="32" cy="24" r="10" fill="#111111"/>
  <ellipse cx="32" cy="60" rx="10" ry="2.5" stroke="#555555" stroke-width="2" fill="none"/>
</svg>`
fs.writeFileSync('public/favicon.svg', svg)
console.log('favicon built', { icoBytes: ico.length })
