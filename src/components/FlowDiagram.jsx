import { motion, useTransform } from 'motion/react'
import { howItWorks } from '../content'

// The flow, drawn as one line that splits at the PAN question and joins again.
const PATH_START = 'M150 70 V230'
const PATH_YES = 'M150 230 V510'
const PATH_NO = 'M150 230 C150 300 330 290 330 370 C330 450 150 440 150 510'

/**
 * progress  a motion value from 0 to 1 (how far through the scene you are)
 * active    which step is showing (0 to 3)
 */
export default function FlowDiagram({ progress, active }) {
  const drawStart = useTransform(progress, [0.02, 0.22], [0, 1])
  const drawYes = useTransform(progress, [0.27, 0.5], [0, 1])
  const drawNo = useTransform(progress, [0.4, 0.72], [0, 1])
  const visStart = useTransform(drawStart, (v) => (v > 0.001 ? 1 : 0))
  const visYes = useTransform(drawYes, (v) => (v > 0.001 ? 1 : 0))
  const visNo = useTransform(drawNo, (v) => (v > 0.001 ? 1 : 0))

  const d = howItWorks.diagram
  const reached = (step) => active >= step

  return (
    <svg
      viewBox="0 0 420 580"
      className="h-auto w-full overflow-visible"
      role="img"
      aria-label="Flow: your details, then the PAN question. If yes, go straight to a full account. If not yet, apply for PAN in the same flow, then get a full account."
    >
      {/* Faint full route, so you can see where the flow goes */}
      <g fill="none" stroke="var(--tone-line)" strokeWidth="1.5">
        <path d={PATH_START} />
        <path d={PATH_YES} />
        <path d={PATH_NO} />
      </g>

      {/* The route drawing itself as you scroll */}
      <g fill="none" stroke="var(--tone-accent)" strokeWidth="2.25" strokeLinecap="round">
        <motion.path d={PATH_START} style={{ pathLength: drawStart, opacity: visStart }} />
        <motion.path d={PATH_YES} style={{ pathLength: drawYes, opacity: visYes }} />
        <motion.path d={PATH_NO} style={{ pathLength: drawNo, opacity: visNo }} />
      </g>

      {/* Nodes */}
      <Node cx={150} cy={70} on={reached(0)} />
      <rect
        x={141}
        y={221}
        width={18}
        height={18}
        transform="rotate(45 150 230)"
        className="transition-[fill,stroke] duration-500"
        fill={reached(1) ? 'var(--tone-accent)' : 'var(--tone-bg)'}
        stroke={reached(1) ? 'var(--tone-accent)' : 'var(--tone-fg)'}
        strokeOpacity={reached(1) ? 1 : 0.35}
        strokeWidth="1.5"
      />
      <Node cx={330} cy={370} on={reached(2)} />
      <Node cx={150} cy={510} r={10} on={reached(3)} />

      {/* Labels */}
      <g className="font-sans" fontSize="15">
        <Label x={172} y={75} on={active === 0}>{d.start}</Label>
        <Label x={126} y={235} anchor="end" on={active === 1}>{d.question}</Label>
        <Label x={136} y={378} anchor="end" on={active === 1} small>{d.yes}</Label>
        <Label x={252} y={276} on={active === 2} small>{d.no}</Label>
        <Label x={312} y={376} anchor="end" on={active === 2}>{d.apply}</Label>
        <Label x={174} y={515} on={active === 3}>{d.end}</Label>
      </g>
    </svg>
  )
}

function Node({ cx, cy, r = 7, on }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      className="transition-[fill,stroke] duration-500"
      fill={on ? 'var(--tone-accent)' : 'var(--tone-bg)'}
      stroke={on ? 'var(--tone-accent)' : 'var(--tone-fg)'}
      strokeOpacity={on ? 1 : 0.35}
      strokeWidth="1.5"
    />
  )
}

function Label({ x, y, anchor = 'start', on, small = false, children }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={small ? 13 : 15}
      fontWeight={on ? 600 : 450}
      fill={on ? 'var(--tone-fg)' : 'var(--tone-muted)'}
      className="transition-[fill] duration-500"
    >
      {children}
    </text>
  )
}
