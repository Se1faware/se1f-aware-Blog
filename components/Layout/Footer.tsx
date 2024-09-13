import Link from '../Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="border-line   flex flex-col items-center border-t-[1px] pt-2">
        <div className="mb-4  flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        {/* <div className="mb-8 text-center text-sm text-gray-500 dark:text-gray-400"> */}
        {/* <Link href="http://beian.miit.gov.cn">湘ICP备2023013145号-1</Link> */}
        {/* <Link
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43012102000901"
            className="flex items-center"
          >
            <Image
              width={16}
              height={16}
              src="/static/images/gongan.png"
              className="mr-1 h-4 w-4"
              alt="Web3研习社"
            />
            湘公网安备43012102000901号
          </Link> */}
        {/* </div> */}
      </div>
    </footer>
  )
}
