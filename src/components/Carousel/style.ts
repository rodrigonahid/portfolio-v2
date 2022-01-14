import styled from "styled-components";
import { Container } from "../../styles/grid";

export const CarouselBlock = styled.div`
  background: var(--gray-800);
  height: 30vh;

  @media screen and (min-height: 600px) {
    height: 20vh;
  }
`;

export const Background = styled.div`
  background: var(--gray-700);
`;

export const CarouselWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px 24px;
  margin-top: -20vh;

  background: var(--gray-700);

  border: 1px solid var(--gray-500);
  border-radius: 8px;

  color: var(--shape);

  @media screen and (min-height: 600px) {
    margin-top: -10vh;
  }

  h3 {
    color: var(--gray-300);
    text-align: center;
    margin-bottom: 1.25rem;
  }
`;

export const SwiperWrapper = styled.div`
  .swiper-pagination {
    bottom: 0px !important;
  }
`;
