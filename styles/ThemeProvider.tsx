import { createTheme } from "@mui/material/styles";
import { FC, useMemo } from "react";
import { lightTheme } from "./theme/lightTheme";
import { darkTheme } from "./theme/darkTheme";
import { useRecoilValue } from "recoil";
import { themeColorAtom, IThemeColor } from "store/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

export const ThemeProvider: FC = ({ children }) => {
  const themeColor = useRecoilValue(themeColorAtom);
  const theme = themeColor === IThemeColor.Light ? lightTheme : darkTheme;
  const memoizedTheme = useMemo(() => createTheme(theme), [theme]);

  return (
    <EmotionThemeProvider theme={memoizedTheme}>
      {children}
    </EmotionThemeProvider>
  );
};
