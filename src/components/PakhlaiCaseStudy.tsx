import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BookOpen, Check, CircleCheck, Database, MonitorSmartphone, Radio, Server, X } from 'lucide-react'
import { pakhlaiCaseStudy as study } from '../content/site-content'
import './PakhlaiCaseStudy.css'

const architectureIcons = [MonitorSmartphone, Server, Database]

export default function PakhlaiCaseStudy() {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const scrollRef = useRef<HTMLElement>(null)
  const backdropPressed = useRef(false)

  useEffect(() => {
    if (!open) return
    const body = document.body
    const root = document.documentElement
    const scrollY = window.scrollY
    const scrollbarWidth = window.innerWidth - root.clientWidth
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    }
    const previousRootOverflow = root.style.overflow
    const paddingRight = parseFloat(window.getComputedStyle(body).paddingRight) || 0
    Object.assign(body.style, {
      position: 'fixed',
      top: `-${scrollY}px`,
      width: '100%',
      overflow: 'hidden',
      paddingRight: `${paddingRight + scrollbarWidth}px`,
    })
    root.style.overflow = 'hidden'
    return () => {
      Object.assign(body.style, previous)
      root.style.overflow = previousRootOverflow
      window.scrollTo({ top: scrollY, behavior: 'instant' })
    }
  }, [open])

  const openCaseStudy = () => {
    const dialog = dialogRef.current
    if (!dialog || dialog.open) return
    dialog.showModal()
    setOpen(true)
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' })
    headingRef.current?.focus({ preventScroll: true })
  }
  const closeCaseStudy = () => dialogRef.current?.close()

  return <>
    <button
      ref={triggerRef}
      type="button"
      className="case-study-trigger"
      aria-haspopup="dialog"
      aria-controls="pakhlai-case-study"
      aria-expanded={open}
      onClick={openCaseStudy}
    >
      <BookOpen aria-hidden="true" size={17} />
      {study.summaryLabel}
    </button>
    {createPortal(
      <dialog
        ref={dialogRef}
        id="pakhlai-case-study"
        className="case-study-dialog"
        aria-labelledby="pakhlai-case-study-title"
        onClose={() => { setOpen(false); triggerRef.current?.focus({ preventScroll: true }) }}
        onPointerDown={(event) => { backdropPressed.current = event.target === event.currentTarget }}
        onClick={(event) => {
          if (backdropPressed.current && event.target === event.currentTarget) closeCaseStudy()
        }}
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return
          const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]'))
          const first = items[0]
          const last = items[items.length - 1]
          const outsideTabOrder = !items.includes(document.activeElement as HTMLElement)
          if (event.shiftKey && (document.activeElement === first || outsideTabOrder)) {
            event.preventDefault()
            last?.focus()
          } else if (!event.shiftKey && (document.activeElement === last || outsideTabOrder)) {
            event.preventDefault()
            first?.focus()
          }
        }}
      >
        <div className="case-study-dialog__toolbar">
          <span className="case-study-dialog__handle" aria-hidden="true" />
          <p className="case-study-dialog__label">{study.dialogTitle}</p>
          <button type="button" onClick={closeCaseStudy} aria-label={study.result.closeLabel} className="case-study-dialog__dismiss">
            <X aria-hidden="true" size={22} />
          </button>
        </div>
        <article ref={scrollRef} aria-labelledby="pakhlai-case-study-title" className="case-study" tabIndex={0}>
          <header className="case-study__header">
            <div className="case-study__masthead">
              <p className="case-study__eyebrow">{study.eyebrow}</p>
              <span className="case-study__category">{study.category}</span>
            </div>
            <h2 ref={headingRef} id="pakhlai-case-study-title" className="case-study__title" tabIndex={-1}>
              {study.title} <span>{study.titleAccent}</span>
            </h2>
            <p className="case-study__intro">{study.intro}</p>
          </header>

          <dl className="case-study__facts">
            {study.facts.map((fact) => <div key={fact.label} className="case-study__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>)}
          </dl>

          <div className="case-study__body">
            <div className="case-study__story">
              <section aria-labelledby="pakhlai-problem-heading" className="case-study__section">
                <h3 id="pakhlai-problem-heading">{study.problem.heading}</h3>
                <p>{study.problem.body}</p>
              </section>

              <section aria-labelledby="pakhlai-contribution-heading" className="case-study__section">
                <h3 id="pakhlai-contribution-heading">{study.contribution.heading}</h3>
                <ul className="case-study__contributions">
                  {study.contribution.items.map((item) => <li key={item}>
                    <Check aria-hidden="true" size={18} />
                    <span>{item}</span>
                  </li>)}
                </ul>
              </section>

              <section aria-labelledby="pakhlai-challenge-heading" className="case-study__note">
                <h3 id="pakhlai-challenge-heading">{study.challenge.heading}</h3>
                <p>{study.challenge.body}</p>
              </section>
            </div>

            <div className="case-study__engineering">
              <section aria-labelledby="pakhlai-architecture-heading">
                <div className="case-study__section-heading">
                  <h3 id="pakhlai-architecture-heading">{study.architecture.heading}</h3>
                  <span className="case-study__category">{study.architecture.label}</span>
                </div>
                <div className="case-study__system">
                  <ol className="case-study__layers" aria-label="Pakhlai application layers">
                    {study.architecture.layers.map((layer, index) => {
                      const Icon = architectureIcons[index]
                      return <li key={layer.label}>
                        <span className="case-study__node"><Icon aria-hidden="true" size={20} /></span>
                        <span className="case-study__layer-label">{layer.label}</span>
                        <span className="case-study__technology">{layer.technology}</span>
                      </li>
                    })}
                  </ol>
                  <div className="case-study__realtime">
                    <Radio aria-hidden="true" size={20} />
                    <div>
                      <p>{study.architecture.realtimeTitle}</p>
                      <p>{study.architecture.realtimeTechnology}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section aria-labelledby="pakhlai-decisions-heading" className="case-study__decisions">
                <h3 id="pakhlai-decisions-heading">{study.engineering.heading}</h3>
                <dl>
                  {study.engineering.decisions.map((decision) => <div key={decision.title}>
                    <dt>{decision.title}</dt>
                    <dd>{decision.body}</dd>
                  </div>)}
                </dl>
              </section>
            </div>
          </div>

          <footer className="case-study__outcome" aria-labelledby="pakhlai-result-heading">
            <span className="case-study__outcome-icon"><CircleCheck aria-hidden="true" size={22} /></span>
            <div>
              <p className="case-study__eyebrow">{study.result.label}</p>
              <h3 id="pakhlai-result-heading">{study.result.heading}</h3>
              <p className="case-study__outcome-copy">{study.result.body}</p>
            </div>
          </footer>
        </article>
      </dialog>,
      document.body,
    )}
  </>
}
