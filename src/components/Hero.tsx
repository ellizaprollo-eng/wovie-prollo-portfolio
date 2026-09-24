import { links, profile } from '@/data/site'
import { FlowDiagram, HeroBackdrop } from './Motif'
import { ArrowIcon, LinkedInIcon, MailIcon, PinIcon } from './Icons'

/** Illustrative only: how a lead moves through a typical system I build. */
const heroFlow = [['New lead', 'CRM pipeline', 'Follow‑up', 'Booked call']]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <HeroBackdrop />
      <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-muted">{profile.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{profile.headline}</p>
          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            I build systems that organize leads, automate follow-up, and{' '}
            <em className="text-signal-deep">simplify</em> business operations.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#book" className="btn btn-primary">
              <span className="btn-node" />
              Book a Call
            </a>
            <a href="#work" className="btn btn-ghost">
              See selected work
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-ink"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center gap-2 text-muted hover:text-ink"
            >
              <MailIcon className="h-4 w-4" />
              {links.email}
            </a>
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  )
}

/** Profile-style card: cover band, photo, name, and the hero visual. */
function ProfileCard() {
  return (
    <aside className="overflow-hidden rounded-xl border border-line bg-card shadow-[0_1px_0_rgb(20_26_38/0.04),0_20px_40px_-24px_rgb(20_26_38/0.25)]">
      <div className="relative h-24 bg-ink">
        <svg aria-hidden="true" viewBox="0 0 400 96" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d="M0 70 C80 70 90 30 170 30 S260 62 330 40 S390 20 400 22" fill="none" stroke="white" strokeOpacity="0.18" />
          <circle cx="170" cy="30" r="3" fill="white" fillOpacity="0.35" />
          <circle cx="330" cy="40" r="3.5" fill="var(--color-signal)" />
        </svg>
      </div>
      <div className="px-6 pb-6">
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width={88}
          height={88}
          className="relative -mt-11 h-[88px] w-[88px] rounded-full border-4 border-card bg-paper-2 object-cover"
        />
        <h2 className="mt-3 text-lg font-semibold tracking-tight">{profile.name}</h2>
        <p className="mt-1 text-sm leading-snug text-muted">{profile.headline}</p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
          <PinIcon className="h-3.5 w-3.5" />
          {profile.location} · {profile.availability}
        </p>

        <div className="mt-5 border-t border-line pt-5">
          {profile.heroVisual ? (
            <img src={profile.heroVisual} alt="" className="w-full rounded-lg border border-line" />
          ) : (
            <>
              <p className="eyebrow mb-3 text-[0.68rem] text-muted">How a lead moves</p>
              <FlowDiagram lanes={heroFlow} />
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
