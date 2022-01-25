import type { NextPage } from "next";
import Head from "next/head";

import { Carousel } from "../components/home/Carousel";
import { ContactSection } from "../components/home/ContactSection";
import { Hero } from "../components/home/Hero";
import { HomePosts } from "../components/home/HomePosts";
import { Tecnologias } from "../components/home/Tecnologias";
import { PictureProps } from "../components/global/PostItems";
import { getPostsHome } from "../services/api";

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
      <Hero />
      <Carousel />
      <Tecnologias />
      <HomePosts content={posts.data} />
      <ContactSection />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getPostsHome();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
