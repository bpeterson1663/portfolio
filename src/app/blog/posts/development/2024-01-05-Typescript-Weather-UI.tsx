import Link from 'next/link'
import PostContainer from '../../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Typescript Weather Project - Adding Tests</h2>
      <h3>{getDate('2024-01-05')}</h3>
      <p>
        Worked on adding tests to the <code>location.ts</code> and <code>weatherapi.ts</code> files. Used{' '}
        <Link href="https://jestjs.io/">Jest</Link> to write out the tests and{' '}
        <Link href="https://www.npmjs.com/package/axios-mock-adapter">axios-mock-adapter</Link> package to mock axios
        api calls. Added coverage to a 200 and a 400 api response call.
      </p>
      <Link href="https://github.com/bpeterson1663/weather-ui">Weather UI</Link>
    </PostContainer>
  )
}
