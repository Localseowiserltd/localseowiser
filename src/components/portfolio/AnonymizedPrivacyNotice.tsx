type AnonymizedPrivacyNoticeProps = {
  className?: string
}

/**
 * Shown when a portfolio project (or its evidence) is marked anonymized.
 * Metrics remain visible; client-identifying details are intentionally withheld.
 */
const AnonymizedPrivacyNotice = ({ className }: AnonymizedPrivacyNoticeProps) => {
  return (
    <aside className={`anonymized-privacy-notice ${className ?? ''}`.trim()} aria-label="Client privacy notice">
      <p className="anonymized-privacy-notice__badge">Client Identity Protected</p>
      <p className="anonymized-privacy-notice__note">
        Performance metrics shown are real. Client-identifying information has been intentionally hidden for
        confidentiality.
      </p>
    </aside>
  )
}

export default AnonymizedPrivacyNotice
