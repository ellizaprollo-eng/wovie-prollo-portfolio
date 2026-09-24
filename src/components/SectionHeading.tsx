import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string
  title: string
  intro?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p className={cn('eyebrow flex items-center gap-2', dark ? 'text-mist-dim' : 'text-muted')}>
        <span className="h-1.5 w-1.5 rounded-full bg-signal" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-3 font-heading text-[2rem] leading-[1.08] tracking-tight md:text-[2.6rem]',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn('mt-3 text-[1.05rem] leading-relaxed', dark ? 'text-mist' : 'text-muted')}>{intro}</p>
      )}
    </div>
  )
}
