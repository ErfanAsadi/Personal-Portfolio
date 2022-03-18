import { BreakPoints } from "./Media";

export const device = {
  XSmall: `(max-width: ${BreakPoints.XSmall}px)`,
  Small: `(min-width: ${BreakPoints.XSmall + 1}px) and (max-width: ${
    BreakPoints.Small
  }px)`,
  Medium: `(min-width: ${BreakPoints.Small + 1}px) and (max-width: ${
    BreakPoints.Medium
  }px)`,
  Large: `(min-width: ${BreakPoints.Medium + 1}px) and (max-width: ${
    BreakPoints.Large
  }px)`,
  XLarge: `(min-width: ${BreakPoints.Large + 1}px) and (max-width: ${
    BreakPoints.XLarge
  }px)`,
  XXLarge: `(min-width: ${BreakPoints.XLarge + 1}px)`,
};

export const below = {
  Small: `(max-width: ${BreakPoints.XSmall}px)`,
  Medium: `(max-width: ${BreakPoints.Small}px)`,
  Large: `(max-width: ${BreakPoints.Medium}px)`,
  Xlarge: `(max-width: ${BreakPoints.Large}px)`,
  XXLarge: `(max-width: ${BreakPoints.XLarge}px)`,
};

export const above = {
  XSmall: `(min-width: ${BreakPoints.XSmall + 1}px)`,
  Small: `(min-width: ${BreakPoints.Small + 1}px)`,
  Medium: `(min-width: ${BreakPoints.Medium + 1}px)`,
  Large: `(min-width: ${BreakPoints.Large + 1}px)`,
  XLarge: `(min-width: ${BreakPoints.XLarge + 1}px)`,
};
