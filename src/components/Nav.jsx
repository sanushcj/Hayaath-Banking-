import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { nav, site } from '../content'
import { useSmoothScroll } from '../hooks/useLenis'
import Logo from './Logo'
import WaitlistButton from './WaitlistButton'

const EASE = [0.16, 1, 0.3, 1]

export default function Nav() {
  const { scrollY } = useScroll()
  const { scrollTo } = useSmoothScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Hide when scrolling down, show again when scrolling up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 160)
    setScrolled(y > 40)
  })

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ opacity: 0, y: '0%' }}
      animate={{ opacity: 1, y: hidden ? '-110%' : '0%' }}
      transition={{ y: { duration: 0.5, ease: EASE }, opacity: { duration: 0.9, delay: 1.5 } }}
    >
      <div
        className={`transition-[background-color,backdrop-filter] duration-500 ${
          scrolled ? 'bg-[color-mix(in_srgb,var(--tone-bg)_78%,transparent)] backdrop-blur-md' : ''
        }`}
      >
        <nav className="frame flex h-16 items-center justify-between md:h-20" aria-label="Main">
          <a
            href="#main"
            className="flex items-center gap-2 text-fg"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#main')
            }}
          >
            <Logo className="size-6 text-accent" />
            <span className="display text-[1.55rem] leading-none tracking-[-0.02em]">{site.brand}</span>
            <span className="sr-only">Banking, back to top</span>
          </a>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-muted transition-colors duration-300 hover:text-fg"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <WaitlistButton label={nav.cta} mode="scroll" small />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
