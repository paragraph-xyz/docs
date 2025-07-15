---
title: Coins
description: Coin your writing to unlock new ways of creation, engagement and monetization.
---

Coin your writing on Paragraph, turning it into a unique digital asset that can be collected, traded, and appreciated. Coins are a way to reward your readers and create a new layer of interaction with your content.

And, for readers, coins are a way to support your favorite writers, collect unique pieces of content, and amplify ideas that resonates with you.

---

## How do coins work?

If you have a wallet connected to your Paragraph account, you'll see a 'Coin this post' toggle in the publish settings when you create a new post. By toggling this on, you can turn your post into a coin.

We use the [Doppler v3 protocol](https://docs.doppler.lol/) to deploy ERC20 tokens on Base, using Uniswap for trading. A static bonding curve on top of the Uniswap v3 pool enables fair launch, pricing, & sniper avoidance.

Coins have the following properties:

- Total supply of 1B
- 10% of the total supply is allocated to the creator of the post. This vests over a 1 year period.
- 1% of every transaction is split between the creator (0.475%), Paragraph (0.475%) and the Doppler protocol (0.05%).

Both the vested coins & the transaction fees can be claimed on Paragraph or onchain directly.


### Contracts

Since we're built on top of the Doppler protocol, we use their factory Airlock contracts to deploy the coins. Thus, the latest contract addresses can be found in the [Doppler documentation](https://docs.doppler.lol/resources/contract-addresses#base-8453).
