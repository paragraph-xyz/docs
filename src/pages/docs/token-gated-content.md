---
title: Token-Gating Content
description: Learn how to mint NFTs on Polygon, or use existing NFTs, to gate content.
---

Build a community around your content and monetize it with token gates!

---

## Overview

Paragraph allows you to create token-gated newsletters and content. We support token-gating using any ERC721 or ERC20 tokens on the following networks:

- Ethereum
- Polygon
- Binance Smart Chain
- Gnosis
- Avalanche
- Arbitrum

If you don't have an existing token, no problem - you can mint your own NFT on Paragraph for **0 gas fees**, and use this to token-gate.

## Adding Your Token To Paragraph

From any post, click the "Gate" button at the top right. Then follow the wizard to create any combination of token and newsletter gates.

![Gating wizard gate type choice](/img/gating/gating_wizard_gate_types.png)

### Using An Existing Token

After clicking `Add` on the `Token` card, click `Import Token` and follow the flow.

Paste your contract address, the minimum number of tokens the user must hold to access, and a URL users can go to to purchase.

### Creating A New Token

After clicking `Add` on the `Token` card, click `Mint New Token` and follow the flow for minting a new token.

Name your NFT, specify the token price (in MATIC), and list the total quantity of tokens in the collection.

Limiting the total number of tokens is useful if you'd like to limit the number of NFT holders that have access: for example, you can mint 10/10 VIP-tier NFTs that grant access to a private Discord, and sell them for 1000 MATIC; and you can mint an infinite number of NFTs that just grant content access but are more reasonably priced.

After you finish the flow, an ERC1155 NFT will be minted on the Polygon network.

**Note** that many NFT marketplaces, including OpenSea, have poor support for ERC1155s. You can verify the mint flow completed successfully by looking up your address on Polygonscan and confirming the ERC-1155 Token Txn occurred. (Alternately, you can find the tx on the Paragraph [Polygonscan address](https://polygonscan.com/address/0xc9ddb5E37165827BBBFf15b582E232C06862C4E8)).

## Adding a Newsletter Subscription Gate

If you would like to gate your post behind a newsletter subscription requirement, so that only subscribers can access your post, simply click `Add` under the `Subscription` card.

## Creating Multiple Gates for a Post

After you've added your first gate to a post, the wizard will now display a group view that lets you add additional tokens or newsletter subscription gates with complex AND/OR conditions.

In the example below, readers must either be subscribed to your newsletter AND hold a `VIP Lounge` token, or they can simply hold a `Superfan Sponsor` token to gain access.

![Gating wizard group conditions](/img/gating/gating_wizard_group_conditions.png)

## Gated Access to Posts

Now your posts will only be accessible to readers that connect their wallets and confirm they're holding the required tokens. (After readers connect their wallets once, they're prompted to add their email to their account, ensuring they receive future newsletters in their inbox).

## Newsletter Deliveries

Newsletters for gated posts will only be delivered to token-holders.
