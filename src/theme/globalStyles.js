import { css } from "@emotion/react";

const GlobalStyles = css`
  body, #root {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
