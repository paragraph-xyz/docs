---
title: Migrating to Paragraph
description: Import posts and subscribers from existing platforms.
---

## Importing Subscribers

We support importing subscribers from many other platforms, including Substack and Beehiiv. Follow these instructions to import subscribers:

1. Export your subscribers. This varies per-platform, but you should generally end up with a .CSV file of your subscriber's emails.
2. Navigate to the Paragraph [Import/Export page](https://paragraph.xyz/settings/publication/import-export)
3. Download the example CSV file that we provide, to view the format that we expect. You may need to modify your exported file to meet our requirements.
4. Upload your subscriber CSV

That's all! Your subscribers should now be imported into Paragraph and ready for your first newsletter.

If you upload the same CSV file, we automatically de-dupe your subscribers that have the same email.

## Importing paid subscribers

We support importing paid subscribers from many other platforms, including Substack.

After connecting Stripe to your Paragraph account, navigate to the Paragraph [Import/Export page](https://paragraph.xyz/settings/publication/import-export) and you should be able to migrate your paid subscriebrs from Stripe automatically.

## Importing Content

We support importing content from Wordpress, with many other platforms (including Mirror and Substack) coming soon. Follow these instructions to import posts:

1. Export your Wordpress posts.  You should have an XML file which contains xRSS data for all your posts.
2. Navigate to the Paragraph [Import/Export page](https://paragraph.xyz/settings/publication/import-export). Paste in your Wordpress RSS feed URL (which is often your Wordpress URL with /feed at the end).
3. Upload your .XML file.
4. Finally, acknowledge the content guidelines for importing posts, and import into your publication.

Images will get re-uploaded to Paragraph, and all other formatting should _generally_ be preserved.

You'll also have the option of overwriting existing posts with the same title, or re-storing all your uploaded posts onto the Arweave permaweb.

Need assistance migrating over? Reach out to us at support@paragraph.xyz and we'll help out.
