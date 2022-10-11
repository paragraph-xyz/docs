---
title: Paragraph Link
description: Provision newsletters in 1 click for your users.
---

Paragraph Link is a small JS snippet that lets 3rd-party developers seamlessly onboard their users onto Paragraph.

Developers can also pre-configure their user's Paragraph publications using any tokens, team members, publication names, and more.

For example, the following usecases could find value in Link:
* You run a platform that lets users mint membership NFTs. You want to give utility to these NFTs by letting your users easily create gated newsletters behind these NFTs.

* You run a writing platform. You have an existing flow where you gather the user's wallet address and name of their publication. You want to let writers create a Paragraph newsletter using this existing name.

* You operate a DAO. You want members of your DAO to contribute long-form content, and gate it behind the DAO's tokens.

## Overview

Paragraph Link works as follows:

- Collect some information from your user, in your own app via some onboarding flow. You can collect the name of their publication; gather contract addresses of the NFTs they’d like to gate with; etc
- Open the Paragraph Link URL via a new window or iFrame and pass in all information you have
- The user is prompted to connect their wallet
- Then, the user’s account is created and pre-provisioned using all information you’ve passed us.

You can pass us the following information:

| Parameter name      | Description |
| ----------- | ----------- |
| publicationName      | Name of the publication. Defaults to the user’s ENS name or wallet address. |
| publicationUrl   | The URL slug of the publication (ie, ‘my-neat-blog’ would be accessible at https://paragraph.xyz/@my-neat-blog). Defaults to the user’s ENS name or wallet address.        |
| communityName   | The name of the gated community. Defaults to “Gated community”. |
| membershipName   | The name of the membership that corresponds with this token. Defaults to “Access token”.        |
| tokenAddress   | The address of the smart contract. We support ERC721 and ERC20 tokens on the Ethereum or Matic (Polygon) networks.        |
| tokenQuantity   | The minimum number of tokens that readers must hold in order to access the publication. Defaults to 1.        |
| tokenUrl   | An optional URL that provides more information on the token (such as where to buy it). This is presented to readers if they don’t hold the token.        |

Append these parameters to the following URL, either in an iFrame or a new tab/window:

`https://paragraph.xyz/link?publicationName=xyz&publicationUrl=yyy&…`

## Example Code

This code opens Paragraph Link in a new window:

```js
// When a user clicks a button, open the popup
const popup = window.open("https://paragraph.xyz/link?publicationName=The%20simplest%20HTML%20example&publicationUrl=this-simplest-html", "popup", "width=600,height=600");
    window.addEventListener("message", function(e) {
        // Wait for Paragraph to signal that it's loaded.
        if ( e.data === "loaded") {
            // Send the 'init' message. This is required.
            popup.postMessage("init", "https://paragraph.xyz");

          // When the Paragraph flow completes, we'll broadcast
          // this message.
          } else if (e.data === 'updated') {
             // Handle this flow: show success message, etc
          }
    })

```

## Example UI

Implemented by our friends at clubs.link:

![Initial onboarding](/img/link/first.png)
![Paragraph iFrame step](/img/link/second.png)
![Final success step](/img/link/third.png)
