import styled from "styled-components";

export const CarouselWrapper = styled.div`
  margin: 0 20px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: -5vh;

  background: var(--gray-700);
  padding: 16px 24px;
  border: 1px solid var(--gray-500);
  border-radius: 8px;

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
