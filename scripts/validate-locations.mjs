/**
 * Build-time / CI validation for location pages.
 * Confirms registry + dedicated location files exist; publish gating is enforced
 * by assertNoInvalidApprovedLocations on module load during next build.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const locationsDir = path.join(root, 'src', 'data', 'locations')
const indexPath = path.join(locationsDir, 'index.ts')
const source = fs.readFileSync(indexPath, 'utf8')

const stubMatches = [...source.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const uniqueStubSlugs = [...new Set(stubMatches)]

const dedicatedFiles = fs
  .readdirSync(locationsDir)
  .filter((name) => name.endsWith('.ts') && name !== 'index.ts')

if (!source.includes('createEmptyLocationPage') && dedicatedFiles.length === 0) {
  console.error('validate-locations: expected location stubs or dedicated location data files')
  process.exit(1)
}

if (!source.includes('localSeoShadyside') && !dedicatedFiles.includes('local-seo-shadyside.ts')) {
  console.error('validate-locations: expected local-seo-shadyside to be registered')
  process.exit(1)
}

if (
  !source.includes('localSeoLawrenceville') &&
  !dedicatedFiles.includes('local-seo-lawrenceville.ts')
) {
  console.error('validate-locations: expected local-seo-lawrenceville to be registered')
  process.exit(1)
}

if (!source.includes('localSeoOakland') && !dedicatedFiles.includes('local-seo-oakland.ts')) {
  console.error('validate-locations: expected local-seo-oakland to be registered')
  process.exit(1)
}

if (
  !source.includes('localSeoSquirrelHill') &&
  !dedicatedFiles.includes('local-seo-squirrel-hill.ts')
) {
  console.error('validate-locations: expected local-seo-squirrel-hill to be registered')
  process.exit(1)
}

const codeWithoutComments = source
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\/\/.*$/gm, '')

if (/status:\s*'approved'/.test(codeWithoutComments) || /contentApproved:\s*true/.test(codeWithoutComments)) {
  console.log(
    'validate-locations: approved flags in index — assertNoInvalidApprovedLocations enforces content completeness during next build.',
  )
}

for (const file of dedicatedFiles) {
  const fileSource = fs.readFileSync(path.join(locationsDir, file), 'utf8')
  const fileCode = fileSource.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '')
  if (/status:\s*'approved'/.test(fileCode) && /contentApproved:\s*true/.test(fileCode)) {
    const hasMeta =
      /metaTitle:\s*'[^']+'/.test(fileCode) && !/metaTitle:\s*''/.test(fileCode)
    if (!hasMeta) {
      console.error(
        `validate-locations: ${file} is marked approved/contentApproved but metaTitle appears empty`,
      )
      process.exit(1)
    }
  }
}

console.log(
  `validate-locations: OK — ${uniqueStubSlugs.length} stub(s), ${dedicatedFiles.length} dedicated file(s); publish gated by validation.`,
)
console.log(`stubs: ${uniqueStubSlugs.join(', ') || '(none)'}`)
console.log(`files: ${dedicatedFiles.join(', ') || '(none)'}`)
