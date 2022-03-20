import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Progressbar } from "./Progressbar";
import styled from "@emotion/styled";

export default {
  title: "Atoms / Progressbar",
  component: Progressbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = (args: any) => (
  <Container>
    <Progressbar {...args} />
  </Container>
);

export const ProgressbarDefault = Template.bind({});

ProgressbarDefault.args = {
  title: "Progressbar",
  value: 50,
} as const;

ProgressbarDefault.parameters = {
  layout: "centered",
} as const;

const Container = styled.div`
  width: 300px;
  height: 20px;
`;
