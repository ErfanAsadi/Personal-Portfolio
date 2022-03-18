import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
import { Layout } from "./Layout";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

export default {
  title: "Layout / Layout",
  component: Layout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} sidebar={sideBarProps}>
    <Cmp>Section 1</Cmp>
    <Cmp>Section 2</Cmp>
    <Cmp>Section 3</Cmp>
  </Layout>
);

export const Primary = Template.bind({});

const sideBarProps = {
  title: "Erfan Asadi",
  avatar: "/avatar.jpg",
  buttons: [
    { icon: <AngrySvg />, title: "home" },
    { icon: <AngrySvg />, title: "about-me" },
    { icon: <AngrySvg />, title: "resume" },
    { icon: <AngrySvg />, title: "portfolio" },
    { icon: <AngrySvg />, title: "blog" },
    { icon: <AngrySvg />, title: "contact" },
  ],
};

Primary.args = {
  title: "Erfan Asadi",
  sidebar: sideBarProps,
};

Primary.parameters = {
  layout: "fullscreen",
};

const Cmp = styled.div`
  height: 600px;
  font-size: 36px;
  margin: 50px;
  text-align: center;
`;
