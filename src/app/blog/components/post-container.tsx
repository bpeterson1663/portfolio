import { PropsWithChildren } from "react";
import styles from  "./post-container.module.scss"

export default function PostContainer({ children }: PropsWithChildren) {
    return (
        <article className={styles['post-container']}>
            {children}
        </article>
    )
}