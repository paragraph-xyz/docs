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

We support importing content from Wordpress, Substack and Mirror. Follow these instructions to import posts from Wordpress or Substack:

1. Export your posts.  If migrating from Wordpress, you should have an XML file which contains xRSS data for all your posts. If migrating from Substack, you should have a .zip file.
2. Navigate to the Paragraph [Import/Export page](https://paragraph.xyz/settings/publication/import-export). Paste in the URL of your publication.
3. Upload your .XML or .zip file.
4. Finally, acknowledge the content guidelines for importing posts, and import into your publication.

To import from Mirror:

1. Navigate to the Paragraph [Import/Export page](https://paragraph.xyz/settings/publication/import-export). Paste in the URL of your Mirror publication.
2. We should detect your posts on Arweave, and prompt you to proceed.
3. Finally, acknowledge the content guidelines for importing posts, and import into your publication.

Images will get re-uploaded to Paragraph, and all other formatting should _generally_ be preserved.

You'll also have the option of overwriting existing posts with the same title, or re-storing all your uploaded posts onto the Arweave permaweb.

Need assistance migrating over? Reach out to us at support@paragraph.xyz and we'll help out.
