import styled from "styled-components";

export const HomePostsWrapper = styled.section`
  background: var(--gray-800);
  padding: 5vh;
`;

export const PostsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.7rem;
    letter-spacing: 0.04em;
    color: var(--yellow-500);
  }

  a {
    background: var(--blue-500);
    width: 186px;
    padding: 12px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.8);
    }

    span {
      margin-right: 12px;

      font-style: normal;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 1.5rem;
    }
  }
`;
