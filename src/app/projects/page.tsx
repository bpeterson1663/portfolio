import Grid from '../components/grid/grid'
import { Project } from './model'
import { ProjectCard } from './components/project-card'

export default function Page() {
  const PROJECTS: Project[] = [{
    id: "1",
    title: "Wine Journal",
    description: "An online journal to store your tasting notes about wine.",
    imageUrl: "/static/wine-journal.png",
    url: "https://wine-journal-711ef.web.app/"
  }, {
    id: "2",
    title: "Pixl",
    description: "A pixel art editor program created in Golang.",
    imageUrl: "/static/pixl-art-editor.png",
    projectRepo: "https://github.com/bpeterson1663/go-pixl",
  }]

  return (
    <div>
      <Grid>
        {PROJECTS.map(project => <ProjectCard key={project.id} {...project} /> )}
      </Grid>
    </div>
  )
}
