import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.code}>Brady Peterson</h1>
      </div>

      <div className={styles.center}>
        <h2 className={styles.code}>Software Engineer</h2>
      </div>

      <div className={styles.grid}>
        <Link href="/projects" className={styles.card}>
          <h2>
            Projects <span>-&gt;</span>
          </h2>
          <p>Projects I work on during my free time.</p>
        </Link>

        <Link href="/resume" className={styles.card}>
          <h2>
            Resume <span>-&gt;</span>
          </h2>
          <p>View my skills and career history.</p>
        </Link>
        <Link href="/contact" className={styles.card}>
          <h2>
            Contact Me <span>-&gt;</span>
          </h2>
          <p>Send me a message.</p>
        </Link><Link href="/blog" className={styles.card}>
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>My thoughts and opinions.</p>
        </Link>
      </div>
    </main>
  )
}
