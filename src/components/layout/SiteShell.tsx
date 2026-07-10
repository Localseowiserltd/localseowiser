import Loader from '@/components/Loader'
import NavTopBar from '@/components/navTopbar/NavTopBar'
import SiteFooter from '@/components/layout/SiteFooter'
import { ReactNode } from 'react'

const SiteShell = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Loader />
      <NavTopBar />
      <div className="site-content">{children}</div>
      <SiteFooter />
    </>
  )
}

export default SiteShell
