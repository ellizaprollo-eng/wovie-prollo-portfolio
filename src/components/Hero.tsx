import { profile, tools } from '@/data/site'
import { HeroBackdrop } from './Motif'
import { ArrowIcon } from './Icons'
import { LiveFlow } from './LiveFlow'

export function Hero() {
  return (
    <section className="panel relative overflow-hidden">
      <HeroBackdrop />
      <div className="relative">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_1fr] xl:items-center xl:gap-10">
          <div>
            <p className="eyebrow text-muted">{profile.headline}</p>
            <h1 className="mt-5 max-w-3xl font-serif text-[2.4rem] leading-[1.04] tracking-tight sm:text-5xl xl:text-[3.5rem]">
              I build systems that organize leads, automate follow-up, and{' '}
              <em className="text-signal-deep">simplify</em> business operations.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{profile.intro}</p>

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
