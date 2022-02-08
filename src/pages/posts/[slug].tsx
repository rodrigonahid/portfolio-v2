import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Footer } from "../../components/global/Footer";
import { Header } from "../../components/global/Header";

import { PostsSingleContent } from "../../components/posts/PostsSingleContent";
import { PostsSingleHeader } from "../../components/posts/PostsSingleHeader";
import { getAllPosts, getSinglePost } from "../../services/api";

interface StaticPros {
  params: {
    slug: string;
  };
  locale: string;
}

interface PostItemProps {
  singlePost: {
    title: string;
    created_at: string;
    feature_image: string;
    html: string;
  };
}

interface Path {
  slug: string;
  primary_tag: {
    name: string;
  };
}

export default function PostItem({ singlePost }: PostItemProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | {singlePost.title}</title>
      </Head>

      <Header />
      <PostsSingleHeader singlePost={singlePost} />
      <PostsSingleContent singlePost={singlePost} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();

  const setLocale = (locale: string) => {
    if (locale === "English") {
      return "en";
    }
    if (locale === "Portuguese") {
      return "pt-BR";
    }
  };

  return {
    // paths: [{ params: { id: `${i}` }, locale: "en" }]
    paths: posts.map((item: Path) => ({
      params: { slug: `${item.slug}` },
      locale: setLocale(item.primary_tag.name),
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: StaticPros) {
  const data = await getSinglePost(locale, params.slug);

  return {
    props: {
      singlePost: data ?? null,
      ...(await serverSideTranslations(locale, ["header", "posts", "footer"])),
    },
  };
}
