import '@/assets/scss/style.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://localseowiser.com'),
  title: {
    template: '%s | Local SEO Wiser | Pittsburgh Local SEO Agency',
    default: 'Pittsburgh Local SEO Agency | Local SEO Wiser',
  },
  description:
    'Pittsburgh local SEO agency helping businesses win the Google Map Pack with proven local SEO, map optimization, and transparent reporting.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit icons so Chrome picks them up on first paint (Next 15 streaming metadata can miss favicons). */}
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
        <style suppressHydrationWarning>{}</style>
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}
