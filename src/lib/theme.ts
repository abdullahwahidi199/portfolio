export type Theme = 'dark' | 'light'
export function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}
export function setTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
  try { localStorage.setItem('theme', theme) } catch { /* storage can be unavailable */ }
}
