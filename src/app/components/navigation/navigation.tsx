import Link from 'next/link'
import { Button } from '@mantine/core'

import './navigation.scss'

const NAV_ITEMS = [
  {
    label: "Home",
    url: "/"
  },
  {
    label: "Resume",
    url: "/resume"
  },
  {
    label: "Projects",
    url: "/projects"
  },
  {
    label: "Blog",
    url: "/blog"
  }
]

export default function Navigation() {

  return (
    <nav className="nav-container">
        {NAV_ITEMS.map((item) => (
          <Button
            className="nav-item"
            component={Link}
            key={item.label}
            variant="filled"
            size="md"
            radius="sm"
            href={item.url}
          >
            {item.label}
          </Button>
        ))}
    </nav>
  )
}

