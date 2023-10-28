import { PropsWithChildren } from 'react'
import Navigation from '../navigation/navigation'
import styles from './page-layout.module.scss'

interface Props {
  title: string
}

export default function PageLayout({ children, title }: PropsWithChildren<Props>) {
  return (
    <main className={styles.main}>
      <Navigation />
      <section className={styles.section}>
        <div className={styles['header-container']}>
          <h1 className={styles.header}>{title}</h1>
        </div>

        <div className={styles.center}>{children}</div>
      </section>
    </main>
  )
}
