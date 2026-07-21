import type { NextConfig } from 'next'

const isDevelopment = process.env.NODE_ENV === 'development'
const scriptSources = [
  "'self'",
  "'unsafe-inline'",
  'https://www.googletagmanager.com',
  'https://www.google-analytics.com',
  'https://ssl.google-analytics.com',
]
if (isDevelopment) scriptSources.push("'unsafe-eval'")

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      `script-src ${scriptSources.join(' ')}`,
      "script-src-attr 'none'",
      [
        "connect-src 'self'",
        'https://api.web3forms.com',
        'https://api.iconify.design',
        'https://api.simplesvg.com',
        'https://api.unisvg.com',
        'https://www.googletagmanager.com',
        'https://www.google-analytics.com',
        'https://analytics.google.com',
        'https://region1.google-analytics.com',
        'https://stats.g.doubleclick.net',
      ].join(' '),
      "frame-src 'self' https://www.google.com https://www.googletagmanager.com",
      "worker-src 'self' blob:",
      "manifest-src 'self'",
      "media-src 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  // Allow `NEXT_DIST_DIR=.next-build npm run build` while `next dev` uses `.next`
  distDir: process.env.NEXT_DIST_DIR || '.next',
  sassOptions: {
    // Legacy theme SCSS still uses darken()/lighten() and @import.
    // Silence these so Vercel production builds don't fail on Sass deprecations.
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
  },
  async redirects() {
    return [
      {
        source: '/packages',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
        ],
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
