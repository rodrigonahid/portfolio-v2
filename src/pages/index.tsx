import type { NextPage } from "next";
import { Carousel } from "../components/Carousel";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Tecnologias } from "../components/Tecnologias";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Carousel />
      <Tecnologias />
    </>
  );
};

export default Home;
