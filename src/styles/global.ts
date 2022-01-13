import { createGlobalStyle } from "styled-components";

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
