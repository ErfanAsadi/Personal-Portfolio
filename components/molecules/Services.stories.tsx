import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Services } from "./Services";

export default {
  title: "Molecules / Services",
  component: Services,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Services>;

const Template: ComponentStory<typeof Services> = (args: any) => (
  <Services {...args} />
);

export const ServicesDefault = Template.bind({});

const serviceCardData = [
  {
    icon: "images/angry.png",
    title: "COPYWRITER",
    description:
      "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: "images/angry.png",
    title: "GAME DEV",
    description:
      "I can design beautiful type faces for both digital and print media. It is a long established fact that a reader will be distracted.",
  },
  {
    icon: "images/angry.png",
    title: "MANAGEMENT",
    description:
      "I write about web design. It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    icon: "images/angry.png",
    title: "PROBLEM SOLVER",
    description:
      "I have strong project management skills. It is a long established fact that a reader will be distracted by the readable content.",
  },
];

ServicesDefault.args = { services: serviceCardData } as const;

ServicesDefault.parameters = {
  layout: "centered",
} as const;
