import { about, profile } from '@/data/site'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="panel">
      <div className="grid gap-12 xl:grid-cols-[1.25fr_0.75fr] xl:gap-12">
        <div>
          <SectionHeading eyebrow="About" title="Reliable systems behind everyday business work." />
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-muted">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.focus.map((f) => (
              <li key={f} className="rounded-full border border-line px-3 py-1 text-sm text-ink">
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="self-start rounded-xl border border-line bg-paper p-6">
          <h3 className="eyebrow text-muted">Experience</h3>
          <ol className="relative mt-5 space-y-6 border-l border-line pl-5">
            {about.experience.map((e, i) => (
              <li key={e.role} className="relative">
                <span
                  className={`absolute top-1.5 -left-[1.36rem] h-2 w-2 rounded-full ${
                    i === 0 ? 'bg-signal' : 'border border-ink/30 bg-paper'
                  }`}
                />
                <p className="font-medium leading-snug">{e.role}</p>
                <p className="mt-1 text-sm text-muted">
                  {e.org} · {e.note}
                </p>
              </li>
            ))}
          </ol>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium text-ink underline decoration-signal decoration-2 underline-offset-4"
          >
            View resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
