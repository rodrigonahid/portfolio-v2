import {
  Background,
  CarouselBlock,
  CarouselWrapper,
  SwiperWrapper,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { CarouselItem } from "../CarouselItem";
import { Container } from "../../styles/grid";

SwiperCore.use([Pagination]);

export function Carousel() {
  return (
    <Background>
      <CarouselBlock></CarouselBlock>
      <Container>
        <CarouselWrapper>
          <h3>Meus diferenciais</h3>
          <SwiperWrapper>
            <Swiper pagination={true} className="mySwiper">
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
