import React, { useState } from "react";
import Layout from "./layouts/Layout";
import AngrySvg from "assets/icons/angry.svg";
import HomeSvg from "assets/icons/home.svg";
import ResumeSvg from "assets/icons/resume.svg";
import PersonSvg from "assets/icons/person.svg";
import ContactSvg from "assets/icons/contact.svg";
import styled from "@emotion/styled";
import { SectionHeader } from "./atoms/SectionHeader";
import Services from "./molecules/Services";
import { WorkProcess } from "./molecules/WorkProcess";

export default {
  title: "Pages / AboutMe",
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const title = "Erfan Asadi";

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

const workProcessCard = {
  icon: <AngrySvg />,
  title: "Discover",
};

export const AboutMe = () => {
  const sideBarProps = {
    title,
    avatar: "/avatar.jpg",
    buttons: [
      {
        id: "home",
        icon: <HomeSvg />,
        title: "home",
        onClick: () => {
          setActiveId("home");
        },
      },
      {
        id: "about",
        icon: <PersonSvg />,
        title: "about-me",
        onClick: () => {
          setActiveId("about");
        },
      },
      {
        id: "resume",
        icon: <ResumeSvg />,
        title: "resume",
        onClick: () => {
          setActiveId("resume");
        },
      },
      {
        id: "contact",
        icon: <ContactSvg />,
        title: "contact",
        onClick: () => {
          setActiveId("contact");
        },
      },
    ],
  };

  const [activeId, setActiveId] = useState(sideBarProps.buttons[0].id);
  return (
    <Layout
      title={title}
      sidebar={{ activeButtonId: activeId, ...sideBarProps }}
    >
      <Container>
        <SectionHeader title="about me" icon={<AngrySvg />} />
        <SubSectionHeader>SERVICES</SubSectionHeader>
        <Services services={serviceCardData} />
        <SubSectionHeader>WorkProcess</SubSectionHeader>
        <StyledWorkProcess
          items={new Array(5).fill(workProcessCard)}
          lineWidth={50}
        />
        <SubSectionHeader>Clients</SubSectionHeader>
        <SubSectionHeader>Fun Facts</SubSectionHeader>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  overflow: hidden;
`;

const SubSectionHeader = styled.div`
  width: fit-content;
  padding: 5px 50px;
  background-color: #34a369;
  color: white;
  margin: 30px auto 10px auto;
`;

const StyledWorkProcess = styled(WorkProcess)`
  margin: 40px auto;
  text-align: center;
`;

AboutMe.parameters = {
  layout: "fullscreen",
};
