import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
import { LayoutButton } from "./LayoutButton";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Atoms/Button/LayoutButton",
  component: LayoutButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LayoutButton>;

const Template: ComponentStory<typeof LayoutButton> = (args) => (
  <LayoutButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  icon: <AngrySvg />,
  title: "Vincet Wood",
};

Primary.parameters = {
  layout: "centered",
};
