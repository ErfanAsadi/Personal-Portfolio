import kyServer, { Options } from "ky-universal";
import ky from "ky";

const options: Options = {
  prefixUrl: process.env.DEPLOYMENT_ADDRESS,
};

export type KyClientInstance = typeof ky;
export type KyServerInstance = typeof kyServer;

const getServerKy = (customOptions?: Partial<Options>): KyServerInstance => {
  const serverKy = kyServer.create({ ...options, ...customOptions });
  return serverKy;
};

const getClientKy = (customOptions?: Partial<Options>): KyClientInstance => {
  const clientKy = ky.create({ ...options, ...customOptions });
  return clientKy;
};

export { getServerKy, getClientKy };
