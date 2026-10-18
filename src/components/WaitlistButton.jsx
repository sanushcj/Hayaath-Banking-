import { site } from '../content'
import { useSmoothScroll } from '../hooks/useLenis'

/**
 * The waitlist button.
 * - If site.waitlistUrl is filled in, it opens your form in a new tab.
 * - If not, mode="scroll" scrolls to the waitlist scene,
 *   and mode="pending" shows a quiet "Waitlist opens soon" label.
 */
export default function WaitlistButton({ label, pendingLabel, mode = 'scroll', small = false }) {
  const { scrollTo } = useSmoothScroll()
  const cls = small ? 'btn btn-sm' : 'btn'

  if (site.waitlistUrl) {
    return (
      <a className={cls} href={site.waitlistUrl} target="_blank" rel="noopener noreferrer">
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  if (mode === 'scroll') {
    return (
      <a
        className={cls}
        href="#waitlist"
        onClick={(e) => {
          e.preventDefault()
          scrollTo('#waitlist')
        }}
      >
        {label}
      </a>
    )
  }

  return <span className={`${cls} btn-pending`}>{pendingLabel}</span>
}
