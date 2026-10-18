import { families } from '../content'
import MaskText from './motion/MaskText'

/**
 * Scene 6: the planned family account. Clearly marked as not live yet.
 */
export default function Families() {
  return (
    <section
      id={families.id}
      data-tone="light"
      aria-labelledby="families-title"
      className="py-[20vh] md:py-[24vh]"
    >
      <div className="frame grid gap-12 md:grid-cols-12 md:items-end md:gap-8">
        <MaskText
          id="families-title"
          lines={families.heading}
          className="display text-[clamp(2.5rem,6.4vw,6rem)] md:col-span-7"
        />
        <div className="md:col-span-5">
          <p className="text-lg md:text-xl md:leading-relaxed">{families.body}</p>
          <p className="mt-8 flex items-center gap-3 text-[0.9375rem] text-muted">
            {/* hollow dot = planned, not live */}
            <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full border-[1.5px] border-current" />
            {families.status}
          </p>
        </div>
      </div>
    </section>
  )
}
