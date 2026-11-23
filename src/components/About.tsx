import { useState } from 'react'
import { about, profile } from '../content/site-content'
import Reveal from './ui/Reveal'
import SectionLabel from './ui/SectionLabel'

export default function About() {
  const [failed, setFailed] = useState(false)
  return <section id="about" aria-labelledby="about-heading" className="section-pad">
    <div className="site-container">
      <SectionLabel label={about.label} />
      <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal className="flex justify-center md:justify-start">
          <div className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 text-secondary" style={{ borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)' }}>
            {failed ? <span className="display text-5xl">{profile.avatarInitials}</span> : <img src={profile.avatar} width="160" height="160" alt={profile.name} onError={() => setFailed(true)} className="h-full w-full object-cover" />}
          </div>
        </Reveal>
        <Reveal>
          <h2 id="about-heading" className="display h2 mb-7">{about.heading}</h2>
          <div className="max-w-[68ch] space-y-5 text-secondary">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <ul className="mt-8 grid gap-2">{about.quickFacts.map((fact) => <li key={fact} className="rounded-lg border border-border bg-elevated px-[14px] py-[10px] text-sm text-primary">{fact}</li>)}</ul>
        </Reveal>
      </div>
    </div>
  </section>
}
