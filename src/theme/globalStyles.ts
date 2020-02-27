import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    outline: none;
    border: none;
    border-radius: 0;
  }
`;
