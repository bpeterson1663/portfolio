import { PropsWithChildren } from 'react'
import PageLayout from '../components/page-layout/page-layout'

export default function ContactLayout({ children }: PropsWithChildren) {
  return (
    <PageLayout title="Contact Me" subtitle="Send me a message">
      {children}
    </PageLayout>
  )
}
