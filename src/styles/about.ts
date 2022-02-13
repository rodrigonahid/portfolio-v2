import styled from "styled-components";
import { ButtonLink } from "./global";

import { Container } from "./grid";

export const AboutWrapper = styled.section`
  background-color: var(--gray-800);
  padding: 15vh 0;
  @media screen and (max-width: 768px) {
    padding: 10vh 0;
  }
`;

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;

  margin: auto 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin: 0 8px;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 2rem;
    letter-spacing: 0.02em;
    color: var(--yellow-500);
    margin-bottom: 32px;
  }
  p {
    color: var(--shape);
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;

    /* or 133% */
    display: flex;
    align-items: center;
  }
  .button-wrapper {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 8px;
  @media screen and (max-width: 768px) {
    margin: 0 0 48px 0;
  }
  .img-wrapper {
    display: block;
    position: relative;

    height: 40vh;
    width: 40vh;
    img {
      border-radius: 8px;
      z-index: 10;
    }
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      top: 8px;
      left: 8px;
      border-radius: 10px;
      background-color: var(--gray-600);
    }
    @media screen and (max-width: 768px) {
      height: 80vw;
      width: 80vw;
    }
  }
`;

export const DownloadButton = styled(ButtonLink)`
  margin-top: 48px;

  .img-wrapper {
    display: flex;
    align-items: center;
  }
`;

export const SocialIcons = styled.div`
  text-align: center;
  h3 {
    color: var(--gray-600);
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 0 6px;
    }
  }
  margin-top: 8vh;
  @media screen and (max-width: 768px) {
    margin: 32px 0;
  }
`;
