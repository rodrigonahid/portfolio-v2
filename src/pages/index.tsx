import type { NextPage } from "next";
import Head from "next/head";
import { Carousel } from "../components/Carousel";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HomePosts } from "../components/HomePosts";
import { Tecnologias } from "../components/Tecnologias";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rodrigo Nahid - Meu Portfolio</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Hero />
      <Carousel />
      <Tecnologias />
      <HomePosts />
    </>
  );
};

export default Home;
