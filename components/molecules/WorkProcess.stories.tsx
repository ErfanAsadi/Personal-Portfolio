import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";

import { WorkProcess } from "./WorkProcess";

export default {
  title: "Molecules/WorkProcess",
  component: WorkProcess,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WorkProcess>;

const Template: ComponentStory<typeof WorkProcess> = (args) => (
  <WorkProcess {...args} />
);

export const Primary = Template.bind({});

const workProcessCard = {
  icon: <AngrySvg />,
  title: "Discover",
};
Primary.args = {
  items: new Array(5).fill(workProcessCard),
  lineWidth: 25,
};

Primary.parameters = {
  layout: "centered",
};
