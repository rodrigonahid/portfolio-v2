import styled from "styled-components";

import { Container } from "./grid";

export const AboutWrapper = styled.section`
  
  background-color: var(--gray-800);
  padding: 15vh 0;
  @media screen and (max-width: 768px){
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
  @media screen and (max-width: 768px){
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
  @media screen and (max-width: 768px){
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

export const DownloadButton = styled.a`
  display: inline-block;

  background: var(--blue-500);

  padding: 12px 36px;
  border-radius: 8px;

  transition: 0.2s;
  cursor: pointer;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;

  color: var(--shape);
  svg {
    margin-right: 12px;
  }

  &: hover {
    &:hover {
      filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.25098)) brightness(0.9);
      transform: translate(-2px, -2px);
    }
  }
  span {
    margin-left: 14px;
  }
  margin-top: 48px;
  @media screen and (max-width: 768px){
  margin-top: 36px;
  width: 100%;
  }
`;

export const SocialIcons = styled.div`
  text-align: center;
  h3 {
    color: var(--gray-700);
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      margin: 0 6px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 32px 0;
  }
`;
