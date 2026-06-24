'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeScript() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const html = document.documentElement
    const isDark = resolvedTheme === 'dark'

    if (isDark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [resolvedTheme, mounted])

  return null
}
