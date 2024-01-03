import { PropsWithChildren } from 'react'
import Navigation from '../navigation/navigation'
import styles from './page-layout.module.scss'

interface Props {
  title: string
  subtitle?: string
}

export default function PageLayout({ children, title, subtitle }: PropsWithChildren<Props>) {
  return (
    <main className={styles.main}>
      <Navigation />
      <section className={styles.section}>
        <div className={styles['header-container']}>
          <h1 className={styles.header}>{title}</h1>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        </div>

        <div className={styles.center}>{children}</div>
      </section>
    </main>
  )
}
