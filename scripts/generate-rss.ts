import { Feed } from "feed";
import { writeFileSync } from "fs";

import PostJson from "../.contentlayer/generated/Post/_index.json";
import metadata from "../data/metadata";

const master = {
  name: metadata.author,
  link: metadata.siteUrl,
  email: metadata.email,
};

const feed = new Feed({
  title:
    metadata.title.length > 0
      ? `[크리의 끄적끄적] ${metadata.title}`
      : metadata.site_name,
  description: metadata.description,
  id: metadata.siteUrl,
  link: metadata.siteUrl,
  language: "ko",
  image: `${metadata.siteUrl}/images/normal-cree.jpg`,
  copyright: `All rights reserved since 2023-03-29, ${master.name}`,
  generator: "generate-rss",
  feedLinks: {
    json: `${metadata.siteUrl}/rss/feed.json`,
    atom: `${metadata.siteUrl}/rss/rss-atom.xml`,
  },
  author: master,
});

PostJson.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: post._id,
    link: `${metadata.siteUrl}/blog/${post._raw.flattenedPath}`,
    description: post.description,
    content: post.body.raw,
    author: [master],
    image:
      post.image !== undefined
        ? `${metadata.siteUrl}/${post.image}`
        : `${metadata.siteUrl}/images/그냥크리.jpeg`,
    contributor: [master],
    date: new Date(post.date),
    category: post.tags.map((tag) => ({ name: tag, term: "Technologies" })),
  });
});

// Output: RSS 2.0
writeFileSync("public/rss/rss.xml", feed.rss2(), "utf-8");
// Output: Atom 1.0
writeFileSync("public/rss/rss-atom.xml", feed.atom1(), "utf-8");
// Output: JSON Feed 1.0
writeFileSync("public/rss/feed.json", feed.json1(), "utf-8");
