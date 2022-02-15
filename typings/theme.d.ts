/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITheme as CustomTheme, ITheme } from "../styles/theme/ITheme";
import { Theme as MUITheme } from "@mui/material/styles";
import "@mui/material";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}

declare module "@mui/react/styles" {
  interface DefaultTheme extends MUITheme {}
  interface Theme extends ITheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "@mui/material" {
  interface Color {
    dark: string;
    light: string;
    main: string;
  }
}
