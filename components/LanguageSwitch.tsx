import React from 'react'
import { useRouter } from 'next/router'
import { useLocale } from 'next-intl'

const LanguageSwitch: React.FC = () => {
  const router = useRouter()
  const locale = useLocale()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'zh' : 'en'
    router.push(router.asPath, undefined, { locale: newLocale })
  }

  return (
    <button
      onClick={toggleLanguage}
      className="language-switch-btn"
      aria-label={`Switch to ${locale === 'en' ? 'Chinese' : 'English'}`}
    >
      {locale === 'en' ? '中文' : 'English'}
    </button>
  )
}

export default LanguageSwitch
