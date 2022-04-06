import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WorkProcessCard } from "./WorkProcessCard";

export default {
  title: "Atoms / Cards / WorkProcessCard",
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
  icon: "images/angry.png",
  title: "Discover",
};

Primary.parameters = {
  layout: "centered",
};
