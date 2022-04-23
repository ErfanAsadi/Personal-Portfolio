import { DeploymentInfo } from "$pages/api/getDeploymentInfo";
import { useQuery, UseQueryResult } from "react-query";
import { getClientKy, getServerKy } from "$lib/getKy";
import qs from 'qs';

const query = qs.stringify({
  populate: [
    'avatar',
    'homeMedia',
    'services',
    'services.icon',
    'workProcesses',
    'workProcesses.icon',
    "activity",
    "activity.icon",
    "activity.histories",
    "skill",
    "skill.skillDetailItem",
    "comments",
    "comments.items.image"
  ],
}, {
  encodeValuesOnly: true,
});

export const route = `main-site-info?${query}`;
export const queryKey = "fetchMainSiteInfo";

export const fetchMainSiteInfo = (): Promise<DeploymentInfo> => {
  const ky = getClientKy();
  return ky.get(route).json();
};

export const fetchMainSiteInfoServer = (locale = "en"): Promise<any> => {
  const apiUrl = `${process.env.CMS_ADDRESS}/api`;

  const ky = getServerKy({
    prefixUrl: apiUrl,
    headers: {
      Authorization: `Bearer ${process.env.CMS_READ_API_TOKEN}`,
    },
  });
  return ky.get(`${route}&locale=${locale}`).json();
};

export const useFetchMainSiteInfo = (): UseQueryResult<DeploymentInfo> => {
  const result = useQuery(queryKey, fetchMainSiteInfo, {
    staleTime: 100000,
  });
  return result;
};
