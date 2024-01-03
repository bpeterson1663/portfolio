import { PropsWithChildren } from 'react'
import PageLayout from '../components/page-layout/page-layout'

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <PageLayout title="Blog" subtitle="Less of a blog, more of a journal">
      {children}
    </PageLayout>
  )
}
