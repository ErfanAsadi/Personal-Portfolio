import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Client } from "./Client";

export default {
  title: "Atoms / Client",
  component: Client,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Client>;

const Template: ComponentStory<typeof Client> = (args: any) => (
  <Client {...args} />
);

export const ClientDefault = Template.bind({});

ClientDefault.args = {
  client: {
    name: "Avid",
    logo: "/images/angry.png",
  },
} as const;

ClientDefault.parameters = {
  layout: "centered",
} as const;
