'use client'
import { Fragment } from 'react'
import Grid from '../components/grid/grid'
import { postsSortedByDate } from './posts'
import BlogCard from './components/blog-card'

export default function Page() {
  return (
    <Grid>
      {postsSortedByDate.map((post) => (
        <Fragment key={post.slug}>
          <BlogCard {...post} />
        </Fragment>
      ))}
    </Grid>
  )
}
