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
import { useRouter } from "next/router";
import Home from "$components/organisms/Home";
import About from "$components/organisms/About";
import Resume from "$components/organisms/Resume";
import Contact from "$components/organisms/Contact";

const HomePage: NextPage<AppPage> = (props) => {
  /** Libs */
  const { t } = useTranslation();
  const router = useRouter();
  const activeId = router.asPath.split("#")[1] ?? "home";

  /** Data */
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
  const workProcessItems = [
    {
      icon: <AngrySvg />,
      title: "Discover",
    },
    {
      icon: <AngrySvg />,
      title: "IDEA",
    },
    {
      icon: <AngrySvg />,
      title: "DESIGN",
    },
    {
      icon: <AngrySvg />,
      title: "DEVELOP",
    },
    {
      icon: <AngrySvg />,
      title: "TEST",
    },
    {
      icon: <AngrySvg />,
      title: "LAUNCH",
    },
  ];
  const activityCardStoryProps = {
    title: "WORK HISTORY",
    icon: <AngrySvg />,
    histories: [
      {
        title: "Front-end Developer",
        subTitle: "GOOGLE INC.",
        description:
          "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
        date: "DEC 2013 - CURRENT",
      },
      {
        title: "EXCLUSIVE AUTHOR",
        subTitle: "ENVATO INC.",
        description:
          "I am an Elite Author at Envato. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
        date: "2006",
      },
    ],
  };
  const codingSkillsProps = {
    title: "CODING SKILLS",
    items: [
      { title: "HTML", value: 90 },
      { title: "CSS", value: 70 },
      { title: "JS", value: 60 },
    ],
  };
  const designSkillsProps = {
    title: "DESIGN SKILLS",
    items: [
      { title: "PHOTOSHOP", value: 90 },
      { title: "ILLUSTRATOR", value: 40 },
      { title: "INDESIGN", value: 60 },
      { title: "XD", value: 30 },
    ],
  };
  const skills = [codingSkillsProps, designSkillsProps];
  const item = {
    title: "Vincet Wood",
    info: "CEO/GRAVITY INC.",
    description:
      "He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant",
    image: "/avatar.jpg",
  };
  const commentsProps = { title: "Comments", items: [item, item] };

  return (
    <Layout
      title={title}
      sidebar={{ activeButtonId: activeId, ...sideBarProps }}
    >
      <Container>
        <Home id="home" image="/images/fullscreen.jpg" />
        <Section id="about" $backgroundColor="#ECF0F0">
          <Content>
            <About
              services={serviceCardData}
              workProcessItems={workProcessItems}
            />
          </Content>
        </Section>
        <Section id="resume" $backgroundColor="#EBF0DF">
          <Content>
            <Resume
              activities={[activityCardStoryProps, activityCardStoryProps]}
              skills={skills}
              comments={commentsProps}
            />
          </Content>
        </Section>
        <Section id="contact" $backgroundColor="#EBF0DF">
          <Content>
            <Contact />
          </Content>
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
  height: 100%;
  margin: 0 auto;
  text-align: center;
  z-index: 0;
`;

interface SectionProps {
  $backgroundColor: string;
}

const Section = styled.div<SectionProps>`
  padding: 100px 0;
  background-color: ${(props) => props.$backgroundColor};
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default HomePage;
