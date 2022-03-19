import { i18n } from "./i18next.js";
import * as configConstant from "../configs/constants.config";
import { FC, useCallback, useMemo } from "react";
import { languageDirections } from "../utils/hooks/localeDirections";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { withThemesProvider, DEFAULT_SETTINGS } from "themeprovider-storybook";
import { lightTheme } from "../styles/theme/lightTheme";
import { darkTheme } from "../styles/theme/darkTheme";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { ITheme } from "../styles/theme/ITheme.js";
import * as NextImage from "next/image";
import { backgrounds } from "./previewData";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});

const { i18nConstants } = configConstant;
export const parameters = {
  i18n,
  locale: i18nConstants.defaultLocale,
  locales: i18nConstants.localeNames,
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds,
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const ThemeProvider: FC<any> = ({ theme, children }) => {
  const selectedTheme = theme.name === lightTheme.name ? lightTheme : darkTheme;
  const memoizedTheme: ITheme = useMemo(
    () => createTheme(selectedTheme),
    [selectedTheme]
  );

  return <MuiThemeProvider theme={memoizedTheme}>{children}</MuiThemeProvider>;
};

export const decorators = [
  withThemesProvider([lightTheme, darkTheme], DEFAULT_SETTINGS, (props) => (
    <ThemeProvider theme={props.theme}>{props.children}</ThemeProvider>
  )),
  (Story, context) => {
    const dir = languageDirections[context.globals.locale];
    const memoized = useCallback(() => <div dir={dir}>{Story()}</div>, [dir]);
    return memoized();
  },
];
