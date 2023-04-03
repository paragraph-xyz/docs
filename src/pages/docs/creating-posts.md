---
title: Publishing Posts
description: Create your first post.
---

Using Paragraph, you can publish content to a blog/newsletter.

---

## The Basics

Create new posts in your [dashboard](https://paragraph.xyz/notes). Click `New post` and begin typing.


![Images](/img/editor.png)

Within your dashboard, you can add a title, categories, or body text.

Your **title** is exactly how it sounds - a post title.

**Categories** are used to keep your content organized in your dashboard, as well as in your public-facing blog. For example, your readers can click on a post category and browse all posts filed under that category.

Your **body text** is where your actual post content goes. Press `/` and insert callouts, images, and more.

Any text you type here is saved automatically -- no need to perform a manual save.

You can also modify your post settings by clicking the gear at the top right. Choose a cover image, modify the post slug, and add a friendly post preview.

When you're ready to publish, just hit 'publish'. You'll now have the option to specify a few final things before your post is live - you can publish in a community, send a newsletter, or store on Arweave.

## Communities

Communities are a way to sub-divide your newsletter. You can create a community for weekly updates; a community for DAO news; and a community for your friends & family. When you publish a newsletter, you can choose exactly which communities should receive it.

When users subscribe to your newsletter, by default they'll be subscribed to all communities, but they can self-select the communities they'd like to be a part of.

You can even [token-gate](/docs/token-gated-content) individual communities!

## SEO

Paragraph is heavily optimized for SEO, which will help your publication get discovered on search engines.

* We render everything statically. This means ultra-fast page loading, and no need to pull in information via APIs on page load.
* All uploaded images are properly resized and optimized using [next/image](https://nextjs.org/docs/api-reference/next/image). On page load before the image is rendered, they're blurred, preventing layout shift.
* Unlike other newsletter platforms, we host all content on the top-level https://paragraph.xyz domain (rather than a https://yourname.paragraph.xyz subdomain. This means Paragraph's SEO ranking gets shared with your newsletters.
* We auto-generate meta tags and social text, but you can specify your own in every post to further customize.
* We auto-generate a descriptive post slug (URL structure is important for SEO ranking). You can optionally specify your own.
* We link all posts in our sitemap, exposing them to web crawlers.
* We've optimized cumulative layout shift (CLS), largest contentful paint (LCP), and other core web vitals, all of which are important to crawlers.
