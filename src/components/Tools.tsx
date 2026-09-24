import { tools } from '@/data/site'

export function Tools() {
  return (
    <section id="tools" className="border-b border-line py-14 md:py-16">
      <div className="container-x">
        <p className="eyebrow text-muted">Tools I work with</p>
        <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
          {tools.map((t) => (
            <li
              key={t}
              className="rounded-md border border-line bg-card px-3 py-1.5 text-sm font-medium text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
