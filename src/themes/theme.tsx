import { ThemeProvider } from "styled-components";

const fontSizes: any = [16, 22, 32];

fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const colorPrimary = '#fefefefe';
const colorSecondary = '#70AE6E';
const colorTertiary = '#599557';
const colorText = '#7A7A7A';
// const colorAccent = '#599557';

export const theme = {
  fontSizes,
  colors: {
    colorPrimary,
    colorSecondary,
    colorTertiary,
    colorText,
    // colorAccent,
  }
}

export type Theme = typeof theme;

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeProviderComponent: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
