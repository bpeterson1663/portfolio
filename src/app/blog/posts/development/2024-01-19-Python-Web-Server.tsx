import Link from 'next/link'
import PostContainer from '../../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Python - Web Server</h2>
      <h3>{getDate('2024-01-19')}</h3>
      <p>
        Past few days I have been working through the{' '}
        <Link href="https://academy.zerotomastery.io/courses/">Complete Python Developer in 2024: Zero to Mastery</Link>
        . Created a web server using Flask to serve up templates downloaded from{' '}
        <Link href="https://themewagon.com/author/mashuptemplate/">Theme Wagon</Link>. Worked to get it hosted on{' '}
        <Link href="https://www.pythonanywhere.com/">Python Anywhere</Link> and it can be visited{' '}
        <Link href="https://bpeterson1663.pythonanywhere.com/">here</Link>.
      </p>
      <Link href="https://github.com/bpeterson1663/python-web-server">Python Web Server</Link>
    </PostContainer>
  )
}
