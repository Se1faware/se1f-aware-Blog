'use client'

import './styles/duneScroll.css'
import { useEffect } from 'react'

const DunePage = ({ children }) => {
  useEffect(() => {
    function updateScroller() {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const top = Math.round((scrollY / (documentHeight - viewportHeight)) * 100)
      const bottom = Math.round(
        ((scrollY + viewportHeight - documentHeight) / (documentHeight - viewportHeight)) * 100
      )

      const startPoint = document.querySelector('.start_point')
      const endPoint = document.querySelector('.end_point')
      const scroll = document.querySelector('.scroll') as HTMLDivElement

      if (startPoint && endPoint && scroll) {
        startPoint.textContent = `${top}%`
        endPoint.textContent = `${bottom}%`

        if (viewportHeight + window.pageYOffset > 1.2 * viewportHeight) {
          scroll.style.opacity = '1'
        } else {
          scroll.style.opacity = '0'
        }
      }
    }

    window.addEventListener('scroll', updateScroller)
    window.addEventListener('resize', updateScroller)
    updateScroller()

    return () => {
      window.removeEventListener('scroll', updateScroller)
      window.removeEventListener('resize', updateScroller)
    }
  }, [])

  return (
    <div>
      <div className="ruler">
        <div className="mask start_point">0%</div>
        <div className="mask end_point">0%</div>
        <div className="lines">
          {[...Array(25)].map((_, index) => (
            <span key={index}></span>
          ))}
        </div>
      </div>

      <main id="main">
        <div className="line top"></div>
        {children}
        <div className="line bottom"></div>
      </main>

      <a className="scroll" href="#main">
        <div className="container">
          {[...Array(9)].map((_, index) => (
            <div className="rectangle" key={index}></div>
          ))}
        </div>
        <span className="text">Throttle up</span>
      </a>
    </div>
  )
}

export default DunePage
