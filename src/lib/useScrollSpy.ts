import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach((id) => { const element = document.getElementById(id); if (element) observer.observe(element) })
    return () => observer.disconnect()
  }, [ids])
  return active
}
