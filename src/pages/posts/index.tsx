import { PostsHeader } from "../../components/posts/PostsHeader";
import { PostsContent } from "../../components/posts/PostsContent";
import Head from "next/head";
import { getPosts } from "../../services/api";
import { PictureProps } from "../../components/global/PostItems";
import { Header } from "../../components/global/Header";
import { Footer } from "../../components/global/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { staticProps } from "..";

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
      <Header />
      <PostsHeader />
      <PostsContent posts={posts.data} />
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
