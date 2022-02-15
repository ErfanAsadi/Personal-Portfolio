import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { keyBy } from "lodash-es";
import { ITheme } from "../theme/ITheme";

const themes = [lightTheme, darkTheme];

export type ThemeNames = "LightTheme" | "DarkTheme";
export type AllThemes = Record<ThemeNames, ITheme>;

export const getThemes = (): AllThemes => keyBy(themes, "name") as AllThemes;
