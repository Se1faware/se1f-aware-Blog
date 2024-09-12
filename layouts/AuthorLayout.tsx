import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icon } from '@iconify-icon/react'

import {
  IconBrandGithub,
  IconLogoBing,
  IconLogoCentOS,
  IconLogoGoogle,
  IconSkillNginx,
  IconLogoRockyLinux,
  IconSkillCSS,
  IconSkillStackoverflowDark,
  IconSkillStackoverflowLight,
  IconSkillDebianDark,
  IconSkillDebianLight,
  IconSkillDocker,
  IconSkillFigmaDark,
  IconSkillFigmaLight,
  IconSkillHTML,
  IconSkillJavaScript,
  IconSkillMysqlDark,
  IconSkillMysqlLight,
  IconSkillNextjsDark,
  IconSkillNextjsLight,
  IconSkillNodejsDark,
  IconSkillNodejsLight,
  IconSkillPrisma,
  IconSkillReactDark,
  IconSkillReactLight,
  IconSkillTailwindcssDark,
  IconSkillTailwindcssLight,
  IconSkillTypeScript,
  IconSkillDotnet,
  IconSkillViteDark,
  IconSkillViteLight,
  IconSkillVuejsDark,
  IconSkillVuejsLight,
  IconSkillVuetifyDark,
  IconSkillVuetifyLight,
  IconSkillAzureDark,
  IconSkillAzureLight,
  IconSkillCloudflareDark,
  IconSkillCloudflareLight,
  IconSkillCypressDark,
  IconSkillCypressLight,
  IconSkillExpressjsDark,
  IconSkillExpressjsLight,
  IconSkillIpfsDark,
  IconSkillIpfsLight,
  IconSkillLessDark,
  IconSkillLessLight,
  IconSkillNeovimDark,
  IconSkillNeovimLight,
  IconSkillNotionDark,
  IconSkillNotionLight,
  IconSkillPiniaDark,
  IconSkillPiniaLight,
  IconSkillObsidianDark,
  IconSkillObsidianLight,
  IconSkillVercelDark,
  IconSkillVercelLight,
  IconSkillWebpackDark,
  IconSkillWebpackLight,
  IconSkillDjango,
  IconSkillSolidity,
} from '@/components/icons'

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
            <h3>Mainly Coding Follow</h3>
            <div>
              <IconSkillTypeScript className="mx-1 translate-y-0.5" />
              TypeScript +
              <>
                <IconSkillReactDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillReactLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              React +
              <>
                <IconSkillNextjsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNextjsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Next.js +
              <>
                <IconSkillTailwindcssDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillTailwindcssLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              </>
              Tailwind CSS
            </div>
            <h3>I use that Front-End</h3>
            <div className="">
              <IconSkillHTML className="mx-1 translate-y-0.5" />
              HTML
              <IconSkillCSS className="mx-1 translate-y-0.5" />
              CSS
              <IconSkillJavaScript className="mx-1 translate-y-0.5" />
              JavaScript
            </div>
            <h4>Css Power</h4>
            <ul className="flex list-none p-0">
              <li>Less & Sass</li>
              <li>Tailwind Css</li>
              <li>Css in Js</li>
              <li>Emotion Css</li>
            </ul>
            <h4>More Magic</h4>
            <ul className="">
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.Js</li>
            </ul>
            <p>
              <IconSkillViteDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillViteLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Vite
            </p>
            <h4>And i has some database tech</h4>
            <ul className="flex list-none p-0">
              <li>TypeScript</li>
              <li>React</li>
              <li>Next.Js</li>
            </ul>
            <div className="animate-fade-up animate-ease-in-out">
              {/* Vuejs Icons */}
              <IconSkillVuejsDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVuejsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Vue Tech
              {/* Cypress Icons */}
              <IconSkillCypressDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillCypressLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Expressjs Icons */}
              <IconSkillExpressjsDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillExpressjsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Ipfs Icons */}
              <IconSkillIpfsDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillIpfsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Less Icons */}
              <IconSkillLessDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillLessLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Neovim Icons */}
              <IconSkillNeovimDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillNeovimLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Notion Icons */}
              <IconSkillNotionDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillNotionLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Pinia Icons */}
              <IconSkillPiniaDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillPiniaLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Obsidian Icons */}
              <IconSkillObsidianDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillObsidianLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Vercel Icons */}
              <IconSkillVercelDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVercelLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Webpack Icons */}
              <IconSkillWebpackDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillWebpackLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Django Icon */}
              <IconSkillDjango className="mx-1 translate-y-0.5" />
              {/* Solidity Icon */}
              <IconSkillSolidity className="mx-1 translate-y-0.5" />
              <IconSkillDotnet className="mx-1 translate-y-0.5" />
              dotNET
            </div>
            <h4>I used that ui components</h4>
            <div className="animate-fade-up animate-ease-in-out">
              {/* Vuetify Icons */}
              <IconSkillVuetifyDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVuetifyLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
            </div>

            <h4>I used that cloud server</h4>
            <div className="animate-fade-up animate-ease-in-out">
              {/* Azure Icons */}
              <IconSkillAzureDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillAzureLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              {/* Cloudflare Icons */}
              <IconSkillCloudflareDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillCloudflareLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
