import { usePathname } from 'next/navigation'
import React from 'react'

function truncateTitle(title: string, maxLength: number = 30): string {
  return title.length > maxLength ? title.slice(0, maxLength - 3) + '...' : title
}

export default function CurrentPage() {
  const path = usePathname()
  const routes: Record<string, string | ((path: string) => string | undefined)> = {
    '/': 'Home',
    '/blog': 'Blog',
    '/about': 'About',
    '/contact': 'Contact',
    // '/blog/': (p) => (p.startsWith('/blog/') ? `Blog Post: ${p.slice(6)}` : undefined),
    // '/projects/': (p) => (p.startsWith('/projects/') ? `Project: ${p.slice(10)}` : undefined),
  }

  const getTitle = () => {
    for (const [route, value] of Object.entries(routes)) {
      if (typeof value === 'function') {
        const result = value(path)
        if (result) return truncateTitle(result)
      } else if (path === route) {
        return value
      }
    }
    return
    // return 'Page Not Found'
  }

  return (
    <span className="max-w-[80vw] overflow-hidden text-ellipsis whitespace-nowrap">
      {getTitle()}
    </span>
  )
}
