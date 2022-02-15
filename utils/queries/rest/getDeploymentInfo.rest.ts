import { DeploymentInfo } from "$pages/api/getDeploymentInfo";
import { useQuery, UseQueryResult } from "react-query";
import { getClientKy, getServerKy } from "$lib/getKy";

export const route = "api/getDeploymentInfo";
export const queryKey = "getDeploymentInfo";

export const getDeploymentInfo = (): Promise<DeploymentInfo> => {
  const ky = getClientKy();
  return ky.get(route).json();
};

export const getDeploymentInfoServer = (): Promise<DeploymentInfo> => {
  const ky = getServerKy();
  return ky.get(route).json();
};

export const useGetDeploymentInfo = (): UseQueryResult<DeploymentInfo> => {
  const result = useQuery(queryKey, getDeploymentInfo, {
    staleTime: 100000,
  });
  return result;
};
