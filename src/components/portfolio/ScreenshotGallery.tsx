import SectionHeader from '@/components/SectionHeader'
import ScreenshotFrame from '@/components/portfolio/ScreenshotFrame'
import { getAvailableScreenshots } from '@/data/portfolio'
import { getProjectDisplayName, isConfidentialProject } from '@/lib/portfolio-display'
import type { PortfolioProject } from '@/types/portfolio'

type ScreenshotGalleryProps = {
  project: PortfolioProject
}

const ScreenshotGallery = ({ project }: ScreenshotGalleryProps) => {
  const images = getAvailableScreenshots(project.gallery)
  if (!images.length) return null

  const confidential = isConfidentialProject(project)
  const copy = project.sections?.gallery ?? {
    eyebrow: 'Design Showcase',
    title: confidential
      ? 'Website screenshots from the delivered project'
      : 'Real pages from the live website',
    subtitle: confidential
      ? 'Screenshots below show the delivered website work. Client-identifying details may be withheld for confidentiality. No mockups or invented visuals.'
      : `Screenshots below were captured from the live ${getProjectDisplayName(project)} website. No mockups or invented visuals.`,
  }

  return (
    <section className="section case-study-gallery">
      <div className="container">
        <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} />
        <div className="row g-4">
          {images.map((image) => {
            const isMobile = image.kind === 'mobile'
            return (
              <div className={isMobile ? 'col-md-5 col-lg-4' : 'col-md-6'} key={image.src}>
                <ScreenshotFrame image={image} variant={isMobile ? 'mobile' : 'gallery'} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ScreenshotGallery
