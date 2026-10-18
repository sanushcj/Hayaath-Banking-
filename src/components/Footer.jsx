import { footer, site } from '../content'
import Logo from './Logo'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const year = YEAR
  const { email, linkedin, instagram } = site.contact

  const links = [
    email && { label: email, href: `mailto:${email}` },
    linkedin && { label: 'LinkedIn', href: linkedin },
    instagram && { label: 'Instagram', href: instagram },
  ].filter(Boolean)

  return (
    <footer data-tone="dark" className="border-t border-line py-14 text-[0.9375rem]">
      <div className="frame grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="flex items-center gap-2">
            <Logo className="size-5 text-accent" />
            <span className="display text-xl leading-none">{site.brandFull}</span>
          </p>
          <p className="mt-3 text-muted">
            by {site.group}. &copy; {year} {site.group}.
          </p>
        </div>

        {links.length > 0 && (
          <ul className="space-y-2 md:col-span-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        <p
          className={`max-w-[62ch] text-muted md:col-span-5 ${links.length > 0 ? '' : 'md:col-start-8'}`}
        >
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  )
}
