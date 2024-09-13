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
  IconSkillObsidianDark,
  IconSkillObsidianLight,
  IconSkillVercelDark,
  IconSkillVercelLight,
  IconSkillWebpackDark,
  IconSkillWebpackLight,
  IconSkillDjango,
  IconSkillSolidity,
  IconSkillEmotionLight,
  IconSkillEmotionDark,
  IconSkillWebassembly,
  IconSkillVscodeDark,
  IconSkillVscodeLight,
  IconSkillCpp,
  IconSkillJest,
  IconSkillPythonLight,
  IconSkillPythonDark,
  IconSkillRollupjsDark,
  IconSkillRollupjsLight,
  IconSkillSentry,
  IconSkillSvelte,
  IconSkillGraphqlDark,
  IconSkillGraphqlLight,
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
            {/* <h3>I use that Front-End</h3> */}
            <h3>I'm good at using these skills.</h3>
            <div className="">
              <li>
                <span>Base: </span>
                <IconSkillHTML className="mx-1 translate-y-0.5" />
                HTML
                <IconSkillCSS className="mx-1 translate-y-0.5" />
                CSS
                <IconSkillJavaScript className="mx-1 translate-y-0.5" />
                JavaScript
              </li>
              <li>
                <span>Framework: </span>
                <IconSkillVuejsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillVuejsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Vue (*eco)
                <IconSkillSvelte className="mx-1 translate-y-0.5" />
                Svelte
              </li>
              <li>
                <span>Css: </span>
                {/* Less Icons */}
                <IconSkillLessDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillLessLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Less
                {/* Emotion Icons */}
                <IconSkillEmotionLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillEmotionDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Emotion
              </li>
              <li>
                <span>Build: </span>
                <IconSkillRollupjsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillRollupjsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                RollupJS
                <IconSkillWebpackDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillWebpackLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Webpack
                <IconSkillViteDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillViteLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Vite
              </li>
              <li>
                <span>UniTest: </span>
                <IconSkillCypressDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillCypressLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Cypress
                <IconSkillJest className="mx-1 translate-y-0.5" />
                Jest
              </li>
              <li>
                <span>Back-End Tech: </span>
                <IconSkillNodejsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillNodejsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Nodejs
                <IconSkillExpressjsDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillExpressjsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Expressjs
                <IconSkillDjango className="mx-1 translate-y-0.5" />
                Django
                <IconSkillCpp className="mx-1 translate-y-0.5" />
                C++
                <IconSkillGraphqlDark className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillGraphqlLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                GraphQL
                <IconSkillPythonLight className="mx-1 translate-y-0.5 dark:hidden" />
                <IconSkillPythonDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
                Python
              </li>
            </div>

            <h3>And i has some database tech</h3>
            <div className="animate-fade-up animate-ease-in-out">
              <IconSkillPrisma className="mx-1 translate-y-0.5" />
              Prisma
              <IconSkillMysqlDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillMysqlLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Mysql
            </div>

            <h4>I used that ui components</h4>
            <div className="animate-fade-up animate-ease-in-out">
              {/* Vuetify Icons */}
              <IconSkillVuetifyDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVuetifyLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Vuetify
            </div>

            <h4>I used that cloud server</h4>
            <div className="animate-fade-up animate-ease-in-out">
              {/* Vercel Icons */}
              <IconSkillVercelDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVercelLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Vercel
              {/* Azure Icons */}
              <IconSkillAzureDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillAzureLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Azure
              {/* Cloudflare Icons */}
              <IconSkillCloudflareDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillCloudflareLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Cloudflare
            </div>

            <h3>I loooove web3</h3>
            <div>
              <IconSkillSolidity className="mx-1 translate-y-0.5" />
              Solidity
              {/* Ipfs Icons */}
              <IconSkillIpfsDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillIpfsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Ipfs
            </div>

            <h3>I use these tools to improve myself</h3>
            <div>
              {/* Neovim Icons */}
              <IconSkillNeovimDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillNeovimLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Neovim
              {/* Notion Icons */}
              <IconSkillNotionDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillNotionLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Notion
              {/* Obsidian Icons */}
              <IconSkillObsidianDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillObsidianLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Obsidian
            </div>
            <h3>My other skills</h3>
            <div>
              {/* Neovim Icons */}
              <IconSkillDocker className="mx-1 translate-y-0.5" />
              Docker <IconSkillDotnet className="mx-1 translate-y-0.5" />
              Dotnet
              <IconSkillFigmaDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillFigmaLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Figma
              <IconSkillSentry className="mx-1 translate-y-0.5" />
              Sentry
              <IconSkillVscodeDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVscodeLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              VSCode
              {/* Webassembly Icon */}
              <IconSkillWebassembly className="mx-1 translate-y-0.5" />
              Webassembly
            </div>

            {/* ----------------------------------------- */}
          </div>
        </div>
      </div>
    </>
  )
}
