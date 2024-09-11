import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, github, juejin, leetCode, dotNET } = content
  const { author } = siteMetadata

  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Avatar className="h-28 w-28 rounded-full">
                <AvatarImage src={avatar} alt="avatar" />
                <AvatarFallback delayMs={600}>{name}</AvatarFallback>
              </Avatar>
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="juejin" href={juejin} />
              <SocialIcon kind="leetCode" href={leetCode} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <h2>My Skills</h2>
            <h3>Front-End</h3>
            <h4>Base Tech</h4>
            <ul className="flex list-none p-0">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <h4>Css Power</h4>
            <ul className="flex list-none p-0">
              <li>Less & Sass</li>
              <li>Tailwind Css</li>
              <li>Css in Js</li>
              <li>Emotion Css</li>
            </ul>
            <h4>More Magic</h4>
            <ul className="flex list-none p-0">
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.Js</li>
            </ul>
            <li>
              <SocialIcon kind="dotNET" href={dotNET} />
              dotNET
            </li>
          </div>
        </div>
      </div>
    </>
  )
}
