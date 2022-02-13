import styled from "styled-components";
import { ButtonLink } from "../../../styles/global";

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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  & > div:first-child{
    grid-column-start: 1;
    grid-column-end: 4;
  }
  }
  .button-link {
    a {
      margin-left: auto;
      margin-top: 10px;
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
  @media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`;

export const VerTudoButton = styled(ButtonLink)``;
