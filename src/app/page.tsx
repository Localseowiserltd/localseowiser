import SiteShell from '@/components/layout/SiteShell'
import HomePageSchema from '@/components/seo/HomePageSchema'
import { SITE_NAME, SITE_ORIGIN } from '@/config/site'
import type { Metadata } from 'next'
import FAQ from './(pages)/business/components/FAQ'
import Hero from './(pages)/business/components/Hero'
import Industries from './(pages)/business/components/Industries'
import Process from './(pages)/business/components/Process'
import WhyLocalSeo from './(pages)/business/components/WhyLocalSeo'
import Services from './(pages)/business/components/Services'
import AreasWeServe from './(pages)/business/components/AreasWeServe'
import HomePricing from './(pages)/business/components/HomePricing'
import HonestBit from './(pages)/business/components/HonestBit'
import HomeCta from '@/components/sections/HomeCta'

const homeTitle = 'Local SEO Services Pittsburgh | Local SEO Wiser'
const homeDescription =
  'Grow your business with Local SEO Services in Pittsburgh. Improve Google Maps rankings, generate more local leads, and attract customers with Local SEO Wiser.'

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: SITE_ORIGIN,
    type: 'website',
    siteName: SITE_NAME,
    images: [{ url: `${SITE_ORIGIN}/logo.png`, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: [`${SITE_ORIGIN}/logo.png`],
  },
  robots: { index: true, follow: true },
}

const HomePage = () => {
  return (
    <SiteShell>
      <HomePageSchema />
      <Hero />
      <WhyLocalSeo />
      <Services />
      <Process />
      <Industries />
      <AreasWeServe />
      <HomePricing />
      <HonestBit />
      <FAQ />
      <HomeCta />
    </SiteShell>
  )
}

export default HomePage
