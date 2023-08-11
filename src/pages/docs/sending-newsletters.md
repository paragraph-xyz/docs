---
title: Sending Newsletters.
description: Deliver newsletters directly ro your readers.
---

Paragraph provides everything you need to send newsletters directly to your users' email addresses or wallets.

---

## Email Newsletter Delivery

Before you publish a post, you can optionally send it as a newsletter to your subscribers.

All email gets sent from the email address `your-publication-slug@newsletter.paragraph.xyz`.

When a reader replies to your email, it gets delivered to your personal email on your account. (If you've only connected your wallet to your account, please add your email address to receive replies!).

If you're publishing [in a community](/docs/creating-posts#communities), only users that subscribed to that community will receive your newsletter. (By default, when a user subscribes to your newsletter, they'll be subscribed to all communities).

If your community is [token-gated,](/docs/token-gated-content) your readers need to hold your required tokens in order to receive the newsletter. This is checked every time a newsletter is delivered (at delivery-time), ensuring that your readers truly hold the requiured tokens for access.

## Wallet Newsletter Delivery

In addition to email, we also give you the option of delivering your newsletter to your readers' wallets. We use [XMTP](https://xmtp.org/) for delivering newsletters in a completely decentralized & censorship-resistant way.

Your readers can subscribe to your publication with their wallet, as mentioned [here](/docs/getting-subscribers). Even if you don't enable wallet subscriptions on your publication, any Paragraph user can add their wallet to their account, and will then be able to receive newsletters via wallet.

You can use the community & token-gating functionality alongside wallet newsletter delivery, meaning that you can send token-gated posts directly to wallets; or segment your subscribers and deliver relevant content to the right segments.

We don't currently deliver the _entire_ post via XMTP: we instead deliver a short message that includes the URL of your post, the title of your publication & post, and your post preview. Messages are received by the `paragraph-xyz` ENS.

Note that recipients' wallets need to be activated on the XMTP network before they can receive messages. The easiest way is to go through the setup flow on any XMTP client, like [XMTP Chat](https://xmtp.chat/inbox). (This is an entirely free and gasless one-time activation).

## Managing Subscribers

On your Paragraph [subscriber settings](https://paragraph.xyz/app/subscribers), you can view or remove your subscribers. You can also add new subscribers manually, using their wallet address _or_ their email address.

### Importing Subscribers

You can also import subscribers via CSV. This is helpful if you already have a Substack or Revue email list export.

Visit your Paragraph [import/export settings](https://paragraph.xyz/settings/publication/import-export), and click `Import subscribers`. Your CSV file should have an `email` column, and optionally a `created_at` column.

## Email Signup Forms

You can link to or embed an email signup form on your own personal website.

Link directly to your signup form by appending `/subscribe` to your newsletter (ie, https://paragraph.xyz/@blog/subscribe).

Embed the signup form into another website by using an iframe. Copy the embed code in your [publication settings](https://paragraph.xyz/settings/publication/blog) and paste the HTML elsewhere.
