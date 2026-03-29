import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs({ items, light }: { items: BreadcrumbItem[]; light?: boolean }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className={`text-sm mb-6 ${light ? 'text-gray-400' : 'text-gray-500'}`}>
        <ol className="flex flex-wrap items-center gap-1">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <span className="mx-1">/</span>}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href} className={`transition-colors ${light ? 'hover:text-white' : 'hover:text-primary'}`}>
                  {item.label}
                </Link>
              ) : (
                <span className={`font-medium ${light ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
