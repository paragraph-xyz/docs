---
title: Memberships
description: Monetize your Paragraph newsletter with NFT-backed recurring memberships.
---

Create free or paid memberships to offer benefits to your subscribers and begin monetizing with recurring payments.

---

## Memberships on Paragraph

Paragraph enables you to create _memberships_ for your newsletter. Memberships allow you to grant additional benefits and perks to your subscribers, and can optionally be backed by NFTs.

All Paragraph publications have a single free membership by default, but you can optionally create any number of paid membership tiers. Upon subscribing to your newsletter, readers will auto-join the free membership but can choose to upgrade to a paid tier.

For each membership, you can upload a membership image, mark one as 'recommended' (showing a border around it), and choose additional benefits and perks that are associated to each. For example, you can offer a private Discord community to a paid membership tier. You can also gate exclusive content on Paragraph to certain memberships.

All publications also have a _membership_ page, accessible at /memberships (for example: [https://paragraph.xyz/@web3academy/memberships](https://paragraph.xyz/@web3academy/memberships). You can share this link with your readers to incentivize them to subscribe & upgrade.

![Paragraph memberships](/img/membership.png)

### Paid memberships

In order to begin accepting payment for your memberships, you need to connect your Paragraph account with Stripe. You can do so in your [publication settings](https://paragraph.xyz/settings/publication/memberships-token-gating).

After connecting with Stripe you'll be able to create paid memberships and charge a monthly or yearly fee to join. You can create any number of premium membership tiers, offering different perks at different pricepoints.

### NFT-backed memberships

You can associate each membership with an NFT, which will stay active for as long as a reader's subscription is active. When the reader's subscription expires, the NFT metadata changes - the 'active' attribute is set to 'false', and the NFT name is appended with [EXPIRED].

Since the NFT attributes change, attribute-based gating can be used on Guild and other platforms to ensure only active users get access.

To create an NFT-backed membership, check the 'NFT' checkbox when creating a membership, and select a chain the NFT will be minted on.

When users upgrade to a paid membership, they'll be prompted to connect a wallet and claim the membership NFT. We airdrop the NFT directly to their wallet, so they won't need to cover gas. (When they connect their wallet, it gets added to their account, meaning you can also send them wallet-based newsletters!).

### Future improvements

This is the first iteration of what's to come. Within the next few months, memberships will be:

* Purchasable using fiat or crypto.
* One-off payments will be possible, not just recurring.
* Memberships can be in limited quantity.

Stay tuned for more!


## Any other questions?

We'd love to help you get set up. Reach out to hello@paragraph.xyz with any other questions or comments!
