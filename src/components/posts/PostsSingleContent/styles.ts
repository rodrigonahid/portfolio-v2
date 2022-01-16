import styled from "styled-components";

export const PostsSingleContentWrapper = styled.div`
  background: var(--gray-700);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  top: -25vh;

  @media screen and (max-height: 850px) {
    top: -20vh;
  }
`;

export const PostSingleHeaderContent = styled.div`
  position: relative;
  top: -20vh;

  h1,
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.1rem;

    color: var(--blue-400);
    margin: 16px 0 36px;
  }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2rem;

    color: var(--blue-400);
    margin: 16px 0 28px;
  }
  h4,
  h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.5rem;

    color: var(--green-500);
    margin: 16px 0 28px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 19px;

    color: #e1e1e6;
    margin-bottom: 18px;
  }
`;
