import { atom } from "recoil";

export enum IThemeColor {
  Light = "Light",
  Dark = "Dark",
}

export const themeColorAtom = atom<IThemeColor>({
  key: "themeColor", // unique ID
  default: IThemeColor.Light,
});
