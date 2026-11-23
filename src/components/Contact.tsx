import { contact } from '../content/site-content'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import SectionLabel from './ui/SectionLabel'

export default function Contact() {
  return <section id="contact" aria-labelledby="contact-heading" className="section-pad">
    <div className="site-container">
      <Reveal>
        <div className="card contact-glow relative overflow-hidden rounded-2xl p-8 md:p-16">
          <div className="relative">
            <SectionLabel label={contact.label} />
            <h2 id="contact-heading" className="display h2">{contact.heading}</h2>
            <p className="mt-5 max-w-[60ch] text-secondary">{contact.body}</p>
            <Button variant="primary" href={contact.primaryCta.href} className="mt-8">{contact.primaryCta.label}</Button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
}
