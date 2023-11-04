import { PropsWithChildren } from 'react'
import styles from './card.module.scss'

interface Props {
  className?: string
}

export default function Card({ children, className }: PropsWithChildren<Props>) {
  return <div className={`${styles['card-container']} ${className}`}>{children}</div>
}
