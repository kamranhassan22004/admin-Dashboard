'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeScript } from './ThemeScript'

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="nexadash-theme"
      forcedTheme={undefined}
    >
      <ThemeScript />
      {children}
    </NextThemesProvider>
  )
}