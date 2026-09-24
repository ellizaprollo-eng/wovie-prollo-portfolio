import { useState } from 'react'
import { navLinks, profile } from '@/data/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md bg-ink font-serif text-lg leading-none text-paper">
            W
          </span>
          <span className="text-[0.95rem] font-medium tracking-tight">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#book" className="btn btn-primary hidden !py-2.5 !text-sm sm:inline-flex">
            <span className="btn-node" />
            Book a Call
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md border border-line md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  'absolute left-0 h-px w-4 bg-ink transition-transform',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-4 bg-ink transition-transform',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn('border-t border-line bg-paper md:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="container-x flex flex-col py-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-3 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-3">
            <a href="#book" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
              <span className="btn-node" />
              Book a Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
