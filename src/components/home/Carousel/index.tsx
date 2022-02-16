import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { useTranslation } from "next-i18next";

import {
  Background,
  CarouselBlock,
  CarouselWrapper,
  SwiperWrapper,
} from "./style";

import "swiper/css";
import "swiper/css/pagination";

import { CarouselItem } from "../CarouselItem";
import { Container } from "../../../styles/grid";

SwiperCore.use([Pagination]);

interface CarouselProps {
  locale: string;
}
const carouselItemsPortuguese = [
  {
    url: "",
    title: "Clean Code",
    description:
      "Desenvolvimento de um código limpo, usando as melhores práticas de desenvolvimento do mercado",
  },
  {
    url: "",
    title: "Pixel Perfect",
    description:
      "Meu trabalho como front-end é a codificação de interfaces de alta qualidade, mantendo sempre a fidelidade com o wireframe e prezando pela responsividade",
  },
];

const carouselItemsEnglish = [
  {
    url: "",
    title: "Clean Code",
    description:
      "I develop a Clean Code, caring about the good practices used by the market",
  },
  {
    url: "",
    title: "Pixel Perfect",
    description:
      "My work as a front-end is to codehigh quality interfaces, keeping the fidelity with the wireframe and caring about responsivity",
  },
];

export function Carousel({ locale }: CarouselProps) {
  const { t } = useTranslation("diferenciais");

  return (
    <Background>
      <CarouselBlock></CarouselBlock>
      <Container>
        <CarouselWrapper>
          <SwiperWrapper>
            <h3>{t("especialidades")}</h3>
            <Swiper
              pagination={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {locale === "pt-BR" &&
                carouselItemsPortuguese.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CarouselItem
                      url={item.url}
                      title={item.title}
                      description={item.description}
                    />
                  </SwiperSlide>
                ))}
              {locale === "en" &&
                carouselItemsEnglish.map((item, index) => (
                  <SwiperSlide key={index}>
                    <CarouselItem
                      url={item.url}
                      title={item.title}
                      description={item.description}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </SwiperWrapper>
        </CarouselWrapper>
      </Container>
    </Background>
  );
}
