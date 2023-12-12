import { css } from "@emotion/react";

const GlobalStyles = css`
  body, html {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow-y: hidden
  }
`;

export default GlobalStyles;
