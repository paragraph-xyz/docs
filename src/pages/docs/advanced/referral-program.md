---
title: Referral rewards
description: Incentivize & reward readers, while ensuring curators and your audience gets paid for driving traffic.
---

Every Paragraph publication has a referral program built-in, to help creators grow by incentivizing & rewarding readers for driving traffic.

Simply append a wallet address to any Paragraph URL, and when users click on the link, you'll get a reward fee automatically sent to your wallet whenever users mint collectible posts.

If a user clicks your referral link and then becomes a Paragraph creator themselves, you'll automatically get an indefinite
rake of all the revenue they earn on Paragraph.

Read more: [https://paragraph.xyz/referral-rewards](https://paragraph.xyz/referral-rewards)

---

## How it works

Add your wallet address to any Paragraph url using the ?referrer param, eg:

- A post: https://paragraph.xyz/@blog/recurring-subscriptions?referrer=0x123
- A newsletter: https://paragraph.xyz/@blog?referrer=0x123
- Any other page: https://paragraph.xyz?referrer=0x123

Whenever your audience clicks on that link, we set your wallet address as the 'referer' for that user
for the next 7 days.

If the user mints an NFT on the newsletter you send them to, you get the 'reader referrer' fee.

If the user registers a _new_ account on Paragraph and begins creating content themselves, you'll
indefinitely be set as the 'creator referrer' for them, and you'll get the 'creator referrer' fee
every time they monetize.

## Reward Fees

It's free and gasless to create collectible posts on Paragraph. We charge a fixed fee for all collectors.
If there are no referrers for the given transaction, Paragraph takes the full fee from the referrer addresses.

### Optimism & Base
We charge a 0.000777 ETH mint fee, with the following reward breakdown:

- 0.000333 ETH to the creator
- 0.000222 ETH to the Paragraph platform
- 0.000111 ETH to the 'creator referrer'
- 0.000111 ETH to the 'reader referrer'

### Polygon
We charge a 2 MATIC mint fee, with the following reward breakdown:

- 0.8 MATIC to the creator
- 0.6 MATIC to the Paragraph platform
- 0.3 MATIC to the creator referrer
- 0.3 MATIC to the reader referrer

## Examples

This is a table of examples using the Optimism breakdown above:

|  | Creator  | Creator referrer | Reader referrer | Paragraph |
| --- | --- | --- | --- | --- |
| No referrers; regular free mint | 0.000333 | 0 | 0 | 0.000444 |
| Free mint, Single minter referrer | 0.000333 | 0 | 0.000111 | 0.000333 |
| Free mint, Single creator referrer | 0.000333 | 0.000111 | 0 | 0.000333 |
| Paid mint, no referrers | 0.000333 | 0 | 0 | 0.000444 |
| Paid mint, both referrers | 0.000333 | 0.000111 | 0.000111 | 0.000222 |

## Caveats

- The user needs to be a _new user to Paragraph_ for the creator referrer reward to be set. The user must not have had any Paragraph account before.
- The reader referrer reward is set only on the publication that you referred the user to. If you refer the reader to a different page (such as the Paragraph landing page), no reader referrer reward will be set
- Only a single creator or reader referrer reward can be set at any given time. The referrers expire after 7 days, after which a new one can be set.

## Integrating with our smart contracts

If you're a curator (eg Daylight.xyz or Mint.fun) interested in getting reader referral fees for mints you refer to us,
you can do so by calling the following method on our Paragraph ERC721s:

`mintWithReferrer(address recipientOfNFT, address mintReferrer)`

If you're interested in a deeper integration (eg, possibly for getting creator referral fees), reach out to us
at hello@paragraph.xyz.
