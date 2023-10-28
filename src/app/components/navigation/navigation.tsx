import Link from "next/link"
import styles from './navigation.module.scss'

export default function Navigation() {
    return (
        <nav className={styles['nav-container']}>
          <ul className={styles['nav-list-container']}>
            <li className={styles['nav-item']}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/projects">
                Projects
              </Link>
            </li>
            <li className={styles['nav-item']}>
              <Link href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </nav>
    )
}