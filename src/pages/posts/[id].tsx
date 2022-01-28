import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Footer } from "../../components/global/Footer";
import { Header } from "../../components/global/Header";

import { PictureProps } from "../../components/global/PostItems";
import { PostsSingleContent } from "../../components/posts/PostsSingleContent";
import { PostsSingleHeader } from "../../components/posts/PostsSingleHeader";
import { getAllPosts, getPosts, getSinglePost } from "../../services/api";

interface StaticPros {
  params: {
    id: string;
  };
  locale: string;
}

interface PostItemProps {
  singlePost: {
    attributes: {
      Title: string;
      Content: string;
      Date: string;
      Picture: PictureProps;
    };
  };
}

interface Path {
  id: number;
  attributes: {
    locale: string;
  };
}

export default function PostItem({ singlePost }: PostItemProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | {singlePost.attributes.Title}</title>
      </Head>

      <Header />
      <PostsSingleHeader attributes={singlePost.attributes} />
      <PostsSingleContent attributes={singlePost.attributes} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await getAllPosts();

  return {
    // paths: [{ params: { id: `${i}` }, locale: "en" }]
    paths: data.map((item: Path) => ({
      params: { id: `${item.id}` },
      locale: item.attributes.locale,
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: StaticPros) {
  const { data } = await getSinglePost(params.id);

  return {
    props: {
      singlePost: data ?? null,
      ...(await serverSideTranslations(locale, ["header", "posts", "footer"])),
    },
  };
}
