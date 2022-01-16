import { PostsHeader } from "../components/PostsHeader";
import { PostsContent } from "../components/PostsContent";
import Head from "next/head";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Posts</title>
      </Head>
      <PostsHeader />
      <PostsContent />
    </>
  );
}
