import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Carousel } from "../components/home/Carousel";
import { ContactSection } from "../components/home/ContactSection";
import { Hero } from "../components/home/Hero";
import { HomePosts } from "../components/home/HomePosts";
import { Tecnologias } from "../components/home/Tecnologias";
import { getPosts } from "../services/api";
import { Header } from "../components/global/Header";
import { Footer } from "../components/global/Footer";

export interface staticProps {
  locale: string;
}
export interface PostsProps {
  posts: {
    id: string;
    title: string;
    slug: string;
    html: string;
    created_at: string;
    feature_image: string;
  }[];
  locale: string;
}

const Home = ({ posts, locale }: PostsProps) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Home</title>
      </Head>

      <Header />
      <Hero />
      <Carousel />
      <Tecnologias />
      <HomePosts posts={posts} />
      <ContactSection />
      <Footer />
    </>
  );
};

export async function getStaticProps({ locale }: staticProps) {
  const posts = await getPosts(locale);
  return {
    props: {
      posts,
      locale,
      ...(await serverSideTranslations(locale, [
        "common",
        "header",
        "diferenciais",
        "tech",
        "posts",
        "contact",
        "footer",
      ])),
    },
  };
}

export default Home;
