import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type WebsiteArchitectureProps = {
  project: PortfolioProject
}

const WebsiteArchitecture = ({ project }: WebsiteArchitectureProps) => {
  const { title, subtitle, items } = project.websiteArchitecture
  if (!items.length) return null

  return (
    <section className="section">
      <div className="container">
        <SectionHeader eyebrow="Website Architecture" title={title} subtitle={subtitle} />
        <ul className="case-study-services-map">
          {items.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WebsiteArchitecture
