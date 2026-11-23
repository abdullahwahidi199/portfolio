import { useEffect, useRef, useState } from 'react'
import { nav, profile, ui } from '../content/site-content'
import { getTheme, setTheme } from '../lib/theme'
import { useScrollSpy } from '../lib/useScrollSpy'
import CvDownloadButton from './ui/CvDownloadButton'

const sectionIds = nav.links.map((link) => link.href.slice(1))

export default function Navbar() {
  const [theme, updateTheme] = useState(getTheme)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const active = useScrollSpy(sectionIds)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    const focusable = () => Array.from(menu?.querySelectorAll<HTMLElement>('a, button') ?? [])
    focusable()[0]?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (!menu?.contains(document.activeElement)) return
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); triggerRef.current?.focus() }
      if (event.key !== 'Tab') return
      const items = focusable()
      if (!items.length) return
      if (event.shiftKey && document.activeElement === items[0]) { event.preventDefault(); items[items.length - 1].focus() }
      else if (!event.shiftKey && document.activeElement === items[items.length - 1]) { event.preventDefault(); items[0].focus() }
    }
    const pointerdown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node) || menu?.contains(target) || triggerRef.current?.contains(target)) return
      if (target instanceof Element && target.closest('dialog[open]')) return
      setOpen(false)
    }
    const media = window.matchMedia('(min-width: 768px)')
    const resize = () => { if (media.matches) setOpen(false) }
    document.addEventListener('keydown', keydown)
    document.addEventListener('pointerdown', pointerdown, true)
    media.addEventListener('change', resize)
    return () => {
      document.removeEventListener('keydown', keydown)
      document.removeEventListener('pointerdown', pointerdown, true)
      media.removeEventListener('change', resize)
    }
  }, [open])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    updateTheme(next)
  }
  const closeMenu = () => { setOpen(false); triggerRef.current?.focus() }
  const linkClass = (id: string) => `relative inline-flex min-h-11 items-center text-sm font-medium transition-colors duration-150 hover:text-accent ${active === id ? 'text-accent after:absolute after:bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-accent' : 'text-secondary'}`

  return <header className={`sticky top-0 z-50 h-16 border-b ${scrolled ? 'border-border' : 'border-transparent'}`} style={{ background: 'color-mix(in srgb, var(--bg) 80%, transparent)', backdropFilter: 'blur(12px)' }}>
    <div className="site-container flex h-full items-center justify-between gap-4">
      <a href="#hero" className="display shrink-0 text-xl leading-none text-primary" onClick={() => open && closeMenu()}>{profile.name}<span className="text-accent">·</span></a>
      <nav aria-label={ui.navigation} className="hidden items-center gap-6 md:flex">
        {nav.links.map((link) => <a key={link.href} href={link.href} aria-current={active === link.href.slice(1) ? 'location' : undefined} className={linkClass(link.href.slice(1))}>{link.label}</a>)}
      </nav>
      <div className="flex items-center gap-2">
        <button type="button" onClick={toggleTheme} aria-label={ui.toggleTheme} aria-pressed={theme === 'dark'} className="flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition-colors duration-150 hover:text-accent">
          {theme === 'dark'
            ? <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
            : <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5"><path d="M20.2 15.3A8.8 8.8 0 0 1 8.7 3.8 8.8 8.8 0 1 0 20.2 15.3Z" /></svg>}
        </button>
        <CvDownloadButton label={nav.resumeCta.label} className="hidden min-h-10 items-center rounded-full border border-accent px-4 text-sm font-medium text-primary transition-colors duration-150 hover:border-accent-strong hover:text-accent md:inline-flex" />
        <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? ui.closeMenu : ui.openMenu} onClick={() => setOpen((value) => !value)} className="flex h-12 w-12 items-center justify-center rounded-lg text-primary md:hidden">
          {open ? <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path d="m5 5 14 14M19 5 5 19" /></svg> : <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6"><path d="M4 7h16M4 12h16M4 17h16" /></svg>}
        </button>
      </div>
    </div>
    {open && <div id="mobile-menu" ref={menuRef} className="absolute left-0 right-0 top-16 border-b border-border bg-bg px-6 py-3 shadow-xl md:hidden">
      <nav aria-label={ui.navigation} className="flex flex-col">
        {nav.links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu} aria-current={active === link.href.slice(1) ? 'location' : undefined} className={`flex min-h-12 items-center border-b border-border text-base ${active === link.href.slice(1) ? 'text-accent' : 'text-primary'}`}>{link.label}</a>)}
        <CvDownloadButton label={nav.resumeCta.label} onDownload={closeMenu} className="flex min-h-12 items-center text-left text-primary" />
      </nav>
    </div>}
  </header>
}
