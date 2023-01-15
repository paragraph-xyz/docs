---
title: Accept streaming payments for your token-gated newsletter
description: We partner with Superfluid to bring streaming payments to your newsletter.
---

Create Superfluid-Protocol enabled token-gating.

We support using Superfluid NFTs, so you can accept streaming payments for your token-gated newsletter.

---

## Deploying the Superfluid contract

The code is opensourced by rashtrakoff@ here: [https://github.com/rashtrakoff/Upward](https://github.com/rashtrakoff/Upward).

Deploy & verify the smart contracts contained in that repo.

Call the `initWatcher` method in the `WatcherFactory` contract to create a `Watcher` clone for yourself. Specify the payment flow rate and other parameters.

Use this `Watcher` contract to token-gate a Paragraph newsletter [following these instructions](/docs/token-gated-content), and gate an example post behind that contract.

Now, when your subscribers try to access this gated post, they'll need to setup a Superfluid stream to your wallet address (eg the one you used to create the clone). If the flow rate they specify is >= the flow rate specified in the contract, access will be granted!
