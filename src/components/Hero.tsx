import { ChevronDown } from 'lucide-react'
import { hero, profile, ui } from '../content/site-content'
import Button from './ui/Button'
import CvDownloadButton from './ui/CvDownloadButton'
import Reveal from './ui/Reveal'

export default function Hero() {
  return <section id="hero" aria-labelledby="hero-heading" className="relative isolate flex min-h-[calc(100vh-64px)] items-center overflow-hidden">
    <div aria-hidden="true" className="hero-glow pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] md:right-0 md:top-1/2 md:h-[700px] md:w-[700px] md:-translate-y-1/2" />
    <div className="site-container relative z-10 grid items-center gap-14 py-16 md:py-24 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,.75fr)] lg:gap-10">
      <Reveal>
        <p className="mb-7 font-body text-[13px] font-medium uppercase tracking-[0.12em] text-accent">{hero.eyebrow}</p>
        <h1 id="hero-heading" className="display h1 max-w-[780px] text-primary">{hero.h1}</h1>
        <p className="mt-7 max-w-[60ch] text-secondary">{hero.subtext}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button variant="primary" href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button variant="secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Button>
          <CvDownloadButton label={hero.tertiaryCta.label} className="inline-flex min-h-11 items-center justify-center rounded-full border border-transparent px-3 py-2.5 text-sm font-medium text-accent transition-colors duration-150 hover:text-accent-strong" />
        </div>
      </Reveal>
      <Reveal className="relative mx-auto w-full max-w-[280px] sm:max-w-[340px] lg:justify-self-end">
        <div aria-hidden="true" className="absolute -inset-4 rotate-3 rounded-[2.5rem] border border-accent/20 bg-accent/5" />
        <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-elevated shadow-2xl">
          <img src={profile.avatar} alt={`Portrait of ${profile.name}`} width="450" height="450" fetchPriority="high" className="h-full w-full object-cover" />
        </div>
      </Reveal>
    </div>
    <a href="#projects" aria-label={ui.scrollToProjects} className="chevron-bob absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-secondary md:block"><ChevronDown aria-hidden="true" size={24} /></a>
  </section>
}
