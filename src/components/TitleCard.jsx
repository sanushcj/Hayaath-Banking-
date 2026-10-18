import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { titleCard } from '../content'

/**
 * Scene 3: a title card. The core idea in one sentence.
 * The screen holds still and the words light up as you scroll, at reading pace.
 */
export default function TitleCard() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const words = titleCard.text.split(' ')

  const text = 'display max-w-[21ch] text-[clamp(2.1rem,5vw,4.6rem)] leading-[1.08]'

  return (
    <section
      ref={ref}
      data-tone="dark"
      aria-label="The idea"
      className={reduce ? 'py-[24vh]' : 'relative h-[260vh]'}
    >
      <div className={reduce ? '' : 'sticky top-0 flex h-svh items-center'}>
        <div className="frame">
          {reduce ? (
            <p className={text}>{titleCard.text}</p>
          ) : (
            <p className={text}>
              {words.map((word, i) => (
                <Word key={`${word}-${i}`} progress={scrollYProgress} index={i} total={words.length}>
                  {word}
                </Word>
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

function Word({ children, progress, index, total }) {
  // Words light up between 12% and 82% of the scene's scroll
  const span = 0.7
  const start = 0.12 + (index / total) * span
  const end = start + (span / total) * 2
  const opacity = useTransform(progress, [start, end], [0.16, 1])

  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </>
  )
}
