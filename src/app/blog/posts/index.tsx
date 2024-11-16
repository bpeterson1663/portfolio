import P20231231RoadTo100 from './development/2023-12-31-Road-To-100'
import P20240101TypescriptWeather from './development/2024-01-01-Typescript-Weather'
import P20240102TypescriptWeather from './development/2024-01-02-Typescript-Weather'
import P20240103TypescriptWeatherUI from './development/2024-01-03-Typescript-Weather-UI'
import P20240104TypescriptWeatherUI from './development/2024-01-04-Typescript-Weather-UI'
import P20240105TypescriptWeatherUI from './development/2024-01-05-Typescript-Weather-UI'
import P20240110PythonWebScraper from './development/2024-01-10-Ptyhon-Web-Scraper'
import P20240119PythonWebServer from './development/2024-01-19-Python-Web-Server'

export type Category = 'development'

export interface Post {
  category: Category
  slug: string
  title: string
  date: Date
  summary: string
  page: JSX.Element
}

export const posts: Post[] = [
  {
    category: 'development',
    slug: '2023-12-31-100-commits',
    title: 'Road to 100 Commits',
    date: new Date('December 31, 2023'),
    summary: 'Committing every day for 100 days.',
    page: <P20231231RoadTo100 />,
  },
  {
    category: 'development',
    slug: '2024-01-01-typescript-weather',
    title: 'Typescript Weather Project',
    date: new Date('January 01, 2024'),
    summary: 'Small Typescript weather project that takes a location and returns the weather.',
    page: <P20240101TypescriptWeather />,
  },
  {
    category: 'development',
    slug: '2024-01-02-typescript-weather',
    title: 'Finishing Weather CLI Project',
    date: new Date('January 02, 2024'),
    summary: 'The final code changes for the CLI.',
    page: <P20240102TypescriptWeather />,
  },
  {
    category: 'development',
    slug: '2024-01-03-typescript-weather-ui',
    title: 'Typescript Weather UI',
    date: new Date('January 03, 2024'),
    summary: 'Starting work on the UI portion of the weather app.',
    page: <P20240103TypescriptWeatherUI />,
  },
  {
    category: 'development',
    slug: '2024-01-04-typescript-weather-ui',
    title: 'Typescript Weather UI',
    date: new Date('January 04, 2024'),
    summary: 'Finishing up the UI portion',
    page: <P20240104TypescriptWeatherUI />,
  },
  {
    category: 'development',
    slug: '2024-01-05-typescript-weather-ui',
    title: 'Typescript Weather UI',
    date: new Date('January 05, 2024'),
    summary: 'Adding test coverage',
    page: <P20240105TypescriptWeatherUI />,
  },
  {
    category: 'development',
    slug: '2024-01-10-python-web-scraper',
    title: 'Python - Web Scraper',
    date: new Date('January 10, 2024'),
    summary: 'Working on a web scraper of Hacker News',
    page: <P20240110PythonWebScraper />,
  },
  {
    category: 'development',
    slug: '2024-01-19-python-web-server',
    title: 'Python Web Server',
    date: new Date('January 19, 2024'),
    summary: 'Web Server using Python and hosted on Python Anywhere',
    page: <P20240119PythonWebServer />,
  },
]

export const postsSortedByDate: Post[] = posts.sort((a, b) => b.date.getTime() - a.date.getTime())
