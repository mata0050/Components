import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 0;
  }

  p {
    opacity: 1;
    line-height: 1.5;
  }


`;

export default GlobalStyles;
