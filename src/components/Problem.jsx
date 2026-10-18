import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { problem } from '../content'
import MaskText from './motion/MaskText'

/**
 * Scene 2: the problem. A giant "18" drifts slowly behind the text,
 * because turning 18 is the moment this whole product is about.
 */
export default function Problem() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-12%', '14%'])

  const [first, ...rest] = problem.body

  return (
    <section
      ref={ref}
      id={problem.id}
      data-tone="light"
      className="relative overflow-hidden py-[20vh] md:py-[24vh]"
      aria-labelledby="problem-title"
    >
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="display pointer-events-none absolute top-[2%] right-[-4vw] select-none text-[clamp(18rem,48vw,46rem)] leading-none text-[color-mix(in_srgb,var(--tone-fg)_6%,transparent)]"
      >
        18
      </motion.div>

      <div className="frame relative">
        <MaskText
          id="problem-title"
          lines={problem.heading}
          className="display max-w-[17ch] text-[clamp(2.5rem,6.4vw,6rem)]"
        />

        <div className="mt-14 grid md:mt-20 md:grid-cols-12">
          <div className="space-y-6 text-lg md:col-span-5 md:col-start-7 md:text-xl md:leading-relaxed">
            <p className="text-muted">{first}</p>
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
