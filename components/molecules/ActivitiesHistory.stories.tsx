import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ActivitiesHistory from "./ActivitiesHistory";

export default {
  title: "Molecules / ActivitiesHistory",
  component: ActivitiesHistory,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ActivitiesHistory>;

const Template: ComponentStory<typeof ActivitiesHistory> = (args: any) => (
  <ActivitiesHistory {...args} />
);

export const WorkHistoryDefault = Template.bind({});

const histories = [
  {
    title: "Front-end Developer",
    subTitle: "GOOGLE INC.",
    description:
      "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "DEC 2013 - CURRENT",
  },
  {
    title: "EXCLUSIVE AUTHOR",
    subTitle: "ENVATO INC.",
    description:
      "I am an Elite Author at Envato. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
    date: "2006",
  },
];

WorkHistoryDefault.args = {
  title: "WORK HISTORY",
  icon: "images/angry.png",
  histories,
} as const;

WorkHistoryDefault.parameters = {
  layout: "centered",
} as const;
