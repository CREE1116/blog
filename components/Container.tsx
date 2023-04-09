import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import Link from "next/link";
import Togglebtn from "./Togglebtn";
import Icon from "./Icon";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    site_name: metadata.site_name,
    siteUrl: metadata.siteUrl,
    ...props.customMeta,
  };
  const router = useRouter();
  useEffect(() => console.log(router), [router]);
  return (
    <div className={`w-full flex flex-col items-center p-3 `}>
      <Head>
        <Icon />
        <title>{meta.title}</title>
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
        <meta property="og:type" content="blog" />
        <meta
          property="og:title"
          content={
            meta.title !== "크리의 끄적끄적"
              ? `${meta.site_name} ${meta.title}`
              : meta.title
          }
        />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:url" content={`https://cree-devblog.net/`} />
        <meta property="og:image" content="/images/그냥 크리.jpeg" />
        <meta property="og:locale" content="kr_KO" />
        {meta.keyword !== undefined ? (
          <>
            <meta
              property="og:description"
              content={meta.description + "\n#" + meta.keyword.join(" #")}
            />
            <meta content={meta.keyword.join(", ")} name="keyword" />
            <meta
              name="description"
              content={meta.description + "\n#" + meta.keyword.join(" #")}
            />
          </>
        ) : (
          <>
            <meta property="og:description" content={meta.description} />
            <meta name="description" content={meta.description} />
          </>
        )}
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
