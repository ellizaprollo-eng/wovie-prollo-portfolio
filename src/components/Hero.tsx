import { profile, tools } from '@/data/site'
import { HeroBackdrop } from './Motif'
import { ArrowIcon } from './Icons'
import { LiveFlow } from './LiveFlow'

export function Hero() {
  return (
    <section className="panel relative overflow-hidden">
      <HeroBackdrop />
      <div className="relative">
        {/* Full-width title, one deliberate line per entry; balance handles narrow screens. */}
        <h1 className="font-heading text-[2.3rem] leading-[1.06] tracking-tight sm:text-[2.75rem] xl:text-[3.75rem]">
          {profile.titleLines.map((line, i) => (
            <span key={line} className={i === 1 ? 'block italic text-balance' : 'block text-balance'}>
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_1.05fr] xl:items-start xl:gap-10">
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              I build systems that organize leads, automate follow&#8209;up, and{' '}
              <em className="text-signal-deep">simplify</em> business operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#book" className="btn btn-primary">
                <span className="btn-node" />
                Book a Call
              </a>
              <a href="#work" className="btn btn-ghost bg-card">
                See selected work
                <ArrowIcon className="h-4 w-4" />
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
