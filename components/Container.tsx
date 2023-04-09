import Image from "next/image";
import Head from "next/head";
import metadata from "../data/metadata";
import Nav from "./Nav";
import Link from "next/link";
import Togglebtn from "./Togglebtn";
import Icon from "./Icon";
import Metatag from "./Metatag";
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
        <title>{meta.title}</title>
        <Metatag {...meta} />
        <Icon />
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
