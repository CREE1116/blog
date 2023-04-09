import { useRouter } from "next/router";
import { useEffect } from "react";

const Metatag = ({ title, site_name, description, image, url, keyword }) => {
  const router = useRouter();
  useEffect(() => console.log(router), [router]);
  return (
    <>
      <meta property="og:type" content="blog" />
      <meta
        property="og:title"
        content={title !== "크리의 끄적끄적" ? `${site_name} ${title}` : title}
      />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:url" content={`https://cree-devblog.net/`} />
      <meta property="og:image" content="/images/그냥 크리.jpeg" />
      <meta property="og:locale" content="kr_KO" />
      {keyword !== undefined ? (
        <>
          <meta
            property="og:description"
            content={description + "\n#" + keyword.join(" #")}
          />
          <meta content={keyword.join(", ")} name="keyword" />
          <meta
            name="description"
            content={description + "\n#" + keyword.join(" #")}
          />
        </>
      ) : (
        <>
          <meta property="og:description" content={description} />
          <meta name="description" content={description} />
        </>
      )}
      <link
        rel="alternate"
        type="application/rss+xml"
        href="/rss/rss.xml"
        title="RSS"
      />
      <link
        rel="alternate"
        type="application/atom+xml"
        href="/rss/rss-atom.xml"
        title="RSS Atom"
      />
      <link
        rel="alternate"
        type="application/json"
        href="/rss/feed.json}"
        title="JSON Feed"
      />
    </>
  );
};
export default Metatag;
