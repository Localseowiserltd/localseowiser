import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type ServicesDeliveredProps = {
  project: PortfolioProject
}

const ServicesDelivered = ({ project }: ServicesDeliveredProps) => {
  if (!project.servicesDelivered.length) return null

  const copy = project.sections?.services ?? {
    eyebrow: 'Scope',
    title: 'Services delivered',
  }

  return (
    <div className="services-delivered">
      <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} align="left" />
      <ul className="case-study-services-delivered">
        {project.servicesDelivered.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  )
}

export default ServicesDelivered
