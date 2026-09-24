import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type Theme = 'light' | 'dark'

/**
 * Light/dark switch. The initial theme is applied before first paint by the
 * inline script in __root.tsx (saved choice, else the OS preference); this
 * button reads it from <html data-theme> and saves the visitor's choice.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked (private mode); the switch still works for this visit.
    }
    setTheme(next)
    window.dispatchEvent(new CustomEvent('themechange', { detail: next }))
  }

  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className={cn(
        'grid h-10 w-10 shrink-0 place-items-center rounded-md border border-line text-ink transition-colors hover:border-ink',
        className,
      )}
    >
      {dark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-[18px] w-[18px]">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  )
}
