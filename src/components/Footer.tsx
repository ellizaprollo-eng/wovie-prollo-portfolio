import { links, navLinks, profile } from '@/data/site'

export function Footer() {
  return (
    <footer className="mt-4">
      <div className="flex flex-col gap-6 px-2 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
