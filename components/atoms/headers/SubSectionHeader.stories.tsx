import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubSectionHeader } from "./SubSectionHeader";

export default {
  title: "Atoms / SubSectionHeader",
  component: SubSectionHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SubSectionHeader>;

const Template: ComponentStory<typeof SubSectionHeader> = (args: any) => (
  <SubSectionHeader {...args} />
);

export const SubSectionHeaderDefault = Template.bind({});

SubSectionHeaderDefault.args = { title: "Title" } as const;

SubSectionHeaderDefault.parameters = {
  layout: "centered",
} as const;
