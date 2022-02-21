import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { Footer } from "../../components/global/Footer";
import { Header } from "../../components/global/Header";

import { PostsSingleContent } from "../../components/posts/PostsSingleContent";
import { PostsSingleHeader } from "../../components/posts/PostsSingleHeader";
import { getAllPosts, getSinglePost } from "../../services/api";

interface StaticPros {
  params: {
    id: string;
  };
  locale: string;
}

interface PostItemProps {
  singlePost: {
    data: {
      title: {
        text: string;
      }[];
      image: {
        alt: string;
        url: string;
      };
      content: {
        type: string;
        text: string;
      }[];
    };
    first_publication_date: string;
    id: string;
    slugs: string[];
  };
}

interface Path {
  id: string;
  lang: string;
}

export default function PostItem({ singlePost }: PostItemProps) {
  // console.log(singlePost);
  return (
    <>
      <Head>
        {/* <title>Rodrigo Nahid | {singlePost.data.title[0].text}</title>
        <meta name="description" content={singlePost.data.content[0].text} /> */}
      </Head>

      <Header />
      {/* <PostsSingleHeader singlePost={singlePost} /> */}
      {/* <PostsSingleContent singlePost={singlePost} /> */}
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    // paths: [{ params: { id: `${i}` }, locale: "en" }]
    paths: posts.map((item: Path) => ({
      params: { id: `${item.id}` },
      locale: item.lang === "en-us" ? "en" : "pt-BR",
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: StaticPros) {
  const data = await getSinglePost(params.id);
  console.log(data);
  return {
    props: {
      singlePost: data ?? null,
      ...(await serverSideTranslations(locale, ["header", "posts", "footer"])),
    },
  };
}
