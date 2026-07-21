import type { NextConfig } from 'next'

/** Legacy root blog URLs → canonical `/blog/[slug]` paths */
const legacyBlogRedirects = [
  'google-business-profile-wins',
  'local-citation-quality-vs-quantity',
  'review-management-playbook',
].map((slug) => ({
  source: `/${slug}`,
  destination: `/blog/${slug}`,
  permanent: true,
}))

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
      ...legacyBlogRedirects,
      {
        source: '/packages',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
