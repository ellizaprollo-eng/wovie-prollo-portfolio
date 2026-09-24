import { credentials, proofPoints } from '@/data/site'

export function ProofPoints() {
  return (
    <section aria-label="Proof points" className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
      {proofPoints.map((p, i) => (
        <div
          key={p.label}
          // With an odd count on the 2-column phone grid, the first card spans the full row.
          className={`rounded-[1.25rem] border border-line bg-card p-5 md:p-6 ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
        >
          <p className="font-heading text-4xl leading-none tracking-tight md:text-5xl">{p.value}</p>
          <p className="mt-3 text-sm leading-snug text-muted">{p.label}</p>
        </div>
      ))}
      <p className="col-span-2 flex flex-wrap items-center gap-x-3 gap-y-1 px-1 text-sm text-muted md:col-span-5">
        <span className="eyebrow text-[0.7rem] text-ink">Credentials</span>
        {credentials.map((c) => (
          <span key={c} className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-signal" />
            {c}
          </span>
        ))}
        <a
          href="#certifications"
          className="font-medium text-ink underline decoration-signal decoration-2 underline-offset-4"
        >
          View certificates
        </a>
      </p>
    </section>
  )
}
