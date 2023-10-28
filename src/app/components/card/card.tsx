import { PropsWithChildren } from 'react'
import styles from './card.module.scss'

export default function Card({children}: PropsWithChildren) {
    return <div className={styles['card-container']}>
        {children}
    </div>
}