import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-primary py-2 px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/80 active:bg-primary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
  secondary:
    'rounded-full bg-secondary py-2 px-4 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
}

export function Button({ variant = 'primary', className, ...props }) {
  return <button className={clsx(styles[variant], className)} {...props} />
}

export function ButtonLink({ variant = 'primary', className, href, ...props }) {
  return (
    <Link href={href}>
      <a className={clsx(styles[variant], className)} {...props} />
    </Link>
  )
}
