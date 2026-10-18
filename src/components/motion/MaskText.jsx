import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1]

/**
 * A heading whose lines rise up from behind a mask, one after another,
 * like titles in a film.
 *
 * lines   array of strings, one per line
 * as      the heading tag to render ('h1', 'h2', ...)
 * onLoad  true = play when the page loads, false = play when scrolled into view
 */
export default function MaskText({
  lines,
  as = 'h2',
  id,
  className = '',
  delay = 0,
  stagger = 0.09,
  duration = 1.15,
  onLoad = false,
}) {
  const Tag = as
  const ref = useRef(null)
  // Watch the heading itself (the moving lines are hidden by their masks until they play)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const show = onLoad || inView

  return (
    <Tag ref={ref} id={id} className={className}>
      {lines.map((line, i) => (
        <span className="mask-line" key={line}>
          <motion.span
            initial={{ y: '110%' }}
            animate={{ y: show ? '0%' : '110%' }}
            transition={{ duration, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
          {/* keeps a space between lines for screen readers and copy-paste */}
          {i < lines.length - 1 ? ' ' : null}
        </span>
      ))}
    </Tag>
  )
}
