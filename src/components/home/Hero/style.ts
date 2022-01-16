import styled from "styled-components";
import { Container } from "../../../styles/grid";

export const Section = styled.section`
  background: var(--gray-800);
`;

export const HeroWrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 55vh;
  padding-top: 5vh;
  padding-bottom: 2rem;

  @media screen and (max-height: 600px) {
    min-height: 70vh;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }

  p,
  h1 {
    color: var(--shape);
  }

  p {
    margin-bottom: 0.75rem;
    font-weight: 500;
    font-size: 1.25rem;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  h1 {
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 2.5rem;
  }

  h2 {
    color: var(--yellow-500);
  }
`;

export const HeroImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  p {
    color: var(--shape);
    margin-bottom: 0.75rem;
    font-weight: 500;
    font-size: 1.25rem;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  .imageWrapper {
    position: relative;
    height: 40vh;
  }
`;
