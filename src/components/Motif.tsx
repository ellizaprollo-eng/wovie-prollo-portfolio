import { cn } from '@/lib/utils'

/**
 * The "Calm Systems" motif: thin connecting lines and small nodes.
 * Pure SVG/CSS, no images, fixed coordinates so SSR output is stable.
 */

/** Faint node network behind the hero. */
export function HeroBackdrop() {
  const nodes: Array<[number, number, boolean?]> = [
    [80, 120],
    [260, 60],
    [420, 180],
    [640, 90, true],
    [860, 210],
    [1040, 70],
    [1180, 240],
    [160, 380],
    [520, 420],
    [980, 440],
  ]
  const edges: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 7], [7, 8], [8, 2], [8, 9], [9, 4],
  ]

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1240 520"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--color-ink)" strokeOpacity="0.09" strokeWidth="1" fill="none">
        {edges.map(([a, b]) => {
          const [x1, y1] = nodes[a]
          const [x2, y2] = nodes[b]
          const mx = (x1 + x2) / 2
          return (
            <path key={`${a}-${b}`} d={`M${x1} ${y1} C${mx} ${y1}, ${mx} ${y2}, ${x2} ${y2}`} />
          )
        })}
      </g>
      {nodes.map(([x, y, accent], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={accent ? 4 : 3}
          fill={accent ? 'var(--color-signal)' : 'var(--color-paper)'}
          stroke={accent ? 'none' : 'var(--color-ink)'}
          strokeOpacity="0.2"
        />
      ))}
    </svg>
  )
}

/** Thin line with three nodes, used between sections. */
export function FlowDivider({ dark = false }: { dark?: boolean }) {
  const line = dark ? 'bg-white/15' : 'bg-line'
  const node = dark ? 'border-white/30 bg-ink' : 'border-ink/25 bg-paper'
  return (
    <div aria-hidden="true" className="container-x">
      <div className="flex items-center">
        <span className={cn('h-2 w-2 rounded-full border', node)} />
        <span className={cn('h-px flex-1', line)} />
        <span className="h-2 w-2 rounded-full bg-signal" />
        <span className={cn('h-px flex-1', line)} />
        <span className={cn('h-2 w-2 rounded-full border', node)} />
      </div>
    </div>
  )
}

/**
 * Step-by-step flow diagram. Each lane is a row of connected steps; the
 * last step of each lane is highlighted. Stacks vertically on small screens.
 */
export function FlowDiagram({ lanes, dark = false }: { lanes: string[][]; dark?: boolean }) {
  return (
    <div className="space-y-4">
      {lanes.map((steps, li) => (
        <ol key={li} className="flex flex-col gap-0 sm:flex-row sm:items-center">
          {steps.map((step, i) => {
            const last = i === steps.length - 1
            return (
              <li key={step} className="flex flex-col sm:flex-1 sm:flex-row sm:items-center">
                <span
                  className={cn(
                    'flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[0.8rem] leading-tight whitespace-nowrap sm:whitespace-normal',
                    dark
                      ? 'border-white/15 bg-white/[0.04] text-mist'
                      : 'border-line bg-card text-ink',
                    last && (dark ? 'border-signal/60 text-white' : 'border-signal/60'),
                  )}
                >
                  <span
                    className={cn(
                      'h-1.5 w-1.5 shrink-0 rounded-full',
                      last ? 'bg-signal' : dark ? 'bg-white/40' : 'bg-ink/35',
                    )}
                  />
                  {step}
                </span>
                {!last && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'ml-[0.95rem] h-3 w-px sm:ml-0 sm:h-px sm:w-auto sm:min-w-3 sm:flex-1',
                      dark ? 'bg-white/20' : 'bg-ink/20',
                    )}
                  />
                )}
              </li>
            )
          })}
        </ol>
      ))}
    </div>
  )
}
