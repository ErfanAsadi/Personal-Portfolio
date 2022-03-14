import SampleLayout from "$components/Layouts/SampleLayout";
import { Sample } from "$components/Sample";
import { initializeReactQuery } from "$lib/initializeReactQuery";
import { getPageProps } from "$utils/getPageProps";
import {
  getDeploymentInfoServer,
  useGetDeploymentInfo,
} from "$utils/queries/rest/getDeploymentInfo.rest";
import { Button } from "@mui/material";
import { Button as Button2 } from "$components/Button";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { dehydrate } from "react-query";
import { useSetRecoilState } from "recoil";
import { IThemeColor, themeColorAtom } from "store/theme";
import { AppPage, PageName } from "../utils/sharedTypes/IApp";

const SamplePage: NextPage<AppPage> = (props) => {
  const setThemeColor = useSetRecoilState(themeColorAtom);
  const { t } = useTranslation("common");

  const toggleThemeColor = () =>
    setThemeColor((prev) =>
      prev === IThemeColor.Light ? IThemeColor.Dark : IThemeColor.Light
    );

  // ? sample prefetched query
  // ? it is already prefetched in the server side and will be refetched after staleTime

  const result = useGetDeploymentInfo();

  // eslint-disable-next-line no-console
  console.log("result: ", result);

  return (
    <SampleLayout
      desktopView={
        <Fragment>
          <Button2 title="click me" href="/about" />
          <Sample />
          <hr />
          <p>{"Desktop"}</p>
          <p>{result.data?.title}</p>
          <p>{result.data?.footerHref}</p>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">
              {t("go-back")}
            </Button>
          </Link>

          <Button variant="contained" color="secondary">
            {t("sample:mui-button")}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleThemeColor}
          >
            {t("sample:change-theme")}
          </Button>
        </Fragment>
      }
      // tabletView={<Fragment>{t("Hello tablet!")}</Fragment>}
      mobileView={
        <Fragment>
          <Sample />
          <hr />
          <p>{"Mobile"}</p>
          <p>{result.data?.title}</p>
          <p>{result.data?.footerHref}</p>
          <Link href="/" passHref>
            <Button variant="contained" color="primary">
              {t("go-back")}
            </Button>
          </Link>

          <Button variant="contained" color="secondary">
            {t("sample:mui-button")}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleThemeColor}
          >
            {t("sample:change-theme")}
          </Button>
        </Fragment>
      }
    />
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const props = await getPageProps(ctx, PageName.Sample);
  const queryClient = initializeReactQuery();

  await queryClient.prefetchQuery("getDeploymentInfo", getDeploymentInfoServer);

  return {
    props: {
      ...props,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default SamplePage;
