---
title: Collectibles
description: Discover how to integrate collectible content in your Paragraph newsletter for increased engagement & monetization.
---

Use collectible content inside your Paragraph newsletter, unlocking new ways of creation, engagement and monetization.

---

## Why collectibles?

Collectibles enable writers to monetize their work through provable ownership and exclusivity, while offering collectors the chance to own unique literary pieces. Authors can engage with their audience beyond traditional publishing, and readers can directly support their favorite writers. Collectibles foster a sense of community and contribute to the cultural and financial significance of the written word in the digital age.

## Example use cases

Embedding flexible NFTs unlocks a whole array of new use cases. For example:

- Turn every post into a time-limited NFT to incentivize readers to subscribe & collect

- Narrate your posts, then create & embed audio NFTs

## Collectibles on Paragraph

Paragraph offers several different types of collectibles you can take advantage of:

- **Collectible Highlights**: Readers can save and own their favorite parts of your content.
- **Collectible Posts**: Mint entire posts as NFTs, allowing readers to own their favorite pieces.
- **Embedded Collectibles**: Mint whatever you want - images, audio, video - as NFTs, and embed them directly into your posts for your readers to collect.

### Collectible Highlights

Allow readers to save and own any part of your posts by highlighting a sentence or paragraph and minting it as an NFT.

You maintain full control over the supply and cost of this content and can enable or disable it for your entire publication or on a per-post basis.

#### Configuring collectible highlights

Before you can make your content colletible as a highlight, you need to have a wallet connected to your Paragraph account.

In your Paragraph publication settings, you can [enable or disable this feature](https://paragraph.xyz/settings/publication/blog) for all your posts. You can also set the supply, cost, and chain of all highlights. You can choose a wallet address for funds to be deposited. If no wallet address is specified, the wallet address on the account owner is used by default.

When you publish a post, you can also configure the supply & cost using the 'collectibles' tab in your post settings.

After a post is published, your readers can highlight any sentence or paragraph of your posts and choose to mint it as an NFT. This highlight is visible to other readers. The NFT is tradable on third party marketplaces and viewable in their wallets.

### Collectible Posts

Turn your entire post into a collectible.

#### Configuring collectible posts

Control the cost, supply & chain of collectible posts in your Paragraph settings, similar to the collectible highlights mentioned above.

When publishing a post, you can upload an image to be used as the NFT artwork for your NFT.

### Fees & Rewards

Collectibles are entirely free for creators, but we charge a fee for collectors. The fee may be divided up amongst both the creator and Paragraph.

### Contracts

You can find the contracts for our factory deployers below:

|          | Testnet                                    | Mainnet                                    |
| -------- | ------------------------------------------ | ------------------------------------------ |
| Base     | 0xBf9a34ba9826b37A4765D8f6243E00B8071894C1 | 0x9Bf9D0D88C1A835F1052Ef0FBa325b35bBea127a |
| Optimism | 0xb8Cd74bc2326Db73F3D7a406cFE2f7139D04dE06 | 0x584DfE9780C962e0A48fe09D353CbAa62e67C309 |
| Zora     | 0x87f148110af5F1A08CaE79e39982b51abC17F91c | 0x88e6b1341EFA068348b8177F2E59E900CC6D864b |
| Polygon  | 0x9D4d5dA7e19c8D9678C29Fe94709187dc68d3C95 | 0x3285cE203B073bd009200Dfd416a8fD6DF155A57 |

We call the `createAndMint` methods on these contracts which deploys a new smart contract ERC721 lazily, mints the first NFT to the minter, and transfers ownership of the smart contract to the Paragraph creator.

Note that none of our contracts are audited, so you use them at your own risk.

## Embedded Collectibles

We integrate with [Highlight.xyz](https://tools.highlight.xyz) so you can create NFTs out of anything, embed them in your Paragraph posts, and let your readers collect.

Read the [launch announcement](https://paragraph.xyz/@blog/highlight) for motivation behind this feature.

### Using embedded collectibles

Head to [Highlight](https://tools.highlight.xyz) and create a token.

Choose the chain, and set a name, symbol & description.

Upload an audio, video or image file.

Specify the edition size - fixed (to introduce scarcity) or unlimited.

Set a token price, start or end date.

Hit mint, and you'll be given a collection URL that looks like this: https://mint.highlight.xyz/63be385a3de4fce815d44a17

Head on over to Paragraph, and paste that link directly into a new post. It'll turn into an embed!

![Paragraph embed link](/img/highlight_embed.png)

Readers can connect their wallet to collect this NFT directly in your posts. When sent via email, your subscribers can click "Collect" to be directed to the mint.highlight.xyz page above.
