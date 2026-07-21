const fs = require('fs')
const path = 'src/data/service-page-seo.ts'
let s = fs.readFileSync(path, 'utf8')
const startMarker = "    slug: 'local-business-citation'"
const endMarker = "    slug: 'landing-page-optimization'"
const startIdx = s.indexOf(startMarker)
const endIdx = s.indexOf(endMarker)
if (startIdx < 0 || endIdx < 0) {
  throw new Error(`markers missing ${startIdx} ${endIdx}`)
}
// walk back to the opening `{` of the citation object
let start = startIdx
while (start > 0 && s.slice(start, start + 3) !== '  {') start--
const end = endIdx
// walk back to the opening `{` of landing-page object
let landingStart = endIdx
while (landingStart > 0 && s.slice(landingStart, landingStart + 3) !== '  {') landingStart--
s = s.slice(0, start) + s.slice(landingStart)
fs.writeFileSync(path, s)
console.log('removed local-business-citation block')
