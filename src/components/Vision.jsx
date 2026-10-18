import { vision } from '../content'
import MaskText from './motion/MaskText'

/**
 * Scene 7: the future vision, laid out like a film's end credits.
 * Group names sit on the left, features on the right, meeting at the centre.
 * A still vignette makes lines fade in at the bottom of the screen and out at the top.
 */
export default function Vision() {
  return (
    <section id={vision.id} data-tone="dark" aria-labelledby="vision-title" className="relative">
      {/* The vignette stays still while the content below it is pulled up to sit underneath */}
      <div aria-hidden="true" className="credits-vignette pointer-events-none sticky top-0 z-10 h-svh" />

      <div className="frame -mt-[100svh] pt-[26vh] pb-[26vh]">
        <MaskText
          id="vision-title"
          lines={vision.heading}
          className="display mx-auto max-w-[24ch] text-center text-[clamp(2.5rem,6vw,5.75rem)]"
        />
        <p className="mx-auto mt-8 max-w-[44ch] text-center text-lg text-muted md:text-xl">{vision.intro}</p>

        <div className="mx-auto mt-[18vh] max-w-[1100px] space-y-[14vh]">
          {vision.groups.map((group) => (
            <div key={group.name} className="grid gap-6 md:grid-cols-2 md:gap-16">
              <h3 className="display text-center text-[1.75rem] leading-tight text-muted italic md:text-right md:text-[2rem]">
                {group.name}
              </h3>
              <ul className="space-y-9 text-center md:pt-1.5 md:text-left">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <p className="text-lg font-semibold tracking-[-0.005em] md:text-xl">{item.title}</p>
                    <p className="mx-auto mt-1.5 max-w-[40ch] text-muted md:mx-0">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
