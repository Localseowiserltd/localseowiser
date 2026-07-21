const fs = require('fs')
const path = 'src/data/site-content.ts'
let s = fs.readFileSync(path, 'utf8')

if (!s.includes("from './service-page-snap'")) {
  s = s.replace(
    "import { seoServicePages } from './service-page-seo'",
    "import { seoServicePages } from './service-page-seo'\nimport { snapServicePages } from './service-page-snap'",
  )
}

const start = s.indexOf('export const servicePages: ServicePage[] = [')
const end = s.indexOf('export const getServicePageBySlug')
if (start < 0 || end < 0) {
  throw new Error(`markers missing ${start} ${end}`)
}

const replacement = `export const servicePages: ServicePage[] = [
  ...(seoServicePages as ServicePage[]),
  ...(snapServicePages as unknown as ServicePage[]),
]

`

s = s.slice(0, start) + replacement + s.slice(end)
fs.writeFileSync(path, s)
console.log('rewrote servicePages ok, bytes', s.length)
