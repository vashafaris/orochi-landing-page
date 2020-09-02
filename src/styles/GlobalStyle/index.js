import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-size: 65%;
  }
  
  body {
    font-family: 'Roboto',-apple-system, BlinkMacSystemFont, 'Segoe UI',  'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }
`;

export default GlobalStyle;
