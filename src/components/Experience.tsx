import { experience } from '../content/site-content'
import Reveal from './ui/Reveal'
import SectionLabel from './ui/SectionLabel'

export default function Experience() {
  return <section id="experience" aria-labelledby="experience-heading" className="section-pad">
    <div className="site-container">
      <SectionLabel label={experience.label} />
      <h2 id="experience-heading" className="display h2 mb-12">{experience.heading}</h2>
      <div className="relative">
        <span aria-hidden="true" className="absolute bottom-0 left-[4px] top-[6px] w-[2px] bg-border" />
        <div className="space-y-12">
          {experience.entries.map((entry, index) => <Reveal key={entry.company} delay={index * 0.08}>
            <article className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 lg:grid-cols-[20px_minmax(0,1fr)_140px] lg:gap-x-7">
              <span aria-hidden="true" className="relative z-10 mt-2 h-[10px] w-[10px] rounded-full bg-accent ring-[5px] ring-bg" />
              <div className="min-w-0">
                <h3 className="display h3">{entry.role}</h3>
                <p className="mt-1 font-medium text-primary">{entry.company}</p>
                <p className="mt-1 font-mono text-xs text-secondary lg:hidden">{entry.dates}</p>
                <p className="mt-2 text-sm text-secondary">{entry.location}</p>
                <ul className="mt-5 max-w-[68ch] space-y-2 text-sm leading-[1.65] text-secondary">
                  {entry.bullets.map((bullet) => <li key={bullet} className="flex gap-3"><span aria-hidden="true" className="text-accent">—</span><span>{bullet}</span></li>)}
                </ul>
              </div>
              <p className="hidden pt-1 text-right font-mono text-xs text-secondary lg:block">{entry.dates}</p>
            </article>
          </Reveal>)}
        </div>
      </div>
    </div>
  </section>
}
