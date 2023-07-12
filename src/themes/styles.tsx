import React, { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Theme, theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.colorPrimary};
  }
`;

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};


