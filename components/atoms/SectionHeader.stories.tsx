import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
import { SectionHeader } from "./SectionHeader";
import styled from "@emotion/styled";

export default {
  title: "Atoms / SectionHeader",
  component: SectionHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <Container>
    <SectionHeader {...args} />
  </Container>
);

export const Primary = Template.bind({});

Primary.args = {
  title: "About US",
  icon: <AngrySvg />,
};

Primary.parameters = {
  layout: "centered",
};

const Container = styled.div`
  width: 320px;
`;
