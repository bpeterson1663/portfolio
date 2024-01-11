import Link from 'next/link'
import PostContainer from '../components/post-container'

import { getDate } from '@/app/utils/date'

export default function Post() {
  return (
    <PostContainer>
      <h2>Python - Web Scraper</h2>
      <h3>{getDate('2024-01-10')}</h3>
      <p>
        Pivoting from Typescript and focusing on Python. Working through the Zero-To-Mastery Course -{' '}
        <Link href="https://academy.zerotomastery.io/courses/">Complete Python Developer in 2024: Zero to Mastery</Link>
        . Using the package <Link href="https://www.crummy.com/software/BeautifulSoup/">Beautiful Soup</Link> to make
        requests to <Link href="https://news.ycombinator.com/">Hacker News</Link>. Using this library, I grabbed the
        content from the site and filterd by number of votes. More Python work to come.
      </p>
      <Link href="https://github.com/bpeterson1663/hacker-news">Web Scraper - Hacker News</Link>
    </PostContainer>
  )
}
