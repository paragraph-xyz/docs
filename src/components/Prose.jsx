import clsx from 'clsx'

export function Prose({ as: Component = 'div', className, ...props }) {
  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none dark:prose-invert text-foreground',
        // Paragraph color system prose styles
        'prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-blockquote:text-foreground',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-muted-foreground',
        // links
        'prose-a:font-semibold prose-a:text-primary hover:prose-a:text-primary/80',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_hsl(var(--background)),inset_0_calc(-1*(var(--tw-prose-underline-size,2px)+2px))_0_0_hsl(var(--link-underline))] hover:prose-a:[--tw-prose-underline-size:3px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-muted prose-pre:shadow-lg prose-pre:ring-1 prose-pre:ring-border',
        // hr
        'prose-hr:border-border'
      )}
      {...props}
    />
  )
}
