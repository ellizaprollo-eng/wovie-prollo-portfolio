import { testimonials, videoTestimonial } from '@/data/site'
import { SectionHeading } from './SectionHeading'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

function VideoTestimonial() {
  const { driveId, name, title } = videoTestimonial
  if (!driveId) return null

  return (
    <figure className="mx-auto w-full max-w-[20rem] xl:mx-0 xl:max-w-none">
      <div className="overflow-hidden rounded-xl border border-line bg-navy">
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          title={name ? `Video testimonial from ${name}` : 'Client video testimonial'}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading="lazy"
          className="block aspect-[9/16] w-full"
        />
      </div>
      <figcaption className="mt-3 flex items-center gap-2 text-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        {name ? (
          <span>
            <span className="font-medium">{name}</span>
            {title && <span className="text-muted"> · {title}</span>}
          </span>
        ) : (
          <span className="text-muted">Client video testimonial</span>
        )}
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="panel">
      <SectionHeading eyebrow="Client testimonials" title="What clients say." />
      <div className="mt-8 grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)] xl:items-start">
        <VideoTestimonial />
        <ul className="grid gap-4">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col rounded-xl border border-line bg-paper p-5 md:p-6">
                <blockquote className="leading-relaxed text-ink/85">
                  <span aria-hidden="true" className="mr-1 font-heading text-signal">
                    “
                  </span>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-heading text-xs text-white">
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
      </div>
    </section>
  )
}
