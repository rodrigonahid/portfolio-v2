import styled from "styled-components";

export const Section = styled.section`
  background: var(--gray-800);
  height: 70vh;
  padding-bottom: 20vh;

  display: flex;
  align-items: center;
`;

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const HeroContent = styled.div`
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
  max-height: 30vh;
  p {
    color: var(--shape);
    margin-bottom: 0.75rem;
    font-weight: 500;
    font-size: 1.25rem;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;
