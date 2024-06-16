'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useHasMounted } from '@/utils/hooks/use-has-mounted'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const hasMounted = useHasMounted()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      className="dark:bg-darkBg opacity-95 border-none"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
    >
      {hasMounted && theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all" />
      )}
    </Button>
  )
}
