import ChallengeSection from '@/components/portfolio/ChallengeSection'
import OutcomeSection from '@/components/portfolio/OutcomeSection'
import PortfolioCTA from '@/components/portfolio/PortfolioCTA'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioOverview from '@/components/portfolio/PortfolioOverview'
import ProjectGoals from '@/components/portfolio/ProjectGoals'
import ProjectTimeline from '@/components/portfolio/ProjectTimeline'
import QueryVisibility from '@/components/portfolio/QueryVisibility'
import RelatedProjects from '@/components/portfolio/RelatedProjects'
import ResultsGrid from '@/components/portfolio/ResultsGrid'
import ScreenshotGallery from '@/components/portfolio/ScreenshotGallery'
import SeoImplementation from '@/components/portfolio/SeoImplementation'
import ServicesDelivered from '@/components/portfolio/ServicesDelivered'
import SolutionSection from '@/components/portfolio/SolutionSection'
import TechnologyStack from '@/components/portfolio/TechnologyStack'
import WebsiteArchitecture from '@/components/portfolio/WebsiteArchitecture'
import type { PortfolioProject } from '@/types/portfolio'

type CaseStudyViewProps = {
  project: PortfolioProject
  relatedProjects: PortfolioProject[]
}

/**
 * Composes reusable portfolio sections. Add/remove sections here only —
 * never duplicate layouts per project.
 */
const CaseStudyView = ({ project, relatedProjects }: CaseStudyViewProps) => {
  return (
    <>
      <PortfolioHero project={project} />
      <PortfolioOverview project={project} />
      <div className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <ChallengeSection project={project} />
            </div>
            <div className="col-lg-6">
              <ProjectGoals project={project} />
            </div>
          </div>
        </div>
      </div>
      <SolutionSection project={project} />
      <WebsiteArchitecture project={project} />
      <ScreenshotGallery project={project} />
      <SeoImplementation project={project} />
      <ResultsGrid project={project} />
      <QueryVisibility project={project} />
      <OutcomeSection project={project} />
      <ProjectTimeline project={project} />
      <div className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <ServicesDelivered project={project} />
            </div>
            <div className="col-lg-5">
              <TechnologyStack project={project} />
            </div>
          </div>
        </div>
      </div>
      <RelatedProjects projects={relatedProjects} />
      <PortfolioCTA cta={project.cta} />
    </>
  )
}

export default CaseStudyView
