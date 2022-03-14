import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
import { Sidebar } from "./Sidebar";
import styled from "@emotion/styled";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Molecules / Sidebar  ",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Container>
    <Sidebar {...args} />
  </Container>
);

export const Primary = Template.bind({});

Primary.args = {
  avatar: "/avatar.jpg",
  buttons: [
    { icon: <AngrySvg />, title: "HOME" },
    { icon: <AngrySvg />, title: "ABOUT ME" },
    { icon: <AngrySvg />, title: "RESUME" },
    { icon: <AngrySvg />, title: "PORTFOLIO" },
    { icon: <AngrySvg />, title: "BLOG" },
    { icon: <AngrySvg />, title: "CONTACT" },
  ],
};

Primary.parameters = {
  layout: "centered",
};

const Container = styled.div`
  height: 100vh;
  width: 180px;
`;
