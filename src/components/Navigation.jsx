import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-foreground">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-border lg:mt-4 lg:space-y-4">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link href={link.href}>
                    <a
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        {
                          'font-semibold text-primary before:bg-primary':
                            link.href === router.pathname,
                          'text-muted-foreground before:hidden before:bg-muted hover:text-foreground hover:before:block':
                            link.href !== router.pathname,
                        }
                      )}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
