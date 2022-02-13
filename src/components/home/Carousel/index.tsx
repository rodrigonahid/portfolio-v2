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

export function Carousel() {
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
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
              <SwiperSlide>
                <CarouselItem />
              </SwiperSlide>
            </Swiper>
          </SwiperWrapper>
        </CarouselWrapper>
      </Container>
    </Background>
  );
}
