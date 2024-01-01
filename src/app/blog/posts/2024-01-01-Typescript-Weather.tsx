import Link from 'next/link'
import PostContainer from '../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Typescript Weather Project</h2>
      <h3>{getDate('2024-01-01')}</h3>
      <p>
        Starting off the first day to 100 commits by working on a weather project. This is a tutorial through{' '}
        <Link href="https://zerotomastery.io/">Zero To Mastery - Typescript Bootcamp</Link> course. It is a small
        project but focusing on both sustaining my knowledge of Typescript as well as learning new skills. Link to git
        repository is below.
      </p>
      <Link href="https://github.com/bpeterson1663/weather">Weather</Link>
    </PostContainer>
  )
}
