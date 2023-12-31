import { Fragment } from 'react'
import Grid from '../components/grid/grid'
import { posts } from './posts'
import BlogCard from './components/blog-card'

export default function Page() {
  return (
    <Grid>
      {posts.map((post) => (
        <Fragment key={post.slug}>
          <BlogCard {...post} />
        </Fragment>
      ))}
    </Grid>
  )
}
