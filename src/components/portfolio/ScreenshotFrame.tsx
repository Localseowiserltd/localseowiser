import clsx from 'clsx'
import type { PortfolioScreenshot } from '@/types/portfolio'
import { isEvidenceScreenshotKind } from '@/lib/portfolio-evidence'

type ScreenshotFrameProps = {
  image: PortfolioScreenshot
  variant?: 'hero' | 'gallery' | 'evidence' | 'mobile'
  className?: string
  loading?: 'lazy' | 'eager'
}

const kindToVariant = (kind: PortfolioScreenshot['kind'], fallback: ScreenshotFrameProps['variant']) => {
  if (kind === 'mobile') return 'mobile'
  if (isEvidenceScreenshotKind(kind)) return 'evidence'
  return fallback
}

const ScreenshotFrame = ({
  image,
  variant,
  className,
  loading = 'lazy',
}: ScreenshotFrameProps) => {
  const resolvedVariant = variant ?? kindToVariant(image.kind, 'gallery')

  return (
    <figure className={clsx('screenshot-frame', `screenshot-frame--${resolvedVariant}`, className)}>
      <div
        className="screenshot-frame__viewport"
        tabIndex={0}
        aria-label={`${image.alt}. Scroll inside this frame to view the full page.`}
      >
        {/* Native img keeps full page height so only the frame scrolls. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className="screenshot-frame__img"
          loading={loading}
          decoding="async"
        />
      </div>
      {image.caption ? <figcaption className="screenshot-frame__caption">{image.caption}</figcaption> : null}
    </figure>
  )
}

export default ScreenshotFrame
