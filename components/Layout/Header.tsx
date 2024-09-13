import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../Link'
import MobileNav from '../Multi-Platform/MobileNav'
import ThemeSwitch from '../Theme/ThemeSwitch'
import SearchButton from '../SearchButton'

const Header = () => {
  return (
    <header className="border-line flex  items-center justify-between border-b-[1px] py-4 pr-2 ">
      <div className="mx-4 sm:mx-6">
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="font-bold text-gray-900 first-line:hidden dark:text-gray-100 sm:block">
              {headerNavLinks[0].title}
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-bold text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
