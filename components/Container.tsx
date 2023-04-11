import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import Link from "next/link";
import Togglebtn from "./Togglebtn";
import { useRouter } from "next/router";

const Container = (props) => {
  const router = useRouter();
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    site_name: metadata.site_name,
    siteUrl: metadata.siteUrl,
    url: router.asPath,
    ...props.customMeta,
  };
  console.log(meta);
  return (
    <div className={`w-full flex flex-col items-center p-3 `}>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="Icon/favicon.ico" />
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
        <meta name="description" content={meta.description} />
        <meta
          property="og:title"
          content={
            metadata.title !== "크리의 끄적끄적"
              ? `[크리의 끄적끄적] ${meta.title}`
              : meta.title
          }
          key="og-title"
        />
        <meta
          property="og:description"
          content={
            meta.keyword === undefined
              ? meta.description
              : `${meta.description}\n#${meta.keyword.join(" #")}`
          }
          key="og-desc"
        />
        <meta
          property="og:url"
          content={`${meta.siteUrl}${meta.url}`}
          key="og-url"
        />
        <meta
          property="og:image"
          content={
            meta.image === undefined
              ? `${meta.siteUrl}/images/그냥 크리.jpeg`
              : `${meta.siteUrl}${meta.image}`
          }
          key="og-image"
        />
        <meta property="og:site_name" content={meta.site_name} key="og-site" />
        <meta
          name="twitter:title"
          content={
            meta.title !== "크리의 끄적끄적"
              ? `[크리의 끄적끄적] ${meta.title}`
              : meta.title
          }
          key="tw-title"
        />
        <meta
          name="twitter:description"
          content={
            meta.keyword === undefined
              ? meta.description
              : `${meta.description}\n#${meta.keyword.join(" #")}`
          }
          key="tw-desc"
        />
        <meta
          name="twitter:image"
          content={
            meta.image === undefined
              ? `${meta.siteUrl}/images/그냥 크리.jpeg`
              : `${meta.siteUrl}${meta.image}`
          }
          key="tw-image"
        />
        <meta name="twitter:card" content="summary_large_image" key="tw-card" />
      </Head>
      <header
        className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-800`}
      >
        <div
          className={`w-full flex flex-row justify-between items-center my-1 shadow-md p-3 z-50`}
        >
          <Link href="/">
            <a className={"flex flex-row items-center"}>
              <Image
                src={`/images/그냥 크리.jpeg`}
                alt="로고"
                width={40}
                height={40}
                objectFit={`cover`}
                className={`rounded-full`}
              />
              <span className={`mx-2 font-extralight text-lg`}>
                {metadata.title}
              </span>
            </a>
          </Link>
          <Togglebtn />
          <Nav />
        </div>
      </header>
      <main className={`w-full max-w-3xl pt-8 `}>{props.children}</main>
    </div>
  );
};

export default Container;
