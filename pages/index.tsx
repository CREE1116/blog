import type { NextPage } from "next";
import Container from "../components/Container";
import Image from "next/image";
import RecentPosts from "../components/RecentPosts";
import metadata from "../data/metadata";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useTheme } from "next-themes";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme, setTheme } = useTheme();
  return (
    <Container>
      <div className={`my-5 w-full border-t-[12px] border-transparent`}>
        <div className={`relative contrast-100 -z-50`}>
          <Image
            src={
              theme === "dark"
                ? `/images/산화해버린 크리.jpg`
                : `/images/그냥 크리.jpg`
            }
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
        </div>

        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
