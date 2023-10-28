import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.code}>Brady Peterson</h1>
      </div>

      <div className={styles.center}>
        <h2 className={styles.code}>Web Developer</h2>
      </div>

      <div className={styles.grid}>
        <Link href="/blog" className={styles.card}>
          <h2>
            Blog <span>-&gt;</span>
          </h2>
          <p>My thoughts and ideas.</p>
        </Link>

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
      </div>
    </main>
  )
}
