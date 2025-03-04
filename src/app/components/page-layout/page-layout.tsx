import { PropsWithChildren } from 'react'
import "./page-layout.scss"

interface Props {
  title: string
  subtitle?: string
}

export default function PageLayout({ children, title, subtitle }: PropsWithChildren<Props>) {
  return (
      <section className="section">
        <div className="header-container">
          <h1 className="header">{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        </div>
        <div className="center">{children}</div>
      </section>
  )
}
