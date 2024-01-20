import Grid from '../components/grid/grid'
import { Project } from './model'
import { ProjectCard } from './components/project-card'

export default function Page() {
  const PROJECTS: Project[] = [
    {
      id: '1',
      title: 'Wine Journal',
      description: 'An online journal to store your tasting notes about wine.',
      imageUrl: '/static/wine-journal.png',
      url: 'https://wine-journal-711ef.web.app/',
      skillIds: [2, 3, 9, 18, 19, 24],
    },
    {
      id: '2',
      title: 'Pixl',
      description: 'A pixel art editor program created in Golang.',
      imageUrl: '/static/pixl-art-editor.png',
      projectRepo: 'https://github.com/bpeterson1663/go-pixl',
      skillIds: [13],
    },
    {
      id: '3',
      title: 'Pyton Web Server',
      description: 'A protfolio project using python. Project uses Flask and use Python Anywhere to host the project.',
      imageUrl: '/static/python-web-server.png',
      url: 'https://bpeterson1663.pythonanywhere.com/',
      projectRepo: 'https://github.com/bpeterson1663/python-web-server',
      skillIds: [25, 22, 23],
    },
    {
      id: '4',
      title: 'Weather App',
      description: 'A weather project using typescript.',
      imageUrl: '/static/typescript-weather.png',
      projectRepo: 'https://github.com/bpeterson1663/weather-ui',
      skillIds: [3, 23],
    },
  ]

  return (
    <div>
      <Grid columns={3}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Grid>
    </div>
  )
}
