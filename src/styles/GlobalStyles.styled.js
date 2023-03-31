import { createGlobalStyle } from 'styled-components';
import { theme } from 'styles/theme';

const GlobalStyled = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    
    font-style: normal;
    font-family: ${theme.fonts.body};
    background: ${theme.colors.background};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0; padding: 0;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export { GlobalStyled };
