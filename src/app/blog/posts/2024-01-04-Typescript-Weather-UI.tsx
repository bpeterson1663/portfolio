import Link from 'next/link'
import PostContainer from '../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Typescript Weather Project - Finishing the UI</h2>
      <h3>{getDate('2024-01-04')}</h3>
      <p>
        Finished up the work for the UI. The tutorial already provided the{' '}
        <Link href="https://mozilla.github.io/nunjucks">Nunjucks</Link> templates, just needed to setup the server and
        configure the routes. Tommorrow will be focsuing on writing tests for the code.
      </p>
      <Link href="https://github.com/bpeterson1663/weather-ui">Weather UI</Link>
    </PostContainer>
  )
}
