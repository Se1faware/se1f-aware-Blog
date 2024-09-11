'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type ColorMode = 'light' | 'dark' | 'system'
type CurrentColorMode = 'light' | 'dark'

type ColorModeContext = {
  colorMode: ColorMode
  currentColorMode: CurrentColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

const ColorModeContext = createContext<ColorModeContext>(null!)

interface ColorModeProviderProps {
  children: ReactNode
}

function ColorModeProvider({ children }: ColorModeProviderProps) {
  const [colorMode, _setColorMode] = useState<ColorMode>('light')
  const [currentColorMode, setCurrentColorMode] = useState<CurrentColorMode>('light')

  const setColorMode = (colorMode: ColorMode) => {
    localStorage.setItem('pattern.mode', colorMode)
    if (colorMode === 'light') {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else if (colorMode === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.remove('dark')
    }
    _setColorMode(colorMode)
  }
  useEffect(() => {
    const colorMode = localStorage.getItem('pattern.mode')
    if (colorMode === 'system' || colorMode === 'dark') {
      setColorMode(colorMode)
    } else {
      setColorMode('light')
    }
  }, [])
  useEffect(() => {
    if (colorMode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      if (mediaQuery.matches) {
        setCurrentColorMode('dark')
      } else {
        setCurrentColorMode('light')
      }
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setCurrentColorMode('dark')
        } else {
          setCurrentColorMode('light')
        }
      }
      mediaQuery.addEventListener('change', listener)
      return () => {
        mediaQuery.removeEventListener('change', listener)
      }
    } else {
      setCurrentColorMode(colorMode)
    }
  }, [colorMode])

  const toggleColorMode = () => {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else if (colorMode === 'dark') {
      setColorMode('system')
    } else {
      setColorMode('light')
    }
  }

  return (
    <ColorModeContext.Provider
      value={{ colorMode, currentColorMode, setColorMode, toggleColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider

export function useColorMode() {
  return useContext(ColorModeContext)
}
