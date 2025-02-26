import { Skill } from '@/app/components/skill-pills/skills'
import { Badge } from "@mantine/core"
import Link from 'next/link'

import '@/app/components/skill-pills/skill-pills.scss'

interface Props {
  skills: Skill[]
}

export default function SkillPills({ skills }: Props) {
  return (
    <div className="skill-container">
      {skills.map((skill) => {
        return (
          <Badge className="skill" component={Link} key={skill.id} target="_blank"  href={skill.url}>
            {skill.name}
          </Badge>
        )
      })}
    </div>
  )
}
