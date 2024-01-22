'use client'
import { Fragment, useState } from 'react'
import Grid from '../components/grid/grid'
import { postsSortedByDate } from './posts'
import BlogCard from './components/blog-card'
import { Category, Post } from './posts'
import style from './page.module.scss'

type Filters = {
  [key in Category]: boolean
}

export default function Page() {
  const [filters, setFilters] = useState<Filters>({} as Filters)

  const handleChange = (value: boolean, key: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const filterPost = (post: Post) => {
    const onKeys = Object.keys(filters).filter((key) => filters[key as Category])
    if (onKeys.length === 0) {
      return post
    } else if (onKeys.includes(post.category)) {
      return post
    }
  }

  return (
    <>
      <div className={style['filter-container']}>
        Filter posts:
        <div className={style['input-group']}>
          <input
            type="checkbox"
            name="fitness"
            id="fitness"
            onChange={(event) => handleChange(event.target.checked, 'fitness')}
          />
          <label htmlFor="fitness">Fitness</label>
        </div>
        <div className={style['input-group']}>
          <input
            type="checkbox"
            name="development"
            id="development"
            onChange={(event) => handleChange(event.target.checked, 'development')}
          />
          <label htmlFor="development">Development</label>
        </div>
      </div>
      <Grid>
        {postsSortedByDate.filter(filterPost).map((post) => (
          <Fragment key={post.slug}>
            <BlogCard {...post} />
          </Fragment>
        ))}
      </Grid>
    </>
  )
}
