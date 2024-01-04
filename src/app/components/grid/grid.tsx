import { PropsWithChildren } from 'react'
import styles from './grid.module.scss'

interface Props extends PropsWithChildren {
  columns?: number
}

export default function Grid({ children, columns = 4 }: Props) {
  const classes = `${styles['grid-container']} ${styles[`columns-${columns}`]}`
  return <div className={classes}>{children}</div>
}
