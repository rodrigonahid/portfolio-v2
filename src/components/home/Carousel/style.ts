import styled from "styled-components";
import { Container } from "../../../styles/grid";

export const CarouselBlock = styled.div`
  background: var(--gray-800);
  height: 20vh;
  margin-top: -1px;
`;

export const Background = styled.div`
  background: var(--gray-700);
`;

export const CarouselWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 250px;
  padding: 16px 0;

  margin-top: -13vh;

  position: relative;
  z-index: 10;

  background: var(--gray-700);

  border: 1px solid var(--gray-500);
  border-radius: 8px;

  color: var(--shape);

  // @media screen and (min-height: 600px) {
  // }

  h3 {
    color: var(--gray-300);
    text-align: center;
    margin-bottom: 1.25rem;
  }
`;

export const SwiperWrapper = styled.div`
  position: relative;
  height: 100%;
  .swiper.swiper-initialized.swiper-horizontal {
    height: 80%;
  }
  .swiper-pagination {
    bottom: 0px !important;
  }
  .swiper-pagination-bullet {
    background-color: var(--gray-300) !important;
    opacity: 1 !important;
    &-active {
      background-color: var(--blue-500) !important;
    }
  }
`;
