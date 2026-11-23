import { skills } from '../content/site-content'
import Chip from './ui/Chip'
import Reveal from './ui/Reveal'
import SectionLabel from './ui/SectionLabel'

export default function Skills() {
  return <section id="skills" aria-labelledby="skills-heading" className="section-pad">
    <div className="site-container">
      <SectionLabel label={skills.label} />
      <h2 id="skills-heading" className="display h2 mb-10">{skills.heading}</h2>
      <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
        {skills.groups.map((group, index) => <Reveal key={group.name} delay={index * 0.08} className={'spanTwoColumns' in group && group.spanTwoColumns ? 'lg:col-span-2' : ''}>
          <h3 className="mb-4 font-body text-[13px] font-medium uppercase tracking-[0.08em] text-secondary">{group.name}</h3>
          <div className="flex flex-wrap gap-2">{group.items.map((item) => <Chip key={item}>{item}</Chip>)}</div>
        </Reveal>)}
      </div>
    </div>
  </section>
}
