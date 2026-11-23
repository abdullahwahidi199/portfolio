import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'
import dashboard from '../assets/pakhlai_photos/Screenshot 2026-11-01 062848.png'
import menu from '../assets/pakhlai_photos/Screenshot 2026-11-01 063029.png'
import branches from '../assets/pakhlai_photos/Screenshot 2026-11-01 063335.png'
import assistant from '../assets/pakhlai_photos/AI-assitant.jpeg'

const slides = [
  { image: dashboard, title: 'Operations dashboard', detail: 'A clear view of sales, orders, and activity', alt: 'Pakhlai dashboard showing revenue trends and restaurant operations' },
  { image: menu, title: 'Digital ordering', detail: 'A menu made for customers', alt: 'Pakhlai digital menu with food photography and ordering controls' },
  { image: branches, title: 'Branch management', detail: 'Connected teams and locations', alt: 'Pakhlai branch management and data migration interface' },
  { image: assistant, title: 'AI business analyst', detail: 'Answers grounded in restaurant data', alt: 'Pakhlai AI business analyst displaying an expense analysis' },
]

export default function PakhlaiSlider() {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [viewerOpen, setViewerOpen] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const viewerTrigger = useRef<HTMLButtonElement>(null)
  const viewer = useRef<HTMLDialogElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!playing || hovered || viewerOpen || reducedMotion) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500)
    return () => window.clearInterval(timer)
  }, [active, playing, hovered, viewerOpen, reducedMotion])

  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length)
  const openViewer = () => {
    if (!viewer.current?.open) viewer.current?.showModal()
    setViewerOpen(true)
    closeButton.current?.focus()
  }

  return <><figure
    className="pakhlai-slider relative isolate m-0 min-h-[350px] overflow-hidden sm:min-h-[420px] lg:h-full"
    role="region"
    aria-roledescription="carousel"
    aria-label="Pakhlai product screenshots"
    tabIndex={0}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onTouchStart={(event) => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY } }}
    onTouchEnd={(event) => {
      if (!touchStart.current) return
      const deltaX = event.changedTouches[0].clientX - touchStart.current.x
      const deltaY = event.changedTouches[0].clientY - touchStart.current.y
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) move(deltaX < 0 ? 1 : -1)
      touchStart.current = null
    }}
    onTouchCancel={() => { touchStart.current = null }}
    onKeyDown={(event) => {
      if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
      if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
    }}
  >
    {slides.map((slide, index) => <div key={slide.title} className={`pakhlai-slide ${index === active ? 'is-active' : ''}`} aria-hidden={index !== active}>
      <img src={slide.image} alt="" className="pakhlai-slide-backdrop" loading="lazy" />
      <img src={slide.image} alt={index === active ? slide.alt : ''} className="pakhlai-slide-image" loading={index === 0 ? 'eager' : 'lazy'} />
    </div>)}
    <button ref={viewerTrigger} type="button" onClick={openViewer} aria-label={`View ${slides[active].title} full size`} className="pakhlai-view-trigger absolute inset-x-[18px] bottom-[122px] top-[18px] z-10 cursor-zoom-in rounded-[10px]">
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-slate-950/75 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-sm">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" /></svg>
        View image
      </span>
    </button>
    <figcaption className="pakhlai-slider-caption absolute inset-x-0 bottom-0 z-10 px-5 pb-4 pt-16 text-white sm:px-6 sm:pb-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">Inside Pakhlai <span className="mx-2 text-white/30">/</span> {String(active + 1).padStart(2, '0')} of {String(slides.length).padStart(2, '0')}</p>
      <div className="mt-2">
        <p className="display text-lg leading-tight sm:text-xl">{slides[active].title}</p>
        <p className="mt-1 text-xs text-white/70 sm:text-sm">{slides[active].detail}</p>
      </div>
      <div className="mt-4 flex h-9 items-center justify-between gap-2">
        <div className="flex shrink-0 items-center gap-0.5" aria-label="Choose a Pakhlai screenshot">
          {slides.map((slide, index) => <button key={slide.title} type="button" onClick={() => setActive(index)} aria-label={`Show ${slide.title}`} aria-current={index === active ? 'true' : undefined} className={`pakhlai-slider-dot ${index === active ? 'is-active' : ''}`} />)}
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button type="button" onClick={() => move(-1)} aria-label="Previous Pakhlai screenshot" className="pakhlai-slider-control">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          {!reducedMotion && <button type="button" onClick={() => setPlaying((current) => !current)} aria-label={playing ? 'Pause Pakhlai slideshow' : 'Play Pakhlai slideshow'} aria-pressed={!playing} className="pakhlai-slider-control">
            {playing ? <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
              : <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M8 5.5a1 1 0 0 1 1.5-.86l10 6.5a1 1 0 0 1 0 1.72l-10 6.5A1 1 0 0 1 8 18.5z" /></svg>}
          </button>}
          <button type="button" onClick={() => move(1)} aria-label="Next Pakhlai screenshot" className="pakhlai-slider-control">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </figcaption>
  </figure>
    <dialog
      ref={viewer}
      className="pakhlai-lightbox"
      aria-labelledby="pakhlai-viewer-title"
      onClose={() => { setViewerOpen(false); viewerTrigger.current?.focus() }}
      onClick={(event) => { if (event.target === event.currentTarget) viewer.current?.close() }}
      onKeyDown={(event) => {
        event.stopPropagation()
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
      }}
      onTouchStart={(event) => event.stopPropagation()}
      onTouchEnd={(event) => event.stopPropagation()}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-white/15 px-4 py-3 text-white sm:px-6">
          <div className="min-w-0">
            <h2 id="pakhlai-viewer-title" className="display truncate text-base sm:text-lg">{slides[active].title}</h2>
            <p className="text-xs text-white/60">{active + 1} of {slides.length}</p>
          </div>
          <button ref={closeButton} type="button" onClick={() => viewer.current?.close()} aria-label="Close image viewer" className="pakhlai-slider-control shrink-0">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><path d="M5 5 19 19M19 5 5 19" /></svg>
          </button>
        </div>
        <div className="min-h-0 flex-1 p-3 sm:p-5"><img src={slides[active].image} alt={slides[active].alt} className="h-full w-full object-contain" /></div>
        <div className="flex items-center justify-between gap-4 border-t border-white/15 px-4 py-3 text-white sm:px-6">
          <p className="min-w-0 truncate text-xs text-white/65 sm:text-sm">{slides[active].detail}</p>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous image" className="pakhlai-slider-control"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="m15 18-6-6 6-6" /></svg></button>
            <button type="button" onClick={() => move(1)} aria-label="Next image" className="pakhlai-slider-control"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="m9 18 6-6-6-6" /></svg></button>
          </div>
        </div>
      </div>
    </dialog>
  </>
}
