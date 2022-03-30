import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TypingText from "./TypingText";
import styled from "@emotion/styled";

export default {
  title: "Atoms / TypingText",
  component: TypingText,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TypingText>;

const Template: ComponentStory<typeof TypingText> = (args) => (
  <Container>
    <TypingText {...args} />
  </Container>
);

export const Primary = Template.bind({});

Primary.args = {
  dynamicTexts: ["Developer.", "Programmer.", "A slave."],
  delay: 1000,
  blinkerDelay: 500,
  infiniteLoop: true,
};

Primary.parameters = {
  layout: "centered",
};

const Container = styled.div`
  width: 320px;
`;
