import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";

import { WorkProcessCard } from "./WorkProcessCard";
import styled from "@emotion/styled";

export default {
  title: "Atoms/WorkProcessCard",
  component: WorkProcessCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof WorkProcessCard>;

const Template: ComponentStory<typeof WorkProcessCard> = (args) => (
  <WorkProcessCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  icon: <AngrySvg width={35} height={35} />,
  title: "Discover",
};

Primary.parameters = {
  layout: "centered",
};
