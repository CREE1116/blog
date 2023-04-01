import Container from "components/Container";
import Comment from "components/Comment";
import Progressbar from "components/Progressbar";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);

  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
    tags: "#" + post.tags.join(" #"),
  };

  return (
    <>
      <Container customMeta={customMeta}>
        <Progressbar />
        <div className="mt-10 prose dark:prose-invert ">
          <h1 className="text-sky-700">{post.title}</h1>
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
