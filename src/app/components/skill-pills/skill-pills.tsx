import { Skill } from "@/app/components/skill-pills/skills";
import Link from "next/link";
import styles from '@/app/components/skill-pills/skill-pills.module.scss'

interface Props {
    skills: Skill[]
}

export default function SkillPills({skills}: Props) {
    return (
        <div className={styles['skill-container']}>
        {skills.map((skill) => {
          return (
            <Link key={skill.id} target="_blank" className={styles['skill']} href={skill.url}>
              {skill.name}
            </Link>
          )
        })}
      </div>
    )
}