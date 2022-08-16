---
title: Token-Gating Content
description: Learn how to mint NFTs on Polygon, or use existing NFTs, to gate content.
---

Supercharge your community with tokens.

---

## Overview

Paragraph allows you to create token-gated newsletters and content. You can use any ERC721 or ERC20 tokens on the Ethereum or Polygon network. If you don't have your token, no problem - you can mint your own NFT on Paragraph for **0 gas fees**, and use this to token-gate.


## Adding Your Token To Paragraph
### Using An Existing Token

In your [Community settings](https://paragraph.xyz/settings/publication/communities), click `Add a Token` and follow the token flow.

Paste your contract address, the minimum number of tokens the user must hold to access, and a URL users can go to to purchase.

### Creating A New Token

In your [Community settings](https://paragraph.xyz/settings/publication/communities), click `Add a Token` and follow the token flow for minting a new token.

Name your NFT, specify the token price (in MATIC), and list the total quantity of tokens in the collection.

Limiting the total number of tokens is useful if you'd like to limit the number of NFT holders that have access: for example, you can mint 10/10 VIP-tier NFTs that grant access to a private Discord, and sell them for 1000 MATIC; and you can mint an infinite number of NFTs that just grant content access but are more reasonably priced.

After you finish the flow, an ERC1155 NFT will be minted on the Polygon network.

**Note** that many NFT marketplaces, including OpenSea, have poor support for ERC1155s. You can verify the mint flow completed successfully by looking up your address on Polygonscan and confirming the ERC-1155 Token Txn occurred. (Alternately, you can find the tx on the Paragraph [Polygonscan address](https://polygonscan.com/address/0xc9ddb5E37165827BBBFf15b582E232C06862C4E8)).


## Creating A Gated Community

After you have a token, you need to add it to a [community](/docs/creating-posts#communities).

Now, when you publish content under this community, your newsletters will only be delivered to token-holders, and your posts will only be accessible to readers that connect their wallets and confirm they're holding the required tokens. (After readers connect their wallets once, they're prompted to add their email to their account, ensuring they receive future newsletters in their inbox).
