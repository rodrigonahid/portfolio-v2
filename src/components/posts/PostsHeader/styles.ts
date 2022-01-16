import styled from "styled-components";

export const PostHeaderWrapper = styled.section`
  background: var(--gray-800);
  height: 30vh;
`;

export const Content = styled.div`
  display: block;
  padding-top: 7%;
  @media screen and (max-width: 768px) {
    padding-top: 10%;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 24px;
    letter-spacing: 0.02em;

    color: var(--yellow-500);
  }
`;
