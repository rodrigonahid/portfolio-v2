import type { NextPage } from "next";
import { Carousel } from "../Carousel";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Carousel />
    </>
  );
};

export default Home;
