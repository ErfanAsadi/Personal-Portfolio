/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { createMedia } from "@artsy/fresnel";

// 320px — 480px: Mobile devices.
// 481px — 768px: iPads, Tablets.
// 769px — 1024px: Small screens, laptops.
// 1025px — 1200px: Desktops, large screens.
// 1201px and more — Extra large screens, TV.

export enum Breakpoints {
  Mobile = 480,
  Tablet = 768,
  Desktop = 1024,
  LargeDesktop = 1200,
}

const AppMedia = createMedia({
  breakpoints: Breakpoints,
});

export const { MediaContextProvider, Media } = AppMedia;
export const mediaStyles = AppMedia.createMediaStyle();
