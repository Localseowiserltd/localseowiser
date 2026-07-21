#!/usr/bin/env node
/**
 * Production smoke checks for critical public routes.
 *
 * Usage:
 *   node scripts/smoke-test.mjs
 *   SMOKE_BASE_URL=https://localseowiser.com node scripts/smoke-test.mjs
 *   SMOKE_BASE_URL=http://localhost:3456 node scripts/smoke-test.mjs
 */

const baseUrl = (process.env.SMOKE_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')

const routes = [
  { path: '/', expectStatus: 200 },
  { path: '/local-seo', expectStatus: 200 },
  { path: '/areas', expectStatus: 200 },
  { path: '/local-seo-oakland', expectStatus: 200 },
  { path: '/local-seo-for-dentists', expectStatus: 200 },
  { path: '/blog/what-is-local-seo', expectStatus: 200 },
  { path: '/portfolio', expectStatus: 200 },
  { path: '/contact', expectStatus: 200 },
  { path: '/services', expectStatus: 200 },
  { path: '/sitemap.xml', expectStatus: 200 },
  { path: '/robots.txt', expectStatus: 200 },
  {
    path: '/llms.txt',
    expectStatus: 200,
    expectContentTypeIncludes: 'text/plain',
    expectBodyIncludes: '# Local SEO Wiser',
  },
  { path: '/packages', expectStatus: [308, 301, 307, 302] },
]

const failures = []

async function checkRoute(route) {
  const url = `${baseUrl}${route.path}`
  const expected = Array.isArray(route.expectStatus) ? route.expectStatus : [route.expectStatus]

  let response
  try {
    response = await fetch(url, { redirect: 'manual' })
  } catch (error) {
    failures.push(`${route.path}: request failed (${error.message})`)
    console.log(`FAIL ${route.path} — request failed`)
    return
  }

  const statusOk = expected.includes(response.status)
  const contentType = response.headers.get('content-type') || ''
  const body = route.expectBodyIncludes || route.expectContentTypeIncludes ? await response.text() : ''

  let contentTypeOk = true
  if (route.expectContentTypeIncludes) {
    contentTypeOk = contentType.toLowerCase().includes(route.expectContentTypeIncludes.toLowerCase())
  }

  let bodyOk = true
  if (route.expectBodyIncludes) {
    bodyOk = body.includes(route.expectBodyIncludes)
  }

  if (statusOk && contentTypeOk && bodyOk) {
    const extra = route.path === '/llms.txt' ? ` content-type=${contentType}` : ''
    console.log(`PASS ${response.status} ${route.path}${extra}`)
    return
  }

  const details = [
    !statusOk ? `status=${response.status} expected=${expected.join('|')}` : null,
    !contentTypeOk ? `content-type=${contentType}` : null,
    !bodyOk ? 'body missing expected marker' : null,
  ]
    .filter(Boolean)
    .join('; ')

  failures.push(`${route.path}: ${details}`)
  console.log(`FAIL ${route.path} — ${details}`)
}

async function main() {
  console.log(`Smoke testing ${baseUrl}`)
  for (const route of routes) {
    await checkRoute(route)
  }

  if (failures.length) {
    console.error(`\n${failures.length} smoke check(s) failed`)
    process.exit(1)
  }

  console.log(`\nAll ${routes.length} smoke checks passed`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
