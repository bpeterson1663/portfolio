import { PropsWithChildren } from 'react'
import PageLayout from '../components/page-layout/page-layout'

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <PageLayout title="Blog">
      {children}
    </PageLayout>
  )
}
