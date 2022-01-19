import { PostsHeader } from "../../components/posts/PostsHeader";
import { PostsContent } from "../../components/posts/PostsContent";
import Head from "next/head";
import { getPosts } from "../../services/api";
import { PictureProps } from "../../components/PostItems";

interface PostsProps {
  posts: {
    data: {
      attributes: {
        Title: string;
        Content: string;
        Date: string;
        Picture: PictureProps;
      };
      id: number;
    }[];
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
