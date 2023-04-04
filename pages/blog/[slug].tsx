import Container from "components/Container";
import Comment from "components/Comment";
import Progressbar from "components/Progressbar";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    keyword: post.tags,
  };

  return (
    <>
      <Container customMeta={customMeta}>
        <Progressbar />
        <div className="mt-10 prose dark:prose-invert mx-auto ">
          {post.image !== undefined ? (
            <div className="relative w-full h-56 -z-50">
              <Image
                src={post.image}
                alt={post.title}
                priority={true}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="-z-50 rounded-md"
              />
              <div
                className={`absolute z-0 w-full h-56 bg-black opacity-[50%] rounded-md`}
              ></div>
              <div
                className={`z-10 w-full h-96 flex justify-center items-center `}
              >
                <h1 className="z-20 text-white">{post.title}</h1>
              </div>
            </div>
          ) : (
            <h1 className="text-sky-700">{post.title}</h1>
          )}

          <MDXComponent />
        </div>
        <Comment />
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
