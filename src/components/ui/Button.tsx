import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { ui } from '../../content/site-content'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  external?: boolean
}

export default function Button({ variant, children, external, className = '', href, ...rest }: Props) {
  const styles = {
    primary: 'border-accent bg-accent text-accent-contrast hover:bg-accent-strong hover:border-accent-strong',
    secondary: 'border-accent bg-transparent text-primary hover:border-accent-strong hover:text-accent',
    ghost: 'border-transparent bg-transparent text-accent hover:text-accent-strong',
  }
  return <a
    {...rest}
    href={href}
    target={external && href !== '#' ? '_blank' : undefined}
    rel={external && href !== '#' ? 'noopener noreferrer' : undefined}
    aria-label={external && href !== '#' ? `${typeof children === 'string' ? children : rest['aria-label'] ?? ''} (${ui.opensNewTab})` : rest['aria-label']}
    aria-disabled={href === '#' ? true : undefined}
    onClick={href === '#' ? (event) => event.preventDefault() : rest.onClick}
    className={`inline-flex min-h-11 items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium transition-colors duration-150 ${styles[variant]} ${className}`}
  >{children}</a>
}
