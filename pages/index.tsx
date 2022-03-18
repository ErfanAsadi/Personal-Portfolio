import { GetStaticProps, NextPage } from "next";
import { getPageProps } from "$utils/getPageProps";
import { AppPage, PageName } from "$utils/sharedTypes/IApp";
import Layout from "$components/layouts/Layout";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import AngrySvg from "assets/icons/angry.svg";

const Home: NextPage<AppPage> = (props) => {
  const { t } = useTranslation();
  const title = "Erfan Asadi";
  const sideBarProps = {
    title,
    avatar: "/avatar.jpg",
    buttons: [
      { icon: <AngrySvg />, title: t("home") },
      { icon: <AngrySvg />, title: t("about-me") },
      { icon: <AngrySvg />, title: t("resume") },
      { icon: <AngrySvg />, title: t("portfolio") },
      { icon: <AngrySvg />, title: t("blog") },
      { icon: <AngrySvg />, title: t("contact") },
    ],
  };

  return (
    <Layout title={title} sidebar={sideBarProps}>
      <Message>{t("star-shine")}</Message>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const props = await getPageProps(ctx, PageName.Home);
  return {
    props,
  };
};

const Message = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 300px;
  font-size: 80px;
  color: #0f0704;
  text-shadow: 32px 34px 11px rgba(15, 7, 4, 0.25);
`;

export default Home;
