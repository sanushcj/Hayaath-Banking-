import { useEffect } from 'react'

const THEME_COLORS = { dark: '#0B1F1D', light: '#E4EEEA' }

/**
 * Watches every <section data-tone="dark|light"> and sets the page lighting
 * to match whichever scene is crossing the middle of the screen.
 * The colour fade itself is done in CSS (see index.css).
 */
export function useSceneTone() {
  useEffect(() => {
    const root = document.documentElement
    const meta = document.querySelector('meta[name="theme-color"]')
    const scenes = document.querySelectorAll('[data-tone]:not(html)')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const tone = entry.target.dataset.tone
          if (root.dataset.tone !== tone) {
            root.dataset.tone = tone
            if (meta) meta.setAttribute('content', THEME_COLORS[tone])
          }
        })
      },
      // A thin line across the middle of the screen
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    )

    scenes.forEach((scene) => observer.observe(scene))
    return () => observer.disconnect()
  }, [])
}
