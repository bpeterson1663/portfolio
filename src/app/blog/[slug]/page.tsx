import { Suspense } from 'react'
import { posts } from '../posts'

interface Params {
  params: {
    slug: string
  }
}

export function getPost(slug: string) {
  return posts.find(post => post.slug === slug)
}

export default function Slug({params}: Params) {
    const post = getPost(params.slug)

    if (!post) {
      return
    }
    
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          { post?.page}
        </Suspense>
      </div>
    )
}