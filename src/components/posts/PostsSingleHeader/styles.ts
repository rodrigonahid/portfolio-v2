import styled from "styled-components";

export const PostSingleWrapper = styled.section`
  background: var(--gray-800);
  min-height: 40vh;
  padding-top: 64px;
`;

export const PostSingleHeaderWrapper = styled.div`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 24px;

    letter-spacing: 0.02em;

    color: var(--shape);
    margin-bottom: 16px;
  }
  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: var(--yellow-500);
    span {
      color: var(--blue-400);
      margin-left: 8px;
    }
  }
`;
