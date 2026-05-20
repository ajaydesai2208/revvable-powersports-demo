type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-300">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-50 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base text-stone-300 md:text-lg">{description}</p> : null}
    </div>
  )
}
