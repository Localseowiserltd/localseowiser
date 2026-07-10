import '@/assets/scss/style.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Local SEO Wiser | Pittsburgh Local SEO Agency',
    default: 'Pittsburgh Local SEO Agency | Local SEO Wiser',
  },
  description:
    'Pittsburgh local SEO agency helping businesses win the Google Map Pack with proven local SEO, map optimization, and transparent reporting.',
  icons: {
    icon: [],
    apple: [],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{}</style>
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}
