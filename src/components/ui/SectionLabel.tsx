export default function SectionLabel({ label }: { label: string }) {
  return <div className="mb-6 flex items-center gap-3 font-body text-[13px] font-medium uppercase tracking-[0.12em] text-accent"><span aria-hidden="true" className="h-px w-6 bg-accent" />{label}</div>
}
