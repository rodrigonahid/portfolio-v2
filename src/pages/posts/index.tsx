import { PostsHeader } from "../../components/posts/PostsHeader";
import { PostsContent } from "../../components/posts/PostsContent";
import Head from "next/head";
import { getPosts } from "../../services/api";

interface PostsProps {
  posts: {
    data: object[];
  };
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Posts</title>
      </Head>
      <PostsHeader />
      <PostsContent posts={posts.data} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}
