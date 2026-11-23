import { useState } from 'react'
import { projects, ui } from '../content/site-content'
import Chip from './ui/Chip'
import Reveal from './ui/Reveal'
import SectionLabel from './ui/SectionLabel'
import PakhlaiSlider from './PakhlaiSlider'
import PakhlaiCaseStudy from './PakhlaiCaseStudy'
import pakhlaiLogo from '../assets/rmsFavicon.png'

type Project = typeof projects.items[number]

function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false)
  return <div className="project-placeholder relative aspect-video w-full overflow-hidden lg:aspect-auto" role={failed ? 'img' : undefined} aria-label={failed ? `${project.title} ${ui.projectImageAlt}` : undefined}>
    {failed ? <span aria-hidden="true" className="display absolute inset-0 flex items-center justify-center text-5xl text-secondary">{project.title.charAt(0)}</span>
      : <img src={`/projects/${project.slug}.png`} alt={`${project.title} ${ui.projectImageAlt}`} width="800" height="450" loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />}
  </div>
}

function ProjectCard({ project }: { project: Project }) {
  const featured = 'featured' in project && project.featured
  const primary = project.links.find((link) => 'primary' in link && link.primary) ?? project.links[0]
  const secondary = primary ? project.links.filter((link) => link !== primary) : []
  const isPlaceholder = (href: string) => href === '#'
  return <article className={`card relative flex min-w-0 flex-col overflow-hidden ${featured ? 'lg:col-span-2 lg:grid lg:grid-cols-[45%_55%]' : 'card-hover'}`}>
    {project.slug === 'pakhlai' ? <PakhlaiSlider /> : <ProjectImage project={project} />}
    {primary && !featured && <a href={primary.href} target={primary.external && !isPlaceholder(primary.href) ? '_blank' : undefined} rel={primary.external && !isPlaceholder(primary.href) ? 'noopener noreferrer' : undefined} aria-label={primary.external && !isPlaceholder(primary.href) ? `${project.title} ${primary.label} (${ui.opensNewTab})` : `${project.title} ${primary.label}`} aria-disabled={isPlaceholder(primary.href) ? true : undefined} onClick={isPlaceholder(primary.href) ? (event) => event.preventDefault() : undefined} className="absolute inset-0 rounded-xl" />}
    <div className="flex min-w-0 flex-1 flex-col p-6">
      {featured && <span className="mb-4 w-fit rounded-full border border-accent px-3 py-1 font-mono text-xs tracking-[0.08em] text-accent">{ui.featured}</span>}
      <div className="flex items-center gap-3">
        {project.slug === 'pakhlai' && <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-1.5 shadow-sm"><img src={pakhlaiLogo} alt="" width="40" height="40" className="h-full w-full object-contain" /></span>}
        <h3 className="display h3">{project.title}</h3>
      </div>
      <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
      <p className="line-clamp-3 mt-5 max-w-[68ch] text-sm leading-[1.65] text-secondary">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}</div>
      {(primary || project.slug === 'pakhlai') && <div className="project-actions">
        {project.slug === 'pakhlai' && <PakhlaiCaseStudy />}
        {primary && <div className="project-actions__links">
          {featured ? <a href={primary.href} target={primary.external && !isPlaceholder(primary.href) ? '_blank' : undefined} rel={primary.external && !isPlaceholder(primary.href) ? 'noopener noreferrer' : undefined} aria-label={primary.external && !isPlaceholder(primary.href) ? `${project.title} ${primary.label} (${ui.opensNewTab})` : `${project.title} ${primary.label}`} className="relative z-10 hover:text-accent-strong">{primary.label}</a> : <span aria-hidden="true">{primary.label}</span>}
          {secondary.map((link) => <a key={link.label} href={link.href} target={link.external && !isPlaceholder(link.href) ? '_blank' : undefined} rel={link.external && !isPlaceholder(link.href) ? 'noopener noreferrer' : undefined} aria-label={link.external && !isPlaceholder(link.href) ? `${project.title} ${link.label} (${ui.opensNewTab})` : `${project.title} ${link.label}`} aria-disabled={isPlaceholder(link.href) ? true : undefined} onClick={isPlaceholder(link.href) ? (event) => event.preventDefault() : undefined} className="relative z-10 hover:text-accent-strong">{link.label}</a>)}
        </div>}
      </div>}
    </div>
  </article>
}

export default function Projects() {
  return <section id="projects" aria-labelledby="projects-heading" className="section-pad">
    <div className="site-container">
      <SectionLabel label={projects.label} />
      <h2 id="projects-heading" className="display h2">{projects.heading}</h2>
      <p className="mt-4 max-w-[68ch] text-secondary">{projects.intro}</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {projects.items.map((project, index) => <Reveal key={project.slug} delay={index * 0.08} className={'featured' in project && project.featured ? 'lg:col-span-2' : ''}><ProjectCard project={project} /></Reveal>)}
      </div>
    </div>
  </section>
}
