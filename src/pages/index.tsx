import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Carousel } from "../components/home/Carousel";
import { ContactSection } from "../components/home/ContactSection";
import { Hero } from "../components/home/Hero";
import { HomePosts } from "../components/home/HomePosts";
import { Tecnologias } from "../components/home/Tecnologias";
import { PictureProps } from "../components/global/PostItems";
import { getPostsHome } from "../services/api";
import { Header } from "../components/global/Header";
import { Footer } from "../components/global/Footer";

interface staticProps {
  locale: string;
}
interface postsProps {
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
    meta: Object;
  };
}

const Home = ({ posts }: postsProps) => {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Home</title>
      </Head>

      <Header />
      <Hero />
      <Carousel />
      <Tecnologias />
      <HomePosts content={posts.data} />
      <ContactSection />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: staticProps) {
  const posts = await getPostsHome();
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "diferenciais",
        "tech",
        "posts",
      ])),
    },
  };
}

export default Home;
