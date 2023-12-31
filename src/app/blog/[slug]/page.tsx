import { Suspense } from 'react'
import { posts } from '../posts'

interface Params {
  params: {
    slug: string
  }
}


export default function Slug({ params }: Params) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>{post?.page}</Suspense>
    </div>
  )
}
