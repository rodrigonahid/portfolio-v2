import styled from "styled-components";

export const TecnologiasWrapper = styled.section`
  background: var(--gray-700);
  padding: 10vh 0 20vh;
  margin-top: -1px;

  position: relative;
`;

export const TecnologiasTitle = styled.h2`
  text-align: center;
  color: var(--yellow-500);
  margin-bottom: 4rem;
`;

export const ListagemTecnologiasDesktop = styled.ul`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  li {
    list-style: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 767px) {
    li:nth-child(3n + 2) {
      position: relative;
      top: 10vh;
    }
  }
`;
export const ListagemTecnologiasMobile = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;
