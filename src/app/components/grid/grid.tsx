import { PropsWithChildren } from "react";
import styles from './grid.module.scss'

export default function Grid({children}: PropsWithChildren) {
    return <div className={styles['grid-container']}>{children}</div>
}