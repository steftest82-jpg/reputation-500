interface SectionHeadingProps {
  label?: string
  title?: string
  subtitle?: string
  description?: string
  centered?: boolean
  light?: boolean
  children?: React.ReactNode
}

export default function SectionHeading({ label, title, subtitle, description, centered = true, light = false, children }: SectionHeadingProps) {
  // Support multiple usage patterns:
  // 1. <SectionHeading title="Main Title" description="Desc" />
  // 2. <SectionHeading title="Main Title" subtitle="Desc" />
  // 3. <SectionHeading subtitle="Label">Title as children</SectionHeading>

  const effectiveLabel = label || (children && subtitle ? subtitle : undefined)
  const effectiveTitle = title || (children ? undefined : undefined)
  const effectiveDesc = description || (!children ? subtitle : undefined)

  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-8`}>
      {effectiveLabel && (
        <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${light ? 'text-primary-light' : 'text-primary'}`}>
          {effectiveLabel}
        </p>
      )}
      {effectiveTitle && (
        <h2 className={`text-3xl lg:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-heading'}`} style={{ fontFamily: 'var(--font-heading)' }}>
          {effectiveTitle}
        </h2>
      )}
      {children && (
        <h2 className={`text-2xl lg:text-3xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-heading'}`} style={{ fontFamily: 'var(--font-heading)' }}>
          {children}
        </h2>
      )}
      {effectiveDesc && (
        <p className={`text-base lg:text-lg leading-relaxed ${light ? 'text-gray-800' : 'text-text-light'}`}>
          {effectiveDesc}
        </p>
      )}
    </div>
  )
}
