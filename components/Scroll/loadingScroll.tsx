'use client'

import { useState, useEffect } from 'react'

const LoadingBar = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 300)
    }

    window.addEventListener('routeChangeStart', handleRouteChange)
    window.addEventListener('routeChangeComplete', () => {
      setLoading(false)
    })
    window.addEventListener('routeChangeError', () => {
      setLoading(false)
    })

    return () => {
      window.removeEventListener('routeChangeStart', handleRouteChange)
      window.removeEventListener('routeChangeComplete', () => {
        setLoading(false)
      })
      window.removeEventListener('routeChangeError', () => {
        setLoading(false)
      })
    }

    // window.addEventListener('routeChangeStart', handleRouteChange)
    // return () => {
    //   window.removeEventListener('routeChangeStart', handleRouteChange)
    // }
  }, [])

  return <>{loading && <div className="loading-bar"></div>}</>
}

export default LoadingBar
