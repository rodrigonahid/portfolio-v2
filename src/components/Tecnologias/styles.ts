import styled from "styled-components";

export const TecnologiasWrapper = styled.section`
  background: var(--gray-700);
  padding: 5vh 0 20vh;
`;

export const TecnologiasTitle = styled.h2`
  text-align: center;
  color: var(--yellow-500);
  margin-bottom: 32px;
`;

export const ListagemTecnologias = styled.ul`
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    li:nth-child(3n + 2) {
      position: relative;
      top: 10vh;
    }
  }
`;
