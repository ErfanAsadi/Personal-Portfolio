import { QueryClient } from "react-query";

export const initializeReactQuery = (): QueryClient => {
  const client = new QueryClient();

  return client;
};
