import { credentials, proofPoints } from '@/data/site'

export function ProofPoints() {
  return (
    <section aria-label="Proof points" className="border-b border-line">
      <div className="container-x py-12 md:py-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {proofPoints.map((p) => (
            <div key={p.label} className="border-l border-line pl-4">
              <dt className="sr-only">{p.label}</dt>
              <dd className="font-serif text-4xl leading-none tracking-tight md:text-5xl">{p.value}</dd>
              <dd className="mt-2 max-w-[16rem] text-sm leading-snug text-muted">{p.label}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span className="eyebrow text-[0.7rem] text-ink">Credentials</span>
          {credentials.map((c) => (
            <span key={c} className="inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-signal" />
              {c}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
