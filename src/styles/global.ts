import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --gray-800: #010409;
        --gray-700: #0D1117;
        --gray-600: #161B22;
        --gray-500: #21262D;
        --gray-300: #747C86;

        --blue-500: #2469E8;
        --blue-400: #58A6FF;

        --yellow-500: #F18F01;

        --green-500: #28A673;

        --shape: #E1E1E6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    a {
        color: var(--shape);
        text-decoration: none;
    }
`;

export const ButtonLink = styled.a`
  background: var(--blue-500);
  min-width: 186px;
  padding: 12px;
  border-radius: 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
  white-space: nowrap;

  filter: drop-shadow(3px 3px 0px rgba(36, 105, 232, 0.2));
  transform: translate(-2px, -2px);
  @media screen and (min-width: 768px) {
    &:hover {
      transform: translate(0);
      filter: none;
    }
    &:active {
      filter: opacity(0.7);
    }
  }
  @media screen and (max-width: 768px) {
    &:active {
      transform: translate(0);
      filter: none;
    }
  }

  span,
  img,
  svg {
    margin-right: 12px;

    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

export const Button = styled.button`
  background: var(--blue-500);
  width: 186px;
  padding: 12px;
  border-radius: 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.04em;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
  white-space: nowrap;

  filter: drop-shadow(3px 3px 0px rgba(36, 105, 232, 0.2));
  transform: translate(-2px, -2px);
  @media screen and (min-width: 768px) {
    &:hover {
      transform: translate(0);
      filter: none;
    }
    &:active {
      filter: opacity(0.7);
    }
  }
  @media screen and (max-width: 768px) {
    &:active {
      transform: translate(0);
      filter: none;
    }
  }

  span,
  img,
  svg {
    margin-right: 12px;

    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;
