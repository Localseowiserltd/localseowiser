import ButtonLink from '@/components/ButtonLink'
import { portfolioListingMeta } from '@/data/portfolio'
import type { PortfolioCta } from '@/types/portfolio'

type PortfolioCTAProps = {
  cta?: PortfolioCta
  variant?: 'case-study' | 'listing'
}

const PortfolioCTA = ({ cta, variant = 'case-study' }: PortfolioCTAProps) => {
  const title = cta?.title ?? portfolioListingMeta.ctaTitle
  const text = cta?.text ?? portfolioListingMeta.ctaText
  const primaryLabel = cta?.primaryLabel ?? (variant === 'listing' ? 'Discuss your project' : 'Start Your Project')
  const primaryHref = cta?.primaryHref ?? '/contact'
  const secondaryLabel = cta?.secondaryLabel ?? (variant === 'listing' ? 'View services' : 'View Our Services')
  const secondaryHref = cta?.secondaryHref ?? '/services'

  return (
    <section className={`section ${variant === 'listing' ? 'portfolio-listing-cta' : 'case-study-final-cta'}`}>
      <div className="container">
        <div className="case-study-final-cta__panel">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="case-study-hero__actions">
            <ButtonLink href={primaryHref} variant="primary">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="outline-primary">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCTA
