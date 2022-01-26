import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Footer } from "../../components/global/Footer";
import { Header } from "../../components/global/Header";

import { PictureProps } from "../../components/global/PostItems";
import { PostsSingleContent } from "../../components/posts/PostsSingleContent";
import { PostsSingleHeader } from "../../components/posts/PostsSingleHeader";
import { getPosts, getSinglePost } from "../../services/api";

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
  const { meta } = await getPosts();
  const totalPosts: number = meta.pagination.total;

  const mapPosts = () => {
    const arrayTotal = [];
    for (let i = 0; i <= totalPosts; i++) {
      arrayTotal.push({ params: { id: `${i}` }, locale: "en" });
      arrayTotal.push({ params: { id: `${i}` }, locale: "pt-BR" });
    }
    return arrayTotal;
  };

  const mapUsPosts = () => {
    const arrayTotal = [];
    for (let i = 0; i <= totalPosts; i++) {
      arrayTotal.push({ params: { id: `${i}` }, locale: "pt-BR" });
    }
    return arrayTotal;
  };

  return {
    paths: mapPosts(),
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
