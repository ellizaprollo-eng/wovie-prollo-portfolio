import { useRef, useState } from 'react'
import { testimonials, videoTestimonial } from '@/data/site'
import { SectionHeading } from './SectionHeading'

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
}

/**
 * Self-hosted video with a poster overlay (play button + name). Native
 * controls appear once playback starts; the overlay returns when it ends.
 */
function VideoTestimonial() {
  const { src, poster, name, title } = videoTestimonial
  const ref = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  if (!src) return null

  function play() {
    setStarted(true)
    ref.current?.play().catch(() => {})
  }

  return (
    <figure className="mx-auto w-full max-w-[20rem] xl:mx-0 xl:max-w-none">
      <div className="relative overflow-hidden rounded-2xl bg-navy shadow-[0_20px_40px_-24px_rgb(20_26_38/0.45)]">
        <video
          ref={ref}
          src={src}
          poster={poster}
          controls={started}
          playsInline
          preload="metadata"
          onEnded={() => setStarted(false)}
          aria-label={`Video testimonial from ${name}`}
          className="block aspect-[9/16] w-full object-cover"
        />

        {!started && (
          <button
            type="button"
            onClick={play}
            aria-label={`Play video testimonial from ${name}`}
            className="group absolute inset-0 flex flex-col justify-end text-left"
          >
            <span className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
            <span className="absolute top-1/2 left-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-signal text-[#141a26] shadow-lg transition-transform duration-200 group-hover:scale-105">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
            <span className="relative p-5">
              <span className="eyebrow block text-[0.65rem] text-white/70">Video testimonial</span>
              <span className="mt-1 block font-heading text-lg text-white">{name}</span>
              {title && <span className="block text-sm text-white/75">{title}</span>}
            </span>
          </button>
        )}
      </div>
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
