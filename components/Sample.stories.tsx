import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sample } from "./Sample";

export default {
  title: "Components/Sample",
  component: Sample,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
