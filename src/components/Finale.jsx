import { finale } from '../content'
import MaskText from './motion/MaskText'
import WaitlistButton from './WaitlistButton'

/**
 * Final scene: where it all leads, and the waitlist.
 * The light from the opening returns, low on the horizon.
 */
export default function Finale() {
  return (
    <section
      id={finale.id}
      data-tone="dark"
      aria-labelledby="finale-title"
      className="relative flex min-h-svh items-center overflow-hidden py-[18vh]"
    >
      <div aria-hidden="true" className="finale-light" />

      <div className="frame relative text-center">
        <p className="display text-xl text-muted italic md:text-2xl">{finale.lead}</p>
        <MaskText
          id="finale-title"
          lines={finale.heading}
          className="display mt-5 text-[clamp(3.5rem,12vw,11.5rem)]"
        />
        <p className="mx-auto mt-8 max-w-[30ch] text-lg md:text-2xl md:leading-snug">{finale.sub}</p>

        <div className="mt-[12vh] flex flex-col items-center gap-5">
          <p className="text-muted">{finale.waitlistText}</p>
          <WaitlistButton label={finale.cta} pendingLabel={finale.ctaPending} mode="pending" />
        </div>
      </div>
    </section>
  )
}
