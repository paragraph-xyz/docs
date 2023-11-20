---
title: Reading Paragraph posts from Arweave
description: Permissionlessly ingest Paragraph posts directly from Arweave.
---

Paragraph gives writers the option of storing posts on Arweave. Arweave storage allows for permanent & uncensorable writing. It also allows anyone to permissionlessly read posts from Arweave, and build dApps atop this data (such as self-hosting all Paragraph posts on your own website, or displaying them in another app).

---

## Reading from Arweave

You'll need to query Arweave (via GraphQL) for the transaction ID, then use this to fetch the actual post data using the [Arweave JS SDK](https://github.com/ArweaveTeam/arweave-js).

To query Arweave via GraphQL, first construct the GraphQL query. The specifics here depend on your usecase, but you're able to query on any of the Arweave tags we've attached to posts, such as the contributor wallet address, post slug, etc. You can view an example Arweave transaction of a Paragraph post (and all associated tags) [here](https://viewblock.io/arweave/tx/HI2mTOkd4Hej1U0Dpf70VGSKeAMZ6bebdKiI6NE14Is).


Here's how to query for the latest published post's transaction ID from a certain wallet, for example:

```graphql
query GetParagraphPosts($wallet: String!) {
  transactions(tags:[
    {
      name:"AppName",
      values:["Paragraph"],
    },
    {
      name:"Contributor",
      values:[$wallet]
    }
  ], sort:HEIGHT_DESC, first: 1){

    edges {
      node {
        id
      }
    }
  }
}
```

(You'll need to insert the wallet parameter, eg: `{"wallet": "0x8f1e16BE9B6F88acF2cd58Da84A335463350B9fb"}`).

You can test this query out on the [Arweave GraphQL playground](https://arweave.net/graphql), or via curl directly:

```
curl 'https://arweave.net/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://arweave.net' --data-binary '{"query":"query GetParagraphPosts($wallet: String!) {\n  transactions(tags:[\n    {\n      name:\"AppName\",\n      values:[\"Paragraph\"],\n    },\n    {\n      name:\"Contributor\",\n      values:[$wallet]\n    }\n  ], sort:HEIGHT_DESC, first: 1){\n  \n    edges {\n      node {\n        id\n      }\n    }\n  }\n}","variables":{"wallet":"0x8f1e16BE9B6F88acF2cd58Da84A335463350B9fb"}}' --compressed
```

Then, given the resulting transaction ID, use the [Arweave JS SDK](https://github.com/ArweaveTeam/arweave-js) to retrieve the JSON data.

We store the static HTML of the post, as well as the [TipTap](https://github.com/ueberdosis/tiptap) JSON. We also store a lot of other metadata about the post, including the time it was published, assciated categories, etc.

## Example Repo

This repo from @PirosB3 shows how to query Arweave for new Paragraph posts, and cross-post them to Farcaster: https://github.com/PirosB3/Paragraph-Farcaster-xposter
