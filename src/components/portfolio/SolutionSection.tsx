import SectionHeader from '@/components/SectionHeader'
import type { PortfolioProject } from '@/types/portfolio'

type SolutionSectionProps = {
  project: PortfolioProject
}

const STRATEGY_BLOCKS = [
  ['Website strategy', 'website'],
  ['Design and UX', 'design'],
  ['Development', 'development'],
  ['Content', 'content'],
  ['SEO', 'seo'],
] as const

const SolutionSection = ({ project }: SolutionSectionProps) => {
  const copy = project.sections?.solution ?? {
    eyebrow: 'Strategy',
    title: 'How we approached the project',
    subtitle: 'Website, design, development, content, and search work were planned together.',
  }

  return (
    <section className="section case-study-strategy">
      <div className="container">
        <SectionHeader eyebrow={copy.eyebrow ?? ''} title={copy.title} subtitle={copy.subtitle} />
        <div className="row g-3 g-lg-4">
          {STRATEGY_BLOCKS.map(([title, key]) => (
            <div className="col-md-6 col-xl-4" key={key}>
              <div className="case-study-strategy__card h-100">
                <h3>{title}</h3>
                <ul>
                  {project.strategy[key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection
