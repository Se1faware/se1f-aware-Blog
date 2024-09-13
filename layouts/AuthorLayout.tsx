import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Icon } from '@iconify-icon/react'

import {
  IconBrandGithub,
  IconSkillNginx,
  IconSkillCSS,
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
  IconBrandPiedPiperHat,
  IconSkillHardhat,
} from '@/components/icons'
import SkillScroller from '@/components/Scroll/SkillScroller'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, github, juejin, leetCode, dotNET } = content
  const { author } = siteMetadata

  const skillsData = [
    {
      icon: <IconSkillNginx />,
      name: 'Nginx',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--nginx]',
    },
    {
      icon: <IconSkillCSS />,
      name: 'CSS',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--css]',
    },
    {
      icon: <IconSkillDocker />,
      name: 'Docker',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--docker]',
    },
    {
      icon: <IconSkillFigmaDark />,
      name: 'Figma',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--figma-dark]',
    },
    {
      icon: <IconSkillFigmaLight />,
      name: 'Figma',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--figma-light]',
    },
    {
      icon: <IconSkillHTML />,
      name: 'HTML',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--html]',
    },
    {
      icon: <IconSkillJavaScript />,
      name: 'JavaScript',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--javascript]',
    },
    {
      icon: <IconSkillMysqlDark />,
      name: 'MySQL',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--mysql-dark]',
    },
    {
      icon: <IconSkillMysqlLight />,
      name: 'MySQL',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--mysql-light]',
    },
    {
      icon: <IconSkillNextjsDark />,
      name: 'Next.js',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--nextjs-dark]',
    },
    {
      icon: <IconSkillNextjsLight />,
      name: 'Next.js',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--nextjs-light]',
    },
    {
      icon: <IconSkillNodejsDark />,
      name: 'Node.js',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--nodejs-dark]',
    },
    {
      icon: <IconSkillNodejsLight />,
      name: 'Node.js',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--nodejs-light]',
    },
    {
      icon: <IconSkillPrisma />,
      name: 'Prisma',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--prisma]',
    },
    {
      icon: <IconSkillReactDark />,
      name: 'React',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--react-dark]',
    },
    {
      icon: <IconSkillReactLight />,
      name: 'React',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--react-light]',
    },
    {
      icon: <IconSkillTailwindcssDark />,
      name: 'Tailwind CSS',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--tailwindcss-dark]',
    },
    {
      icon: <IconSkillTailwindcssLight />,
      name: 'Tailwind CSS',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--tailwindcss-light]',
    },
    {
      icon: <IconSkillTypeScript />,
      name: 'TypeScript',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--typescript]',
    },
    {
      icon: <IconSkillDotnet />,
      name: 'Dotnet',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--dotnet]',
    },
    {
      icon: <IconSkillViteDark />,
      name: 'Vite',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--vite-dark]',
    },
    {
      icon: <IconSkillViteLight />,
      name: 'Vite',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--vite-light]',
    },
    {
      icon: <IconSkillVuejsDark />,
      name: 'Vue.js',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--vuejs-dark]',
    },
    {
      icon: <IconSkillVuejsLight />,
      name: 'Vue.js',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--vuejs-light]',
    },
    {
      icon: <IconSkillVuetifyDark />,
      name: 'Vuetify',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--vuetify-dark]',
    },
    {
      icon: <IconSkillVuetifyLight />,
      name: 'Vuetify',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--vuetify-light]',
    },
    {
      icon: <IconSkillAzureDark />,
      name: 'Azure',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--azure-dark]',
    },
    {
      icon: <IconSkillAzureLight />,
      name: 'Azure',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--azure-light]',
    },
    {
      icon: <IconSkillCloudflareDark />,
      name: 'Cloudflare',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--cloudflare-dark]',
    },
    {
      icon: <IconSkillCloudflareLight />,
      name: 'Cloudflare',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--cloudflare-light]',
    },
    {
      icon: <IconSkillCypressDark />,
      name: 'Cypress',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--cypress-dark]',
    },
    {
      icon: <IconSkillCypressLight />,
      name: 'Cypress',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--cypress-light]',
    },
    {
      icon: <IconSkillExpressjsDark />,
      name: 'Express.js',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--expressjs-dark]',
    },
    {
      icon: <IconSkillExpressjsLight />,
      name: 'Express.js',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--expressjs-light]',
    },
    {
      icon: <IconSkillIpfsDark />,
      name: 'IPFS',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--ipfs-dark]',
    },
    {
      icon: <IconSkillIpfsLight />,
      name: 'IPFS',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--ipfs-light]',
    },
    {
      icon: <IconSkillLessDark />,
      name: 'Less',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--less-dark]',
    },
    {
      icon: <IconSkillLessLight />,
      name: 'Less',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--less-light]',
    },
    {
      icon: <IconSkillNeovimDark />,
      name: 'Neovim',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--neovim-dark]',
    },
    {
      icon: <IconSkillNeovimLight />,
      name: 'Neovim',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--neovim-light]',
    },
    {
      icon: <IconSkillNotionDark />,
      name: 'Notion',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--notion-dark]',
    },
    {
      icon: <IconSkillNotionLight />,
      name: 'Notion',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--notion-light]',
    },
    {
      icon: <IconSkillObsidianDark />,
      name: 'Obsidian',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--obsidian-dark]',
    },
    {
      icon: <IconSkillObsidianLight />,
      name: 'Obsidian',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--obsidian-light]',
    },
    {
      icon: <IconSkillVercelDark />,
      name: 'Vercel',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--vercel-dark]',
    },
    {
      icon: <IconSkillVercelLight />,
      name: 'Vercel',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--vercel-light]',
    },
    {
      icon: <IconSkillWebpackDark />,
      name: 'Webpack',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--webpack-dark]',
    },
    {
      icon: <IconSkillWebpackLight />,
      name: 'Webpack',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--webpack-light]',
    },
    {
      icon: <IconSkillDjango />,
      name: 'Django',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--django]',
    },
    {
      icon: <IconSkillSolidity />,
      name: 'Solidity',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--solidity]',
    },
    {
      icon: <IconSkillEmotionLight />,
      name: 'Emotion',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--emotion-light]',
    },
    {
      icon: <IconSkillEmotionDark />,
      name: 'Emotion',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--emotion-dark]',
    },
    {
      icon: <IconSkillWebassembly />,
      name: 'WebAssembly',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--webassembly]',
    },
    {
      icon: <IconSkillVscodeDark />,
      name: 'VSCode',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--vscode-dark]',
    },
    {
      icon: <IconSkillVscodeLight />,
      name: 'VSCode',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--vscode-light]',
    },
    {
      icon: <IconSkillCpp />,
      name: 'C++',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--cpp]',
    },
    {
      icon: <IconSkillJest />,
      name: 'Jest',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--jest]',
    },
    {
      icon: <IconSkillPythonLight />,
      name: 'Python',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--python-light]',
    },
    {
      icon: <IconSkillPythonDark />,
      name: 'Python',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--python-dark]',
    },
    {
      icon: <IconSkillRollupjsDark />,
      name: 'RollupJS',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--rollupjs-dark]',
    },
    {
      icon: <IconSkillRollupjsLight />,
      name: 'RollupJS',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--rollupjs-light]',
    },
    {
      icon: <IconSkillSentry />,
      name: 'Sentry',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--sentry]',
    },
    {
      icon: <IconSkillSvelte />,
      name: 'Svelte',
      isDarkModeOnly: false,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--svelte]',
    },
    {
      icon: <IconSkillGraphqlDark />,
      name: 'GraphQL',
      isDarkModeOnly: true,
      isLightModeOnly: false,
      className: 'icon-[skill-icons--graphql-dark]',
    },
    {
      icon: <IconSkillGraphqlLight />,
      name: 'GraphQL',
      isDarkModeOnly: false,
      isLightModeOnly: true,
      className: 'icon-[skill-icons--graphql-light]',
    },
  ]

  return (
    <>
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
          <h2>
            <IconBrandPiedPiperHat className="mx-1 translate-y-0.5" />
            My Skills
          </h2>
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
              <span className="mx-1 text-xl"> | </span>
              <IconSkillCpp className="mx-1 translate-y-0.5" />
              C++
              <IconSkillPythonDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Python
            </li>
            <li>
              <span>Framework: </span>
              <IconSkillVuejsDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillVuejsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Vue (*eco)
              <IconSkillSvelte className="mx-1 translate-y-0.5" />
              Svelte
              <IconSkillDjango className="mx-1 translate-y-0.5" />
              Django
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
              <span>Css: </span>
              <IconSkillLessDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillLessLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Less
              <IconSkillEmotionLight className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillEmotionDark className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              Emotion
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
              <IconSkillGraphqlDark className="mx-1 translate-y-0.5 dark:hidden" />
              <IconSkillGraphqlLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
              GraphQL
              <IconSkillPythonLight className="mx-1 translate-y-0.5 dark:hidden" />
            </li>
          </div>
        </div>
      </div>

      {/* <div className="prose w-full max-w-none pb-8 dark:prose-invert xl:col-span-2">
        <h3>And i has some database tech</h3>
        <div className="animate-fade-up animate-ease-in-out">
          <IconSkillPrisma className="mx-1 translate-y-0.5" />
          Prisma
          <IconSkillMysqlDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillMysqlLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Mysql
        </div>

        <h3>I used that cloud server</h3>
        <div className="animate-fade-up animate-ease-in-out">
          <IconSkillVercelDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillVercelLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Vercel
          <IconSkillAzureDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillAzureLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Azure
          <IconSkillCloudflareDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillCloudflareLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Cloudflare
        </div>

        <h3>I loooove web3</h3>
        <div>
          <IconSkillSolidity className="mx-1 translate-y-0.5" />
          Solidity
          <IconSkillHardhat className=" mx-1 translate-y-0.5" />
          Hardhat
          <IconSkillIpfsDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillIpfsLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Ipfs
        </div>

        <h3>I use these tools to improve myself</h3>
        <div>
          <IconSkillNeovimDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillNeovimLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Neovim
          <IconSkillNotionDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillNotionLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Notion
          <IconSkillObsidianDark className="mx-1 translate-y-0.5 dark:hidden" />
          <IconSkillObsidianLight className="mx-1 hidden translate-y-0.5 dark:inline-block" />
          Obsidian
        </div>
        <h3>My other skills</h3>
        <div>
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
          <IconSkillWebassembly className="mx-1 translate-y-0.5" />
          Webassembly
        </div>
      </div> */}

      {/* <div className="mb-4">
        <h2 className="mb-2 border-y-2 text-2xl font-bold">Let me show you my real power</h2>
        <SkillScroller skills={skillsData} />
      </div> */}
    </>
  )
}
