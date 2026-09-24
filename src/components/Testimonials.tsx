import { testimonials } from '@/data/site'
import { SectionHeading } from './SectionHeading'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

export function Testimonials() {
  return (
    <section id="testimonials" className="panel">
      <SectionHeading eyebrow="Client testimonials" title="What clients say." />
      <ul className="mt-8 grid gap-4 xl:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col rounded-xl border border-line bg-paper p-6">
              <span aria-hidden="true" className="font-heading text-4xl leading-none text-signal">
                “
              </span>
              <blockquote className="mt-2 flex-1 leading-relaxed text-ink/85">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-heading text-sm text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-medium">{t.name}</span>
                  <span className="block text-sm text-muted">{t.title}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
