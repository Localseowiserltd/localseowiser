import ButtonLink from '@/components/ButtonLink'
import type { LocationPage } from '@/types/location'

type LocationDevBannerProps = {
  page: LocationPage
}

/**
 * Visible only in development when previewing unpublished location pages.
 * Must never render in production builds for publishable routes.
 */
const LocationDevBanner = ({ page }: LocationDevBannerProps) => {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <aside className="location-dev-banner" role="status">
      <p className="location-dev-banner__title mb-1">
        Development preview — not published
      </p>
      <p className="location-dev-banner__text mb-0">
        Status: <strong>{page.status}</strong> · contentApproved:{' '}
        <strong>{String(page.contentApproved)}</strong>. Owner-supplied content is required
        before this page can appear in production, sitemap, or public internal links.
      </p>
    </aside>
  )
}

type LocationEmptyNoticeProps = {
  label: string
}

/** Marks an empty section in development only. Renders nothing in production. */
export const LocationEmptyNotice = ({ label }: LocationEmptyNoticeProps) => {
  if (process.env.NODE_ENV === 'production') return null
  if (!label.trim()) return null
  return (
    <p className="location-empty-notice mb-0">
      [dev] {label} — awaiting owner-supplied content
    </p>
  )
}

type LocationCtaProps = {
  page: LocationPage
}

export const LocationCtaBlock = ({ page }: LocationCtaProps) => {
  const cta = page.cta
  const paragraphs =
    cta.paragraphs && cta.paragraphs.some((paragraph) => paragraph.trim())
      ? cta.paragraphs.filter((paragraph) => paragraph.trim())
      : cta.text.trim()
        ? [cta.text]
        : []

  if (!cta.title.trim() || paragraphs.length === 0) {
    return <LocationEmptyNotice label="CTA" />
  }

  return (
    <section className="location-cta section">
      <div className="container">
        <div className="location-cta__panel">
          {cta.image?.src.trim() ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="location-section__image img-fluid mb-4"
              src={cta.image.src}
              alt={cta.image.alt || ''}
            />
          ) : null}
          <h2 className="h3 mb-2">{cta.title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mb-3">
              {paragraph}
            </p>
          ))}
          <div className="d-flex flex-wrap gap-2">
            {cta.primaryLabel && cta.primaryHref ? (
              <ButtonLink href={cta.primaryHref}>{cta.primaryLabel}</ButtonLink>
            ) : null}
            {cta.secondaryLabel && cta.secondaryHref ? (
              <ButtonLink href={cta.secondaryHref} variant="outline">
                {cta.secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationDevBanner
