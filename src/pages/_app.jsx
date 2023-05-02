import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

const navigation = [
  {
    title: 'Introduction',
    links: [{ title: 'Overview ', href: '/' }],
  },
  {
    title: 'Core Concepts',
    links: [
      { title: 'Publishing', href: '/docs/creating-posts' },
      { title: 'Sending Newsletters', href: '/docs/sending-newsletters' },
      {
        title: 'Customization',
        href: '/docs/customizing-your-publication',
      },
      { title: 'Adding Team Members', href: '/docs/adding-team-members' },
      { title: 'Getting Subscribers', href: '/docs/getting-subscribers' },
      { title: 'Collectibles', href: '/docs/nfts' },
      { title: 'Token-gating', href: '/docs/token-gated-content' },
    ],
  },

  {
    title: 'Advanced Concepts',
    links: [
      {
        title: 'Create a referral program',
        href: '/docs/advanced/referral-program',
      },
      {
        title: 'Streaming payments',
        href: '/docs/advanced/streaming-payments',
      },
      {
        title: 'Recurring payments',
        href: '/docs/advanced/recurring-payments',
      },
    ],
  },

  {
    title: 'Integrations',
    links: [
      {
        title: 'Creating memberships with Coinvise',
        href: '/docs/integrations/coinvise',
      },
      { title: 'Verified accounts on NF.TD', href: '/docs/integrations/nftd' },
      {
        title: 'Using Paragraph with Unlock Protocol',
        href: '/docs/integrations/unlock-protocol',
      },
      {
        title: 'Reading Paragraph posts from Arweave',
        href: '/docs/integrations/arweave',
      },
      {
        title: 'Farcaster',
        href: '/docs/integrations/farcaster',
      },
    ],
  },

  {
    title: 'Developers',
    links: [
      { title: 'Building on top of Paragraph', href: '/docs/development' },
      { title: 'Paragraph Link', href: '/docs/link' },
    ],
  },
]

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (/^h[23]$/.test(node.name)) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Layout
        navigation={navigation}
        title={title}
        tableOfContents={tableOfContents}
      >
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
