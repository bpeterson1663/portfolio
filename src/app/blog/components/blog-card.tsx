import CardLink from '@/app/components/card-link/card-link'
import { getDate } from '@/app/utils/date'
import styles from '@/app/blog/components/blog-card.module.scss'

interface Props {
  slug: string
  title: string
  date: Date
  summary: string
}

export default function BlogCard({ title, summary, slug }: Props) {
  return (
    <CardLink href={`/blog/${slug}`} className={styles['blog-card']}>
      <h2>{title}</h2>
      <p>{summary}</p>
    </CardLink>
  )
}
