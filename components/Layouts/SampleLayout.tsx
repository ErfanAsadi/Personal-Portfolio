import styled from "@emotion/styled";
import { FC } from "react";
import { SampleLayoutProps } from "./SampleLayout/ISampleLayout";
import { Media } from "styles/theme/Media";
import VercelSvg from "$assets/icons/vercel.svg";
import { useTranslation } from "react-i18next";

export const SampleLayout: FC<SampleLayoutProps> = (props) => {
  const { mobileView, desktopView } = props;
  const { t } = useTranslation(["common"]);
  return (
    <Container>
      <Main>
        <Media at="Mobile">{mobileView}</Media>
        <Media greaterThanOrEqual="Mobile">{desktopView}</Media>
        {/* <Media greaterThan="Mobile">{tabletView}</Media> */}
      </Main>
      <Footer>
        <a href={"#footerLink"} target="_self" rel="noopener noreferrer">
          {t("powered-by")}
          {/* {footerTitle} */}
          <LogoContainer>
            <VercelSvg width={72} height={16} />
          </LogoContainer>
        </a>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 2rem;
`;

const LogoContainer = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

export default SampleLayout;
