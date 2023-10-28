import { PropsWithChildren } from 'react'
import PageLayout from '../components/page-layout/page-layout'

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return <PageLayout title="Projects">{children}</PageLayout>
}
