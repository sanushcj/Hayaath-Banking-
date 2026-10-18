import { whoDoesWhat } from '../content'
import MaskText from './motion/MaskText'

/**
 * Scene 5: who does what. Kept still on purpose: trust shouldn't wobble.
 */
export default function WhoDoesWhat() {
  return (
    <section
      id={whoDoesWhat.id}
      data-tone="dark"
      aria-labelledby="trust-title"
      className="py-[20vh] md:py-[24vh]"
    >
      <div className="frame">
        <MaskText
          id="trust-title"
          lines={whoDoesWhat.heading}
          className="display max-w-[20ch] text-[clamp(2.5rem,6vw,5.75rem)]"
        />

        <ul className="mt-16 grid gap-12 md:mt-24 md:grid-cols-3 md:gap-10">
          {whoDoesWhat.roles.map((role, i) => (
            <li
              key={role.name}
              // Hayaath's own column is marked in the accent colour: "this part is us"
              className={`border-t pt-7 ${i === 0 ? 'border-accent' : 'border-line'}`}
            >
              <h3 className="display text-[clamp(1.6rem,2.2vw,2rem)] leading-tight">{role.name}</h3>
              <p className="mt-4 max-w-[34ch] text-muted md:text-lg md:leading-relaxed">{role.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-[0.9375rem] text-muted">{whoDoesWhat.note}</p>
      </div>
    </section>
  )
}
