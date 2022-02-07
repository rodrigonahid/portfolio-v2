import Head from "next/head";

import { PostsHeader } from "../../components/posts/PostsHeader";
import { PostsContent } from "../../components/posts/PostsContent";
import { getPosts } from "../../services/api";
import { Header } from "../../components/global/Header";
import { Footer } from "../../components/global/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { staticProps } from "..";

interface PostsProps {
  posts: {
    id: string;
    title: string;
    slug: string;
    html: string;
    created_at: string;
    feature_image: string;
  }[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Posts</title>
      </Head>
      <Header />
      <PostsHeader />
      <PostsContent posts={posts} />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: staticProps) {
  const posts = await getPosts(locale);

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ["header", "posts", "footer"])),
    },
  };
}
