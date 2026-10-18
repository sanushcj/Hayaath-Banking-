import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { hero } from '../content'
import MaskText from './motion/MaskText'
import WaitlistButton from './WaitlistButton'

const EASE = [0.16, 1, 0.3, 1]
const SHUTTER = [0.76, 0, 0.24, 1]

/**
 * Opening scene.
 * On load the frame opens from a thin widescreen slit (like a film starting),
 * the light settles as the "camera" pulls back, and the title rises line by line.
 */
export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // As you scroll away, the light dims and the title drifts up a little
  const panelOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const lightY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-14%'])

  return (
    <section ref={ref} data-tone="dark" className="relative min-h-svh overflow-hidden" aria-labelledby="hero-title">
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ opacity: panelOpacity }}>
        <motion.div
          className="hero-panel absolute inset-0 overflow-hidden"
          initial={{ clipPath: 'inset(42% 0% 42% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.7, ease: SHUTTER, delay: 0.15 }}
        >
          <motion.div
            className="hero-light"
            style={{ y: lightY }}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: EASE }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="frame relative flex min-h-svh flex-col justify-end pt-32 pb-[12vh] md:pb-[10vh]"
      >
        <MaskText
          as="h1"
          id="hero-title"
          lines={hero.lines}
          onLoad
          delay={0.6}
          stagger={0.12}
          className="display text-[clamp(3rem,10.4vw,10rem)]"
        />

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <motion.p
            className="max-w-[40ch] text-lg text-muted md:col-span-5 md:text-xl md:leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.3 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 md:col-span-7 md:justify-self-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.45 }}
          >
            <WaitlistButton label={hero.cta} mode="scroll" />
            <span className="text-[0.9375rem] text-muted">{hero.note}</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
