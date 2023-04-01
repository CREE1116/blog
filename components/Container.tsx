import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import Link from "next/link";

const Container = (props) => {
  const meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div className={`w-full flex flex-col items-center p-3 `}>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href="/java-jeans.jpg" />
        <meta content={meta.description} name="description" />
        {meta.tags !== undefined ? (
          <meta content={meta.tags} name="tags" />
        ) : null}
        <meta property="og:site_name" content={meta.author} />
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

          <Nav />
        </div>
      </header>
      <main className={`w-full max-w-3xl pt-8`}>{props.children}</main>
    </div>
  );
};

export default Container;
