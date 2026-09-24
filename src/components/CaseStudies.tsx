import { caseStudies, type CaseStudy } from '@/data/site'
import { FlowDiagram } from './Motif'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function CaseStudies() {
  return (
    <section id="work" className="bg-ink py-20 text-mist md:py-28">
      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="Selected projects"
          title="Problem, system, result."
          intro="Six systems from my portfolio. Each one replaced a manual step with a workflow that runs on its own."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} as="article" delay={(i % 2) * 80}>
              <CaseCard study={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseCard({ study }: { study: CaseStudy }) {
  const rows = [
    { label: 'Problem', text: study.problem },
    { label: 'System', text: study.system },
    { label: 'Result', text: study.result },
  ]
  return (
    <div className="flex h-full flex-col rounded-xl border border-white/10 bg-ink-2 p-6 md:p-7">
      <h3 className="font-serif text-2xl leading-tight text-white md:text-[1.75rem]">{study.title}</h3>
      <p className="mt-2 text-xs tracking-wide text-mist-dim">{study.tools.join(' · ')}</p>

      <div className="mt-6 rounded-lg border border-white/10 bg-black/15 p-4">
        <FlowDiagram lanes={study.flow} dark />
      </div>

      <dl className="mt-6 space-y-4">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
            <dt className={`eyebrow pt-0.5 text-[0.68rem] ${r.label === 'Result' ? 'text-signal' : 'text-mist-dim'}`}>
              {r.label}
            </dt>
            <dd className="text-[0.95rem] leading-relaxed">{r.text}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
        {study.screenshots.map((s) => (
          <a
            key={s.src}
            href={s.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-signal"
          >
            View {s.label.toLowerCase()} screenshot
          </a>
        ))}
      </div>
    </div>
  )
}
