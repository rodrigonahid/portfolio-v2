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
  }[];
  locale: string;
}

const Home = ({ posts, locale }: PostsProps) => {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Home</title>
        <meta
          name="description"
          content={
            locale === "en"
              ? "Hello, i'm Rodrigo Nahid, Javascript fullstack developer, focused on React, React Native and Node.js. Welcome to my portfolio, hope you enjoy!"
              : "Olá, eu sou Rodrigo Nahid, desenvolvedor fullstack React, React Native e Node.js. Bem vindo ao meu portfolio, espero que goste!"
          }
        ></meta>
      </Head>

      <Header />
      <Hero />
      <Carousel locale={locale} />
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
