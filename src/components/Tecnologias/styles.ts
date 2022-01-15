import styled from "styled-components";

export const TecnologiasWrapper = styled.section`
  background: var(--gray-700);
  padding: 10vh 0 20vh;
  margin-top: -1px;
`;

export const TecnologiasTitle = styled.h2`
  text-align: center;
  color: var(--yellow-500);
  margin-bottom: 4rem;
`;

export const ListagemTecnologias = styled.ul`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  position: relative;

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;

    overflow-x: auto;
    white-space: nowrap;

    &::after {
      content: "";

      position: fixed;
      right: 0;
      top: 0;

      height: 20px;
      width: 20px;

      background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0) 0%,
        var(--gray-700) 100%
      );
    }
    &::before {
      content: "";

      position: fixed;
      right: left;
      top: 0;

      height: 20px;
      width: 20px;

      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0) 0%,
        var(--gray-700) 100%
      );
    }
  }

  @media screen and (min-width: 768px) {
    li:nth-child(3n + 2) {
      position: relative;
      top: 10vh;
    }
  }
`;
