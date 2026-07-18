import Link from 'next/link'
import type { LocationListingMeta, LocationPage } from '@/types/location'
import { getLocationPath } from '@/lib/location-publish'
import { LocationEmptyNotice } from './LocationDevBanner'

type AreasListingProps = {
  pages: LocationPage[]
  meta: LocationListingMeta
}

/**
 * Listing of published location pages only.
 * Does not invent listing copy — uses owner-supplied meta when present.
 */
const AreasListing = ({ pages, meta }: AreasListingProps) => {
  const hasMeta = Boolean(meta.h1.trim() || meta.intro.trim())

  return (
    <section className="areas-listing section">
      <div className="container">
        {hasMeta ? (
          <header className="areas-listing__header mb-4">
            {meta.h1.trim() ? <h1 className="mb-3">{meta.h1}</h1> : null}
            {meta.intro.trim() ? <p className="mb-0">{meta.intro}</p> : null}
          </header>
        ) : (
          <LocationEmptyNotice label="Areas listing title / intro" />
        )}

        {pages.length === 0 ? (
          <LocationEmptyNotice label="Published area pages (none yet)" />
        ) : (
          <ul className="areas-listing__grid">
            {pages.map((page) => (
              <li key={page.slug}>
                <Link href={getLocationPath(page)}>{page.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default AreasListing
