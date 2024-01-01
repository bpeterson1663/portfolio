import { PropsWithChildren } from 'react'
import styles from './card-link.module.scss'
import Link from 'next/link'

interface Props {
  className?: string
  href: string
}

export default function CardLink({ children, className, href }: PropsWithChildren<Props>) {
  return (
    <Link href={href} className={`${styles['card-link-container']} ${className}`}>
      {children}
    </Link>
  )
}
