import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

export default function Home({ posts }) {
  return (
    <>
      <div>
        <UserInfo />
        {/* Home Info Header */}
        <div className="divide-y divide-gray-200  text-3xl dark:divide-gray-700">
          <div className="pb-3">推荐阅读</div>
          <div className="pt-0"></div>
        </div>
        <ul className="divide-y divide-dashed divide-gray-200 dark:divide-gray-700">
          {Post({ posts })}
        </ul>
      </div>

      {siteMetadata.button?.display && posts.length > siteMetadata.post.homeMaxDisplay && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            所有文章 &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

function UserInfo() {
  return (
    <div className="flex items-center justify-between pb-8 pt-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          {siteMetadata.author}
        </h1>
        <h2 className="text-xs text-gray-700 dark:text-gray-300">{siteMetadata.intro}</h2>
        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
        <div>
          <span className="cursor-pointer text-blue-500">RSS</span>
          <span className="mx-2">·</span>
          <span className="cursor-pointer text-blue-500">Contact Me</span>
        </div>
      </div>

      <div className="hidden sm:block">
        <Image
          src={siteMetadata.avatar}
          alt={siteMetadata.author}
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
    </div>
  )
}

function Post({ posts }) {
  // TODO: Setting Not Found Note.
  if (!posts.length) {
    return <p>No posts found.</p>
  }

  return (
    <>
      {posts.slice(0, siteMetadata.post.homeMaxDisplay).map((post) => {
        const { slug, date, title, summary, tags, wordCount, readingTime } = post
        return (
          <li key={slug} className="py-6">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-4 tracking-tight">
                        <Link
                          href={`/blog/${slug}`}
                          className="leading-8 text-gray-900 hover:text-primary-600 dark:text-gray-100 dark:hover:underline"
                        >
                          {title}
                        </Link>
                      </h2>
                      <div className="pt-1 text-xs font-medium text-gray-700 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        <span className="mx-1">·</span>
                        <span className="text-xs font-medium">{wordCount} 字</span>
                        <span className="mx-1">·</span>
                        <span>{readingTime} 分钟</span>
                      </div>
                      <p className="mt-3 text-[14px] text-gray-700 dark:text-gray-400">{summary}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </li>
        )
      })}
    </>
  )
}
