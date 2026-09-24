import { profile, tools } from '@/data/site'
import { HeroBackdrop } from './Motif'
import { ArrowIcon } from './Icons'
import { LiveFlow } from './LiveFlow'

export function Hero() {
  const lines = profile.titleLines
  const last = lines.length - 1

  return (
    <section className="panel relative overflow-hidden">
      <HeroBackdrop />
      <div className="relative">
        <div className="grid gap-10 xl:grid-cols-[1.2fr_1fr] xl:items-center">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.1em] text-muted uppercase">
              <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_0_4px_rgb(255_90_31/0.18)]" />
              {profile.heroEyebrow}
            </p>

            {/* One span per line so the breaks are deliberate; the last line is the accent. */}
            {/* Size scales with the viewport so the widest line ("AI Automation Builder.") never wraps. */}
            <h1 className="mt-6 font-heading text-[clamp(1.9rem,9.6vw,3.75rem)] leading-[1.02] tracking-tight xl:text-[clamp(2.75rem,4.2vw,4rem)]">
              {lines.map((line, i) => (
                <span key={line} className={i === last ? 'block italic text-signal-deep' : 'block'}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              I build systems that organize leads, automate follow&#8209;up, and simplify business
              operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href="#book" className="btn btn-primary rounded-full px-6 py-3.5 text-base">
                Book a call
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="text-[0.95rem] text-muted underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ink"
              >
                See the work
              </a>
            </div>
          </div>

          {profile.heroVisual ? (
            <img src={profile.heroVisual} alt="" className="w-full rounded-[1.1rem] border border-line" />
          ) : (
            <LiveFlow />
          )}
        </div>

        <div className="mt-10 border-t border-line pt-6">
          <p className="eyebrow text-[0.7rem] text-muted">Tools I work with</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-md border border-line bg-paper px-2.5 py-1.5 font-mono text-[0.75rem] text-ink/80"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
