import { useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cvDownload } from '../../content/site-content'

type Props = {
  label: string
  className?: string
  onDownload?: () => void
}

export default function CvDownloadButton({ label, className = '', onDownload }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const headingId = useId()
  const descriptionId = useId()

  return <>
    <button type="button" aria-haspopup="dialog" onClick={() => dialogRef.current?.showModal()} className={className}>{label}</button>
    {createPortal(
      <dialog
        ref={dialogRef}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close() }}
        className="m-auto w-[calc(100%_-_3rem)] max-w-md rounded-2xl border border-border bg-elevated p-0 text-primary shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6 sm:p-8">
          <h2 id={headingId} className="display pr-10 text-2xl">{cvDownload.heading}</h2>
          <p id={descriptionId} className="mt-2 text-sm text-secondary">{cvDownload.description}</p>
          <div className="mt-6 grid gap-3">
            {cvDownload.options.map((option) => <a
              key={option.filename}
              href={option.href}
              download={option.filename}
              onClick={() => { dialogRef.current?.close(); onDownload?.() }}
              className="flex min-h-20 items-center justify-between gap-4 rounded-xl border border-border p-4 transition-colors duration-150 hover:border-accent hover:bg-accent/5"
            >
              <span>
                <span className="block font-medium text-primary">{option.label}</span>
                <span className="mt-1 block text-sm text-secondary">{option.description}</span>
              </span>
              <span className="shrink-0 rounded-md border border-border px-2 py-1 text-sm text-accent">PDF</span>
            </a>)}
          </div>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close CV picker" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg text-secondary transition-colors duration-150 hover:text-accent">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5"><path d="m6 6 12 12M18 6 6 18" /></svg>
          </button>
        </div>
      </dialog>,
      document.body,
    )}
  </>
}
