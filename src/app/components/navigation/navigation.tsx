import Link from 'next/link'
import styles from './navigation.module.scss'

export default function Navigation() {
  return (
    <nav className={styles['nav-container']}>
      <Link href="/" className={styles['nav-item']}>
        Home
      </Link>
      <div className={styles['nav-list-container']}>
        <Link href="/blog" className={styles['nav-item']}>
          Blog
        </Link>
        <Link href="/projects" className={styles['nav-item']}>
          Projects
        </Link>
        <Link href="/resume" className={styles['nav-item']}>
          Resume
        </Link>
        <Link href="/contact" className={styles['nav-item']}>
          Contact Me
        </Link>
      </div>
    </nav>
  )
}
