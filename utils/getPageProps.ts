import { depConfig } from "$pages/api/getDeploymentInfo";
import { PageName } from "./sharedTypes/IApp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { getPagePropsByName } from "./getPagePropsByName";

export const getPageProps = async (
  ctx: GetStaticPropsContext,
  pageName: PageName
): Promise<any> => {
  const specificPageProps = getPagePropsByName(pageName);

  const i18nProps = await serverSideTranslations(
    ctx.locale ?? "en",
    specificPageProps.nameSpaces
  );
  const pageTransitionProps = specificPageProps.transition;

  return {
    ...i18nProps,
    pageTransitionProps,
    deploymentConfigs: depConfig,
  };
};
