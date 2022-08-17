---
title: Customizing Your Publication
description: Truly make your publication your own.
---

Paragraph provides a handful of tools to customize your publication and truly make it your own. All options can be found on your [Paragraph publication settings](https://paragraph.xyz/settings/publication/blog).

---

## Adding Links

Links are used to organize your publication. Links are displayed above your posts on your homepage. You can link to...

* **Any external URLs**. Link to your Discord, Twitter, or anything else.
* **Any Paragraph URLs**. Link to specific posts, categories (ie `https://paragraph.xyz/@blog/category/web3`), or communities. (These load instantly for your users).


## Theming

Customize the background and foreground colors of your publication.

In the future, you'll be able to change fonts and perform even more customization.


## Custom Domain

The custom domain feature gives your publication polished branding, and it helps your SEO discovery. This feature enables you (and your readers) to access your publication from `https://paragraph.xyz/@<username>` to `example.com` or `blog.example.com`. With a one-time $50 fee, you can activate this feature directly from your Paragraph dashboard.

The first thing you need to do is purchase the custom domain feature via Stripe checkout in your [Publication Settings](https://paragraph.xyz/settings/publication/blog), and set up your DNS configuration in your domain registrar's dashboard.

![Images](/img/custom-domain-feature-purchase.png)

### Requirements

To use this custom domain feature, you need to:
1. Already have a custom domain on your own.
2. Purchase a one-time $50 fee in your [Publication Settings](https://paragraph.xyz/settings/publication/blog) to unlock this feature.

If both requirements are met, you can follow the [DNS Configuration](#dns-configuration) steps to configure your DNS.

### DNS Configuration

If you’re adding an **apex** domain, such as `example.com`, you’ll need to update your DNS settings as follows:

| DNS Type | DNS Name | DNS Value |
|-|-|-|
| A | @ | 76.76.21.21 |

If you’re adding a **subdomain**, such as `blog.example.com`, you’ll need to update your DNS settings as follows:

| DNS Type | DNS Name | DNS Value |
|-|-|-|
| CNAME | blog *(or any subdomain you want add)* | paragraph.xyz. |

### Propagation Time

After you successfully configure your DNS settings, it may take a while for the new DNS settings to propagate. When the propagation is finished, the dashboard will tell you that the new DNS configuration is verified. If somehow the new DNS configuration is not verified for more than 48 hours, send us an email to [hello@paragraph.xyz](mailto:hello@paragraph.xyz) along with the steps you have done.

## What Happens to Your Old URL?

After you add a custom domain, we set up a permanent redirect from your old URL to your custom domain. This means your SEO shouldn’t be affected - the next time your web page is crawled, the bots will follow the redirect and crawl your domain.

## Analytics

Within your newsletter settings, add your Google Analytics ID to keep track of pageviews, your audience growth, and more.
