import { Project } from './model'
import { ProjectCard } from './components/project-card'
import { Grid } from "@mantine/core"
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
      title: 'Python Web Server',
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
    {
      id: '5',
      title: 'Typing Test',
      description: 'A Typing Test application',
      skillIds: [1, 2, 3],
      imageUrl: '/static/typing-test.png',
      url: "/projects/typing-test"
    },
    {
      id: '6',
      title: 'Discord Bot',
      description: 'A Node.js discord bot that can display the weather for a location as well as other astronomical data.',
      skillIds: [1, 7],
      imageUrl: '/static/discord-bot.png',
      url: "https://github.com/bpeterson1663/discord-bot"
    }
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
