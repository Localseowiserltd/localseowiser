import '@/assets/scss/style.scss'
import { Metadata } from 'next'
import { Rethink_Sans } from 'next/font/google'
import Script from 'next/script'

const GTM_ID = 'GTM-PVZ5JLW8'

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rethink-sans',
  weight: 'variable',
  style: ['normal', 'italic'],
})

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
    <html lang="en" className={rethinkSans.variable}>
      <head>
        {/* Google Tag Manager — as high in <head> as possible */}
        <Script id="google-tag-manager" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        {/* Explicit icons so Chrome picks them up on first paint (Next 15 streaming metadata can miss favicons). */}
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png?v=3" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" sizes="180x180" />
        <style suppressHydrationWarning>{}</style>
      </head>
      <body className={rethinkSans.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
