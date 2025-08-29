import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";
import { Theme } from "../models/theme";

export const GlobalStyle = createGlobalStyle<{ theme?: Theme }>`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    transition: background-color 0.2s, color 0.2s;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    color: ${(props) => props.theme.colors.textPrimary};
    padding: 50px 0 0 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.429;
  }

  .title {
    color: ${(props) => props.theme.colors.textSecondary};
    text-align: center;
  }

  .doneTask {
    margin-top: 80px;
  }

  .counterOfDoneTask {
    color: ${(props) => props.theme.colors.success};
  }

  .doneList {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .clearDoneTask {
    height: 40px;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.textPrimary};
    transition: all 0.2s ease-in-out;
  }

  .clearDoneTask:hover {
    opacity: 0.85;
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.accent};
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
