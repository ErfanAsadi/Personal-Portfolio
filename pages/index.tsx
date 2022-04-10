import { GetStaticProps, NextPage } from "next";
import { getPageProps } from "$utils/getPageProps";
import { AppPage, PageName } from "$utils/sharedTypes/IApp";
import Layout from "$components/layouts/Layout";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Home from "$components/organisms/Home";
import About from "$components/organisms/About";
import Resume from "$components/organisms/Resume";
import Contact from "$components/organisms/Contact";

const HomePage: NextPage<AppPage> = (props) => {
  /** Libs */
  const router = useRouter();
  const activeId = router.asPath.split("#")[1] ?? "home";
  const { pageData } = props;

  /** Data */
  const {
    firstName,
    lastName,
    activities,
    workProcessItems,
    serviceCardData,
    skills,
    sideBarProps,
    commentsProps,
  } = pageData;

  return (
    <Layout
      title={`${firstName} ${lastName}`}
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
              activities={activities}
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
