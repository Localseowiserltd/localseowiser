import type { PortfolioScreenshot } from '@/types/portfolio'
import ScreenshotFrame from '@/components/portfolio/ScreenshotFrame'
import { getEvidenceKindLabel } from '@/lib/portfolio-evidence'

type EvidenceCardProps = {
  image: PortfolioScreenshot
  /** Project-level anonymized flag — shows privacy badge on evidence cards when set */
  anonymized?: boolean
}

const EvidenceCard = ({ image, anonymized }: EvidenceCardProps) => {
  if (image.available === false) return null

  const isProtected = anonymized === true || image.anonymized === true

  return (
    <div className={`evidence-card${isProtected ? ' evidence-card--anonymized' : ''}`}>
      {isProtected ? (
        <p className="evidence-card__privacy-badge">Client Identity Protected</p>
      ) : null}
      <ScreenshotFrame image={image} variant="evidence" />
      <p className="evidence-card__kind">
        <span className="visually-hidden">Evidence type: </span>
        {getEvidenceKindLabel(image.kind)}
      </p>
    </div>
  )
}

export default EvidenceCard
