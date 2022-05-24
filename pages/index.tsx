import { GetStaticProps, NextPage } from "next";
import { getPageProps } from "$utils/getPageProps";
import { AppPage, PageName } from "$utils/sharedTypes/IApp";
import Layout from "$components/layouts/Layout";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Home from "$components/organisms/Home";
import About from "$components/organisms/About";
import Resume from "$components/organisms/Resume";
import generateCMSImageUrl from "$utils/generateCMSImageUrl";
import { InView } from "react-intersection-observer";

const HomePage: NextPage<AppPage> = ({ pageData }) => {
  /** Libs */
  const router = useRouter();

  const activeId = router.asPath.split("#")[1] ?? "home";

  /** Data */
  const data = pageData.data.attributes;
  const {
    firstName,
    lastName,
    avatar,
    services,
    workProcesses,
    activity,
    comments,
    skill,
  } = data;

  const title = `${firstName} ${lastName}`;
  const sideBarProps = {
    title,
    avatar: generateCMSImageUrl(avatar.data[0].attributes.url),
    activeButtonId: activeId,
    onButtonClick: () => null,
  };

  const servicesData = services.map((serviceData: any) => ({
    title: serviceData.title,
    description: serviceData.description,
    icon: generateCMSImageUrl(serviceData.icon.data[0].attributes.url),
  }));

  const workProcessItems = workProcesses.map((workProcessItem: any) => ({
    title: workProcessItem.title,
    icon: generateCMSImageUrl(workProcessItem.icon.data.attributes?.url),
  }));

  if (activity) {
    activity.map((item: any) =>
      item.icon.data?.attributes?.url
        ? (item.icon = generateCMSImageUrl(item.icon.data?.attributes?.url))
        : item
    );
  }

  if (comments) {
    comments.items.map((item: any) =>
      item.image?.data?.attributes?.url
        ? (item.image = generateCMSImageUrl(item.image.data.attributes.url))
        : item
    );
  }

  return (
    <Layout title={title} sidebar={sideBarProps}>
      <Container>
        <InView
          threshold={0.1}
          onChange={(inView) => {
            if (inView) router.push("#home");
          }}
        >
          <Home
            id="home"
            image={generateCMSImageUrl(data.homeMedia.data.attributes.url)}
          />
        </InView>
        <InView
          threshold={0.1}
          onChange={(inView) => {
            if (inView) router.push("#about");
          }}
        >
          <Section id="about" $backgroundColor="#ECF0F0">
            <Content>
              <About
                services={servicesData}
                workProcessItems={workProcessItems}
              />
            </Content>
          </Section>
        </InView>
        <InView
          threshold={0.1}
          onChange={(inView) => {
            if (inView) router.push("#resume");
          }}
        >
          <Section id="resume" $backgroundColor="#EBF0DF">
            <Content>
              <Resume
                activities={activity}
                skills={skill}
                comments={comments}
              />
            </Content>
          </Section>
        </InView>
        {/* <Section id="contact" $backgroundColor="#EBF0DF">
          <Content>
            <Contact />
          </Content>
        </Section> */}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const props = await getPageProps(ctx, PageName.Home);
  return {
    props,
    revalidate: 60,
  };
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  z-index: 0;
  scroll-behavior: smooth;
`;

interface SectionProps {
  $backgroundColor: string;
}

const Section = styled.div<SectionProps>`
  min-height: 110vh;
  padding: 100px 0;
  background-color: ${(props) => props.$backgroundColor};
`;

const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export default HomePage;
