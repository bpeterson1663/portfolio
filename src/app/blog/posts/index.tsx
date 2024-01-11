import P20231231RoadTo100 from './development/2023-12-31-Road-To-100'
import P20240101TypescriptWeather from './development/2024-01-01-Typescript-Weather'
import P20240102TypescriptWeather from './development/2024-01-02-Typescript-Weather'
import P20240103TypescriptWeatherUI from './development/2024-01-03-Typescript-Weather-UI'
import P20240104TypescriptWeatherUI from './development/2024-01-04-Typescript-Weather-UI'
import P20240105TypescriptWeatherUI from './development/2024-01-05-Typescript-Weather-UI'
import P20240110PythonWebScraper from './development/2024-01-10-Ptyhon-Web-Scraper'

import P20240102Workout from './fitness/2024-01-02-Workout'
import P20231229Workout from './fitness/2023-12-29-Workout'
import P20231230Workout from './fitness/2023-12-30-Workout'
import P20240103Workout from './fitness/2024-01-03-Workout'
import P20240104Workout from './fitness/2024-01-04-Workout'
import P20240105Workout from './fitness/2024-01-05-Workout'
import P20240106Workout from './fitness/2024-01-06-Workout'
import P20240108Workout from './fitness/2024-01-08-Workout'

export const posts = [
  {
    slug: '2023-12-29-workout',
    title: 'Workout',
    date: new Date('December 29, 2023'),
    summary: 'Shoulder Day',
    page: <P20231229Workout />,
  },
  {
    slug: '2023-12-30-workout',
    title: 'Workout',
    date: new Date('December 30, 2023'),
    summary: 'Chest and Back',
    page: <P20231230Workout />,
  },
  {
    slug: '2023-12-31-100-commits',
    title: 'Road to 100 Commits',
    date: new Date('December 31, 2023'),
    summary: 'Committing every day for 100 days.',
    page: <P20231231RoadTo100 />,
  },
  {
    slug: '2024-01-01-typescript-weather',
    title: 'Typescript Weather Project',
    date: new Date('January 01, 2024'),
    summary: 'Small Typescript weather project that takes a location and returns the weather.',
    page: <P20240101TypescriptWeather />,
  },
  {
    slug: '2024-01-02-typescript-weather',
    title: 'Finishing Weather CLI Project',
    date: new Date('January 02, 2024'),
    summary: 'The final code changes for the CLI.',
    page: <P20240102TypescriptWeather />,
  },
  {
    slug: '2024-01-02-workout',
    title: 'Workout',
    date: new Date('January 02, 2024'),
    summary: 'Leg Day',
    page: <P20240102Workout />,
  },
  {
    slug: '2024-01-03-typescript-weather-ui',
    title: 'Typescript Weather UI',
    date: new Date('January 03, 2024'),
    summary: 'Starting work on the UI portion of the weather app.',
    page: <P20240103TypescriptWeatherUI />,
  },
  {
    slug: '2024-01-03-workout',
    title: 'Workout',
    date: new Date('January 03, 2024'),
    summary: 'Chest and Back Day',
    page: <P20240103Workout />,
  },
  {
    slug: '2024-01-04-workout',
    title: 'Workout',
    date: new Date('January 04, 2024'),
    summary: 'Arms and Abs',
    page: <P20240104Workout />,
  },
  {
    slug: '2024-01-04-typescript-weather-ui',
    title: 'Typescript Weather UI',
    date: new Date('January 04, 2024'),
    summary: 'Finishing up the UI portion',
    page: <P20240104TypescriptWeatherUI />,
  },
  {
    slug: '2024-01-05-workout',
    title: 'Workout',
    date: new Date('January 05, 2024'),
    summary: 'Shoulders',
    page: <P20240105Workout />,
  },
  {
    slug: '2024-01-05-typescript-weather-ui',
    title: 'Typescript Weather UI',
    date: new Date('January 05, 2024'),
    summary: 'Adding test coverage',
    page: <P20240105TypescriptWeatherUI />,
  },
  {
    slug: '2024-01-05-workout',
    title: 'Workout',
    date: new Date('January 06, 2024'),
    summary: 'Chest and Back',
    page: <P20240106Workout />,
  },
  {
    slug: '2024-01-08-workout',
    title: 'Workout',
    date: new Date('January 08, 2024'),
    summary: 'Legs',
    page: <P20240108Workout />,
  },
  {
    slug: '2024-01-10-python-web-scraper',
    title: "Python - Web Scraper",
    date: new Date('January 10, 2024'),
    summary: "Working on a web scraper of Hacker News",
    page: <P20240110PythonWebScraper />
  }
].sort((a, b) => b.date.getTime() - a.date.getTime())
