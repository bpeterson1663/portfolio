import Link from 'next/link'
import PostContainer from '../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Typescript Weather Project - Finishing the CLI</h2>
      <h3>{getDate('2024-01-02')}</h3>
      <p>
        Wrapped up the CLI portion of the weather project. Running the following command will start the program:{' '}
        <code>pnpm run weather &rdquo;CITY_NAME&rdquo;</code>
        The program will make a request to <code>https://api.open-meteo.com/v1/forecast</code> and output the following
        code:{' '}
      </p>
      <pre>
        <code>
          Temperature: 1 C<br />
          Wind Speed: 8 kmh <br />
          Condition: Clear sky
        </code>
      </pre>
      <p>And that wraps ups this portion of the tutorial. Startng work on the UI tomorrow!</p>
      <Link href="https://github.com/bpeterson1663/weather">Weather</Link>
    </PostContainer>
  )
}
