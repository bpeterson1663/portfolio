import Image from "next/image";
import Card from "@/app/components/card/card";
import { Project } from "../model";
import Link from "next/link";
import styles from '@/app/projects/components/project-card.module.scss'

export function ProjectCard({title, description, imageUrl, projectRepo, url}: Project) {
    console.log(url)
    return (
        <Card className={styles['project-card']}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Image alt={title} src={imageUrl} width={200} height={200} />
        {projectRepo && <Link className={styles.link} target="_blank" href={projectRepo}>Project Repo</Link>}
        {url && <Link className={styles.link} target="_blank" href={url} title={title}>{title}</Link>}
      </Card>
    )

}