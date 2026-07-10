import PageHeader from '@/components/layout/PageHeader'
import SiteShell from '@/components/layout/SiteShell'
import BlogPageSections from './BlogPageSections'

export const metadata = {
  title: 'Blog',
}

const BlogPage = () => {
  return (
    <SiteShell>
      <PageHeader
        badge="Blog"
        title="Actionable local SEO insights for teams that execute"
        description="Our blog shares practical tactics, strategic frameworks, and campaign lessons to help local businesses improve visibility and lead quality."
      />
      <BlogPageSections />
    </SiteShell>
  )
}

export default BlogPage
