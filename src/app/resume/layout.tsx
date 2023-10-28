import { PropsWithChildren } from 'react'
import PageLayout from '../components/page-layout/page-layout'

export default function ResumeLayout({ children }: PropsWithChildren) {
  return <PageLayout title="Resume">{children}</PageLayout>
}
