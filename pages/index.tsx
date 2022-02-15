import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { GetStaticProps, NextPage } from "next";
import { getPageProps } from "$utils/getPageProps";
import { AppPage, PageName } from "$utils/sharedTypes/IApp";

const Home: NextPage<AppPage> = (props) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div>
      <div>
        <StyledPaper elevation={16}> {t("coming-soon")} </StyledPaper>
        <div>
          <Link href="/" locale={router.locale === "en" ? "fa" : "en"} passHref>
            <button>{t("change-locale")}</button>
          </Link>
          <Link href="/sample" passHref>
            <button type="button">{t("to-second-page")}</button>
          </Link>
          <button
            onClick={() => {
              throw new Error();
            }}
          >
            {t("throw-error")}
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const props = await getPageProps(ctx, PageName.Home);
  return {
    props,
  };
};

const StyledPaper = styled(Paper)`
  margin: 0 auto;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  user-select: none;
`;

export default Home;
