import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    font-size: 24px;
  }

  body {
    width: 1200px;
    height: 100vh;
    margin: 0px auto;
    overflow-y: scroll;
    background-color: ${({ theme }) => theme.palette.BLACK};
    color: ${({ theme }) => theme.palette.WHITE};
    font-family: Helvetica, Sans-Serif;
    font-size: 16px;
    font-weight: normal;
  }
`;
