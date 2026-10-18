import { useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'motion/react'
import { howItWorks } from '../content'
import { useMediaQuery } from '../hooks/useMediaQuery'
import FlowDiagram from './FlowDiagram'
import MaskText from './motion/MaskText'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Scene 4: how it works.
 * Desktop: the scene pins in place while you scroll. The steps change on the left
 * and the flow draws itself on the right.
 * Phones and reduced motion: a simple list with the finished diagram.
 */
export default function HowItWorks() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const wide = useMediaQuery('(min-width: 900px)')
  const pinned = wide && !reduce

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const done = useMotionValue(1)
  const [active, setActive] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(v < 0.25 ? 0 : v < 0.5 ? 1 : v < 0.75 ? 2 : 3)
  })

  const { steps } = howItWorks

  return (
    <section
      ref={ref}
      id={howItWorks.id}
      data-tone="light"
      aria-labelledby="how-title"
      className={pinned ? 'relative h-[420vh]' : 'py-[18vh]'}
    >
      {pinned ? (
        <div className="sticky top-0 h-svh">
          <div className="frame grid h-full grid-cols-12 items-center gap-8">
            <div className="col-span-5">
              <MaskText
                id="how-title"
                lines={[howItWorks.heading]}
                className="display text-[clamp(2.5rem,4.4vw,4rem)]"
              />

              {/* Screen readers get the full list; the animated version is visual only */}
              <ol className="sr-only">
                {steps.map((s) => (
                  <li key={s.title}>
                    {s.title}. {s.body}
                  </li>
                ))}
              </ol>

              <div className="mt-14 flex gap-8" aria-hidden="true">
                <div className="relative w-px shrink-0 bg-line">
                  <motion.div
                    className="absolute inset-0 origin-top bg-accent"
                    style={{ scaleY: scrollYProgress }}
                  />
                </div>
                <div className="relative min-h-[17rem] flex-1">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.45, ease: EASE }}
                    >
                      <p className="text-[0.9375rem] text-muted">
                        Step {active + 1} of {steps.length}
                      </p>
                      <h3 className="display mt-3 max-w-[16ch] text-[clamp(2rem,3vw,2.75rem)] leading-[1.04]">
                        {steps[active].title}
                      </h3>
                      <p className="mt-5 max-w-[36ch] text-lg leading-relaxed text-muted">{steps[active].body}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="col-span-6 col-start-7 flex justify-center">
              <div className="w-full max-w-[520px]">
                <FlowDiagram progress={scrollYProgress} active={active} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="frame">
          <MaskText id="how-title" lines={[howItWorks.heading]} className="display text-[clamp(2.5rem,8vw,4rem)]" />
          <div className="mt-12 max-w-[360px]">
            <FlowDiagram progress={done} active={3} />
          </div>
          <ol className="mt-14 space-y-10">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-6">
                <p className="text-[0.9375rem] text-muted">Step {i + 1}</p>
                <h3 className="display mt-2 text-[2rem] leading-[1.08]">{s.title}</h3>
                <p className="mt-3 max-w-[40ch] text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
