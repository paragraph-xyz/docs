import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import clsx from 'clsx'
import { LogoLight } from './LogoLight'
import { Logo } from './Logo'

const themes = [
  { name: 'Light', value: 'light', icon: LightIcon },
  { name: 'Dark', value: 'dark', icon: DarkIcon },
  { name: 'System', value: 'system', icon: SystemIcon },
]

function IconBase({ children, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      {children}
    </svg>
  )
}

function LightIcon(props) {
  return (
    <IconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
      />
    </IconBase>
  )
}

function DarkIcon(props) {
  return (
    <IconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
      />
    </IconBase>
  )
}

function SystemIcon(props) {
  return (
    <IconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1.5l.31 1.242c.084.333.36.573.63.808.091.08.182.158.264.24A1 1 0 0 1 11 15H5a1 1 0 0 1-.704-1.71c.082-.082.173-.16.264-.24.27-.235.546-.475.63-.808L5.5 11H4a3 3 0 0 1-3-3V4Zm3-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
      />
    </IconBase>
  )
}

export function ThemeSelector(props) {
  let [selectedTheme, setSelectedTheme] = useState()
  const { imglogo, ...rest } = props

  useEffect(() => {
    if (selectedTheme) {
      document.documentElement.setAttribute('data-theme', selectedTheme.value)
      if (selectedTheme.value === 'dark') {
        imglogo(<Logo className="h-6 w-auto" />)
      } else if (selectedTheme.value === 'light') {
        imglogo(<Logo className="h-6 w-auto" />)
      } else if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        imglogo(<Logo className="h-6 w-auto" />)
      } else {
        imglogo(<Logo className="h-6 w-auto" />)
      }
    } else {
      setSelectedTheme(
        themes.find(
          (theme) =>
            theme.value === document.documentElement.getAttribute('data-theme')
        )
      )
    }
  }, [selectedTheme])

  return (
    <Listbox
      as="div"
      value={selectedTheme}
      onChange={setSelectedTheme}
      {...rest}
    >
      <Listbox.Label className="sr-only">Theme</Listbox.Label>
      <Listbox.Button className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-foreground/5 ring-1 ring-border bg-card">
        <span className="sr-only">{selectedTheme?.name}</span>
        <LightIcon className="hidden h-4 w-4 fill-primary [[data-theme=light]_&]:block" />
        <DarkIcon className="hidden h-4 w-4 fill-primary [[data-theme=dark]_&]:block" />
        <LightIcon className="hidden h-4 w-4 fill-muted-foreground [:not(.dark)[data-theme=system]_&]:block" />
        <DarkIcon className="hidden h-4 w-4 fill-muted-foreground [.dark[data-theme=system]_&]:block" />
      </Listbox.Button>
      <Listbox.Options className="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-popover p-3 text-sm font-medium shadow-md shadow-foreground/5 ring-1 ring-border">
        {themes.map((theme) => (
          <Listbox.Option
            key={theme.value}
            value={theme}
            className={({ active, selected }) =>
              clsx(
                'flex cursor-pointer select-none items-center rounded-[0.625rem] p-1',
                {
                  'text-primary': selected,
                  'text-foreground': active && !selected,
                  'text-muted-foreground': !active && !selected,
                  'bg-accent': active,
                }
              )
            }
          >
            {({ selected }) => (
              <>
                <div className="rounded-md bg-background p-1 shadow ring-1 ring-border">
                  <theme.icon
                    className={clsx('h-4 w-4', {
                      'fill-primary': selected,
                      'fill-muted-foreground': !selected,
                    })}
                  />
                </div>
                <div className="ml-3">{theme.name}</div>
              </>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
