import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import Link from "next/link";
import Togglebtn from "./Togglebtn";
import { useRouter } from "next/router";

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

  return (
    <div className={`w-full flex flex-col items-center p-3 `}>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/java-jeans.jpg" />
        {meta.keyword !== undefined ? (
          <>
            <meta
              property="og:description"
              content={meta.description + "\n" + meta.keyword}
            />
            <meta content={meta.keyword} name="keyword" />
          </>
        ) : (
          <meta property="og:description" content={meta.description} />
        )}
        <meta property="og:type" content="blog" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:url" content={meta.siteUrl + router.asPath} />
        <meta property="og:image" content="/java-jeans.jpg" />
        <meta property="og:locale" content="kr_KO" />
      </Head>
      <header
        className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-800`}
      >
        <div
          className={`w-full flex flex-row justify-between items-center my-1 shadow-md p-3`}
        >
          <Link href="/">
            <a className={"flex flex-row items-center"}>
              <Image
                src={`/java-jeans.jpg`}
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
      <main className={`w-full max-w-3xl pt-8`}>{props.children}</main>
    </div>
  );
};

export default Container;
