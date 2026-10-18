import { createContext, useCallback, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'motion/react'

const ScrollContext = createContext({ scrollTo: () => {} })

/**
 * Smooth scrolling for the whole page (Lenis).
 * Turned off when the visitor asks their device for reduced motion.
 */
export function SmoothScroll({ children }) {
  const reduce = useReducedMotion()
  const lenisRef = useRef(null)

  useEffect(() => {
    if (reduce) return undefined
    const lenis = new Lenis({ lerp: 0.1, autoRaf: true })
    lenisRef.current = lenis
    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduce])

  // Scroll to a section, e.g. scrollTo('#waitlist')
  const scrollTo = useCallback(
    (target) => {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (!el) return
      if (lenisRef.current) {
        lenisRef.current.scrollTo(el, { duration: 1.6 })
      } else {
        el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
      }
      // Move keyboard focus to the section so tabbing continues from there
      if (el.tabIndex < 0) el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
    },
    [reduce],
  )

  return <ScrollContext.Provider value={{ scrollTo }}>{children}</ScrollContext.Provider>
}

export function useSmoothScroll() {
  return useContext(ScrollContext)
}
