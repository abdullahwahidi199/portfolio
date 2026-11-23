export default function Chip({ children }: { children: string }) {
  return <span className="inline-flex rounded-full border border-border bg-elevated px-3 py-1.5 font-mono text-[13px] leading-[1.4] text-primary transition-colors duration-150 hover:border-accent">{children}</span>
}
