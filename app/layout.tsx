import 'css/tailwind.css'
import 'pliny/search/algolia.css'

import { Jura, Roboto_Mono, Noto_Sans_SC } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Layout/Header'
import MainContainer from '@/components/Layout/MainContainer'
import Footer from '@/components/Layout/Footer'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'
import TransitionCurve from '@/components/Transition/TransitionCurve'
import LoadingBar from '@/components/Scroll/loadingScroll'

const jura = Jura({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jura',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const noto_sans_sc = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-sans-sc',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isChineseLanguage = siteMetadata.language.startsWith('zh')
  const fontClass = isChineseLanguage ? noto_sans_sc.variable : jura.variable

  return (
    <html
      lang={siteMetadata.language}
      className={`scroll-smooth ${fontClass} ${roboto_mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC&display=swap"
          rel="stylesheet"
        /> */}
        <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon.ico" />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={`bg-white text-black antialiased dark:bg-gray-950 dark:text-white ${isChineseLanguage ? 'font-sans' : 'font-serif'}`}
      >
        {/* <body className=" dark:text-customIndigo-100 bg-customIndigo-100 text-customGrey-400 antialiased dark:bg-gray-950"> */}
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <MainContainer>
            <LoadingBar />
            <div className="flex flex-col justify-between bg-white font-sans dark:bg-gray-950">
              <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
                <Header />
                <main className="mx-4 mb-auto sm:mx-6">
                  {/* <TransitionCurve>{children}</TransitionCurve> */}
                  {children}
                </main>
              </SearchProvider>
              <Footer />
            </div>
          </MainContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
