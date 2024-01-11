import Link from 'next/link'
import PostContainer from '../../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Typescript Weather Project - Starting the UI</h2>
      <h3>{getDate('2024-01-03')}</h3>
      <p>
        Starting to work on the UI portion of the weather app from{' '}
        <Link href="https://zerotomastery.io/">Zero To Mastery - Typescript Bootcamp</Link> course. The first portion
        has been using <Link href="https://zod.dev/">Zod</Link> to define the schema validations of the api response and
        infer the types from them. More work coming tomorrow.
      </p>
      <Link href="https://github.com/bpeterson1663/weather-ui">Weather UI</Link>
    </PostContainer>
  )
}
