import { useEffect, useState } from 'react'
import { booking } from '@/data/site'
import { SectionHeading } from './SectionHeading'
import { ArrowIcon } from './Icons'

/** Calendly inline-embed URL; embed_domain is only known in the browser. */
function embedUrl(domain: string) {
  const params = new URLSearchParams({
    embed_domain: domain,
    embed_type: 'Inline',
    hide_gdpr_banner: '1',
    background_color: 'fcfbf8',
    text_color: '141a26',
    primary_color: 'ff5a1f',
  })
  return `${booking.url}?${params.toString()}`
}

export function Booking() {
  const hasLink = booking.url.trim() !== ''
  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    if (hasLink) setSrc(embedUrl(window.location.hostname))
  }, [hasLink])

  return (
    <section id="book" className="panel">
      <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:gap-10">
        <div>
          <SectionHeading
            eyebrow="Book a call"
            title="Talk through your setup."
            intro={`A ${booking.length} call to look at how leads and follow-up run today, and where a system would help most.`}
          />
          <ul className="mt-8 space-y-3 text-muted">
            {['Walk me through your current tools', 'We find the biggest manual bottleneck', 'You leave with a clear next step'].map(
              (t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {t}
                </li>
              ),
            )}
          </ul>
          {hasLink && (
            <a
              href={booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-8"
            >
              Open calendar in a new tab
              <ArrowIcon className="h-4 w-4" />
            </a>
          )}
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-card">
          {hasLink ? (
            src && (
              <iframe
                title="Book a call with Wovie Prollo"
                src={src}
                loading="lazy"
                className="block h-[700px] w-full"
              />
            )
          ) : (
            <div className="grid h-[420px] place-items-center p-8 text-center text-muted">
              Add your booking link to <code>booking.url</code> in src/data/site.ts.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
