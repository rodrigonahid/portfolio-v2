import styled from "styled-components";

export const HomePostsWrapper = styled.section`
  background: var(--gray-800);
  padding: 5vh 0;
`;

export const PostsTitle = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 32px;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.7rem;
    letter-spacing: 0.04em;
    color: var(--yellow-500);
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  a {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const ItemRow = styled.div`
  .rows {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 -5px;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  a {
    margin-left: auto;
    margin-top: 10px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const VerTudoButton = styled.a`
  background: var(--blue-500);
  width: 186px;
  padding: 12px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s filter;
  white-space: nowrap;

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
`;
