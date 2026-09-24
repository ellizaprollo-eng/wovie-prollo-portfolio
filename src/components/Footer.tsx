import { links, navLinks, profile } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
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
