import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/Layout/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/Scroll/ScrollTopAndComment'
import PostScroll from '@/components/Scroll/PostScroll'
import { formatDate } from 'pliny/utils/formatDate'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, wordCount, readingTime, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      {/* <PostScroll /> */}
      <ScrollTopAndComment />
      <article>
        <div className="">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <PageTitle>{title}</PageTitle>
              <div className="space-y-10  text-xs font-medium leading-8 text-gray-500 dark:text-gray-400 lg:text-base xl:text-lg">
                {/* <div className="pt-1  font-medium text-gray-700 dark:text-gray-400"> */}
                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                <span className="mx-1">·</span>
                <span className="font-medium">{wordCount} 字</span>
                <span className="mx-1">·</span>
                <span>{readingTime} 分钟</span>
                {/* </div> */}
              </div>
            </div>
          </header>
          <div className="pb-8">
            <div className=" xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
