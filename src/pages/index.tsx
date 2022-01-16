import type { NextPage } from "next";
import Head from "next/head";

import { Carousel } from "../components/home/Carousel";
import { ContactSection } from "../components/home/ContactSection";
import { Hero } from "../components/home/Hero";
import { HomePosts } from "../components/home/HomePosts";
import { Tecnologias } from "../components/home/Tecnologias";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid | Home</title>
      </Head>
      <Hero />
      <Carousel />
      <Tecnologias />
      <HomePosts />
      <ContactSection />
    </>
  );
};

export default Home;
