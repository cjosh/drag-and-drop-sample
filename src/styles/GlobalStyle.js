import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    #root {
      display: flex;
      padding: 12px;
      .question-list {
        display: flex;
        flex-direction: column;
        width: 50vw;
      }
    }
  }
`;
