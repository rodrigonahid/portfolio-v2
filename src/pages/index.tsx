import type { NextPage } from "next";
import Head from "next/head";

import { Carousel } from "../components/Carousel";
import { ContactSection } from "../components/ContactSection";
import { Hero } from "../components/Hero";
import { HomePosts } from "../components/HomePosts";
import { Tecnologias } from "../components/Tecnologias";
import { GlobalStyle } from "../styles/global";

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
