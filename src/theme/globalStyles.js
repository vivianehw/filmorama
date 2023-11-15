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

    ::-webkit-scrollbar {
      width: 20px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
  }
`;

export default GlobalStyles;
