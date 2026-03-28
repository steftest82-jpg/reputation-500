import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon?: string
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="h-full p-6 lg:p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 bg-white">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-light text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <i className={`fas ${icon} text-xl`} />
          </div>
        )}
        <h3 className="text-lg font-bold text-heading mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h3>
        <p className="text-text-light text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  )
}
