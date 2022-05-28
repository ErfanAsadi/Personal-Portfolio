import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Clients, ClientsProps } from "./Clients";

export default {
  title: "Molecules / Clients",
  component: Clients,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Clients>;

const Template: ComponentStory<typeof Clients> = (args: any) => (
  <Clients {...args} />
);

export const ClientsDefault = Template.bind({});

ClientsDefault.args = {
  clients: [
    {
      name: "Avid",
      logo: "/images/angry.png",
    },
    {
      name: "Avid",
      logo: "/images/angry.png",
    },
    {
      name: "Avid",
      logo: "/images/angry.png",
    },
  ] as ClientsProps["clients"],
} as const;

ClientsDefault.parameters = {
  layout: "centered",
} as const;
