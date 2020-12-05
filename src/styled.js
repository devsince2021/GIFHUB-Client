import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: 24px;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
  }
`;
