import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    background: #f8f9fd;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  #root {
    padding: 16px;
  }

  button {
    cursor: pointer;
  }

  .modali,
  .modali-body {
    background: transparent !important;
  }

  .modali-open {
    padding-right: 0 !important;
  }
`;
