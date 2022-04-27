import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
`;

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
