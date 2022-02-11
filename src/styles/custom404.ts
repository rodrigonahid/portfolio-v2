import styled from "styled-components";

export const CustomWrapper = styled.div`
  height: 80vh;
  background-color: var(--gray-800);

  display: flex;
  align-items: center;

  div {
    text-align: center;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 2rempx;
    letter-spacing: 0.02em;

    margin-bottom: 32px;
    color: var(--yellow-500);
  }
  .img-wrapper {
    position: relative;
    display: block;
    height: 20vw;
    width: 40vw;
    margin: 0 auto;
    @media screen and(max-width: 768px) {
      height: 40vw;
      width: 80vw;
    }
  }
`;
