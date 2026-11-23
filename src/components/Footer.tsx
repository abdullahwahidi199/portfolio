import { contact, footer, ui } from '../content/site-content'
import SocialIcon from './ui/SocialIcon'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const links = [...contact.links, { label: ui.email, href: contact.primaryCta.href, external: false }]
  return <footer className="border-t border-border py-10">
    <div className="site-container flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
      <p className="text-sm text-secondary">{footer.copyrightTemplate.replace('{year}', String(currentYear))}</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {links.map((link) => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} aria-label={link.external ? `${link.label} (${ui.opensNewTab})` : link.label} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-secondary transition-colors duration-150 hover:text-accent"><SocialIcon name={link.label} /></a>)}
        <a href="#hero" className="ml-2 inline-flex min-h-11 items-center text-sm text-secondary transition-colors duration-150 hover:text-accent">{footer.backToTop}</a>
      </div>
    </div>
  </footer>
}
