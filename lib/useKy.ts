import { Options } from "ky";
import { getClientKy, KyClientInstance } from "./getKy";

export const useKy = (options?: Options): KyClientInstance => {
  const ky = getClientKy(options);
  return ky;
};
