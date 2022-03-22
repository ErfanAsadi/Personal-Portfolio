import { GetStaticProps, NextPage } from "next";
import { getPageProps } from "$utils/getPageProps";
import { AppPage, PageName } from "$utils/sharedTypes/IApp";
import Layout from "$components/layouts/Layout";
import styled from "@emotion/styled";
import HomeSvg from "assets/icons/home.svg";
import ResumeSvg from "assets/icons/resume.svg";
import PersonSvg from "assets/icons/person.svg";
import AngrySvg from "assets/icons/angry.svg";
import ContactSvg from "assets/icons/contact.svg";
import { useTranslation } from "react-i18next";
import { WorkProcess } from "$components/molecules/WorkProcess";
import { WorkProcessCard } from "$components/atoms/cards/WorkProcessCard";
import Services from "$components/molecules/Services";
import { SectionHeader } from "$components/atoms/SectionHeader";
import { useRouter } from "next/router";
import Image from "next/image";

const Home: NextPage<AppPage> = (props) => {
  // Libs
  const { t } = useTranslation();
  const router = useRouter();
  const activeId = router.asPath.split("#")[1] ?? "home";

  // Data
  const title = "Erfan Asadi";
  const sideBarProps = {
    title,
    avatar: "/avatar.jpg",
    buttons: [
      {
        id: "home",
        icon: <HomeSvg />,
        title: t("home"),
        href: "#home",
      },
      {
        id: "about",
        icon: <PersonSvg />,
        title: t("about-me"),
        href: "#about",
      },
      {
        id: "resume",
        icon: <ResumeSvg />,
        title: t("resume"),
        href: "#resume",
      },
      {
        id: "contact",
        icon: <ContactSvg />,
        title: t("contact"),
        href: "#contact",
      },
    ],
  };

  const serviceCardData = [
    {
      icon: <AngrySvg />,
      title: "COPYWRITER",
      description:
        "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      icon: <AngrySvg />,
      title: "GAME DEV",
      description:
        "I can design beautiful type faces for both digital and print media. It is a long established fact that a reader will be distracted.",
    },
    {
      icon: <AngrySvg />,
      title: "MANAGEMENT",
      description:
        "I write about web design. It is a long established fact that a reader will be distracted by the readable content.",
    },
    {
      icon: <AngrySvg />,
      title: "PROBLEM SOLVER",
      description:
        "I have strong project management skills. It is a long established fact that a reader will be distracted by the readable content.",
    },
  ];

  return (
    <Layout
      title={title}
      sidebar={{ activeButtonId: activeId, ...sideBarProps }}
    >
      <Container>
        <Section id="home">
          <FullscreenImage src="/images/fullscreen.jpg" layout="fill" />
        </Section>
        <Section id="about">
          <SectionHeader title="about me" icon={<PersonSvg />} />
          <SubSectionHeader>{t("process")}</SubSectionHeader>
          <Services services={serviceCardData} />
          <SubSectionHeader>{t("work-process")}</SubSectionHeader>
          <StyledWorkProcess
            items={new Array(5).fill(WorkProcessCard)}
            lineWidth={50}
          />
          <SubSectionHeader>{t("clients")}</SubSectionHeader>
          <SubSectionHeader>{t("fun-facts")}</SubSectionHeader>
        </Section>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const props = await getPageProps(ctx, PageName.Home);
  return {
    props,
  };
};

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  overflow: hidden;
`;

const Section = styled.div`
  height: 100%;
`;

const FullscreenImage = styled(Image)`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const SubSectionHeader = styled.div`
  width: fit-content;
  min-width: 300px;
  height: 40px;
  line-height: 40px;
  padding: 0 50px;
  background-color: #34a369;
  color: white;
  margin: 90px auto 20px auto;
`;

const StyledWorkProcess = styled(WorkProcess)`
  margin: 40px auto;
  text-align: center;
`;

export default Home;
