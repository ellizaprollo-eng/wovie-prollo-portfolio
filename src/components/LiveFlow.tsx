/**
 * Illustrative "lead to booked" workflow, ported from the Calm Systems
 * artifact. An example of the kind of system I build, not a live feed.
 * Animations stop under prefers-reduced-motion (see .flow-* in styles.css).
 */
const route =
  'M110 62 C 180 62, 180 132, 250 132 L 330 132 L 330 222 L 250 222 C 180 222, 180 290, 110 290'

const edges = [
  { d: 'M110 62 C 180 62, 180 132, 250 132', live: true },
  { d: 'M330 158 L 330 196', live: true },
  { d: 'M250 222 C 180 222, 180 290, 110 290', live: true },
  { d: 'M330 248 L 330 290 L 300 290', live: false },
]

const nodes = [
  { x: 10, y: 36, w: 160, h: 52, title: 'New lead', sub: 'form · ad · missed call', on: true },
  { x: 250, y: 106, w: 170, h: 52, title: 'AI agent qualifies', sub: 'chat or voice' },
  { x: 250, y: 196, w: 170, h: 52, title: 'SMS + email reply', sub: 'instant' },
  { x: 10, y: 264, w: 160, h: 52, title: 'Call booked', sub: 'calendar + CRM ✓', on: true },
]

export function LiveFlow() {
  return (
    <figure
      aria-label="Example workflow: a new lead is qualified by an AI agent, gets an instant reply, and is booked on the calendar"
      className="m-0 rounded-[1.1rem] border border-white/10 bg-ink p-4 sm:p-5"
    >
      <figcaption className="flex justify-between font-mono text-[0.7rem] tracking-[0.08em] text-mist-dim uppercase">
        <span>Workflow · Lead → Booked</span>
        <b className="font-medium text-signal">● Live</b>
      </figcaption>
      <svg viewBox="0 0 440 330" aria-hidden="true" className="mt-2 block h-auto w-full">
        {edges.map((e) => (
          <g key={e.d}>
            <path d={e.d} fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="1.5" />
            {e.live && <path d={e.d} className="flow-live" />}
          </g>
        ))}

        <circle r="4" fill="var(--color-signal)" className="flow-moving">
          <animateMotion dur="4.8s" repeatCount="indefinite" path={route} />
        </circle>

        {nodes.map((n) => (
          <g key={n.title}>
            <rect
              x={n.x}
              y={n.y}
              width={n.w}
              height={n.h}
              rx="12"
              fill="var(--color-ink-2)"
              stroke={n.on ? 'var(--color-signal)' : 'rgb(255 255 255 / 0.14)'}
            />
            <text x={n.x + 16} y={n.y + 22} fill="#fff" fontSize="13" fontWeight="500" fontFamily="var(--font-sans)">
              {n.title}
            </text>
            <text x={n.x + 16} y={n.y + 39} fill="var(--color-mist-dim)" fontSize="10" fontFamily="ui-monospace, monospace">
              {n.sub}
            </text>
          </g>
        ))}

        <g>
          <rect x="220" y="272" width="80" height="36" rx="10" fill="var(--color-ink-2)" stroke="rgb(255 255 255 / 0.14)" />
          <text x="232" y="294" fill="var(--color-mist-dim)" fontSize="10" fontFamily="ui-monospace, monospace">
            no reply → d2
          </text>
        </g>

        <circle cx="18" cy="290" r="5" fill="var(--color-signal)" className="flow-pulse" />
        <circle cx="18" cy="290" r="3.5" fill="var(--color-signal)" />
      </svg>
    </figure>
  )
}
