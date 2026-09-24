import { services } from '@/data/site'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" className="panel">
      <SectionHeading
        eyebrow="Services"
        title="What I set up and maintain."
        intro="Most projects combine a few of these. We start with the part that is costing you the most time."
      />
      <Reveal as="div" className="mt-10">
        <ol className="grid border-t border-line xl:grid-cols-2">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-5 border-b border-line py-7 xl:odd:border-r xl:odd:pr-8 xl:even:pl-8"
            >
              <span className="pt-1 font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
