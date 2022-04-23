import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Skills } from "./Skills";
import styled from "@emotion/styled";

export default {
  title: "Molecules / Skills",
  component: Skills,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = (args: any) => (
  <Container>
    <Skills {...args} />
  </Container>
);

export const SkillsDefault = Template.bind({});

const item = { title: "HTML5", value: 50 };
SkillsDefault.args = {
  title: "Coding Skills",
  skillDetailItem: [item, item],
};

SkillsDefault.parameters = {
  layout: "centered",
} as const;

const Container = styled.div`
  width: 400px;
`;
