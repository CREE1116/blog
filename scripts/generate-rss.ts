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
  title: metadata.title,
  description: metadata.description,
  id: metadata.siteUrl,
  link: metadata.siteUrl,
  language: "ko",
  image: `${metadata.siteUrl}/java-jeans.jpg`,
  copyright: `All rights reserved since 2023-03-29, ${master.name}`,
  generator: "generate-rss",
  feedLinks: {
    json: `${metadata.siteUrl}/json`,
    atom: `${metadata.siteUrl}/atom`,
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
    contributor: [master],
    date: new Date(post.date),
    category: post.tags.map((tag) => ({ name: tag, term: "Technologies" })),
  });
});

// Output: RSS 2.0
writeFileSync("public/rss.xml", feed.rss2(), "utf-8");
// Output: Atom 1.0
writeFileSync("public/rss-atom.xml", feed.atom1(), "utf-8");
// Output: JSON Feed 1.0
writeFileSync("public/feed.json", feed.json1(), "utf-8");
