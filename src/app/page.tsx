import SiteShell from '@/components/layout/SiteShell'
import HomePageSchema from '@/components/seo/HomePageSchema'
import FAQ from './(pages)/business/components/FAQ'
import Hero from './(pages)/business/components/Hero'
import Industries from './(pages)/business/components/Industries'
import PortfolioHome from './(pages)/business/components/PortfolioHome'
import Process from './(pages)/business/components/Process'
import WhyLocalSeo from './(pages)/business/components/WhyLocalSeo'
import Services from './(pages)/business/components/Services'
import AreasWeServe from './(pages)/business/components/AreasWeServe'
import HomePricing from './(pages)/business/components/HomePricing'
import HonestBit from './(pages)/business/components/HonestBit'
import Testimonial from './(pages)/business/components/Testimonial'
import HomeCta from '@/components/sections/HomeCta'

export const metadata = {
  title: 'Local SEO Services in Pittsburgh, PA',
  description:
    'Pittsburgh local SEO services that put you in the Map Pack and AI search. Free visibility scan, transparent pricing, and real reporting for calls and form fills.',
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
      <PortfolioHome />
      <Testimonial />
      <HonestBit />
      <FAQ />
      <HomeCta />
    </SiteShell>
  )
}

export default HomePage
