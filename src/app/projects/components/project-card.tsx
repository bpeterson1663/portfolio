import Image from 'next/image'
import {SKILLS} from '../../components/skill-pills/skills'
import Card from '@/app/components/card/card'
import { Project } from '../model'
import Link from 'next/link'
import styles from '@/app/projects/components/project-card.module.scss'
import SkillPills from '@/app/components/skill-pills/skill-pills'

export function ProjectCard({ title, description, imageUrl, projectRepo, url, skillIds }: Project) {
  const skills = SKILLS.filter(skill => skillIds.includes(skill.id))
  return (
    <Card className={styles['project-card']}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Image alt={title} src={imageUrl} width={200} height={200} />
      {projectRepo && (
        <Link className={styles.link} target="_blank" href={projectRepo}>
          Project Repo
        </Link>
      )}
      {url && (
        <Link className={styles.link} target="_blank" href={url} title={title}>
          {title}
        </Link>
      )}
      <SkillPills skills={skills} />
    </Card>
  )
}
