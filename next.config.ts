import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    // Legacy theme SCSS still uses darken()/lighten() and @import.
    // Silence these so Vercel production builds don't fail on Sass deprecations.
    silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions'],
  },
}

export default nextConfig
