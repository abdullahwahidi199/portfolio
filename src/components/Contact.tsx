import { contact, ui } from '../content/site-content'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionLabel from './ui/SectionLabel'
import SocialIcon from './ui/SocialIcon'

export default function Contact() {
  return <section id="contact" aria-labelledby="contact-heading" className="section-pad">
    <div className="site-container">
      <Reveal>
        <div className="card contact-glow relative overflow-hidden rounded-2xl p-8 md:p-16">
          <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
            <div>
              <SectionLabel label={contact.label} />
              <h2 id="contact-heading" className="display h2">{contact.heading}</h2>
              <p className="mt-5 max-w-[60ch] text-secondary">{contact.body}</p>
              <Button variant="primary" href={contact.primaryCta.href} className="mt-8">{contact.primaryCta.label}</Button>
            </div>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3 md:justify-end">
              {contact.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (${ui.opensNewTab})`} className="inline-flex min-h-11 items-center gap-2 text-sm text-secondary transition-colors duration-150 hover:text-accent"><SocialIcon name={link.label} />{link.label}</a>)}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
}
