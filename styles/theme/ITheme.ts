import { ThemeOptions } from "@mui/material";

interface CustomAttr {
  name: string;
}

export type ITheme = ThemeOptions & CustomAttr;
