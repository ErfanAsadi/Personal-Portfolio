/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { createMedia } from "@artsy/fresnel";

/// Mui Breakpoints -> https://mui.com/customization/breakpoints/ with a small change
export enum BreakPoints {
  XSmall = 320,
  Small = 600,
  Medium = 900,
  Large = 1200,
  XLarge = 1536,
}

const AppMedia = createMedia({
  breakpoints: BreakPoints,
});

export const { MediaContextProvider, Media } = AppMedia;
export const mediaStyles = AppMedia.createMediaStyle();
