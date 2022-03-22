import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HistoryCard } from "./HistoryCard";

export default {
  title: "Atoms / Cards / HistoryCard",
  component: HistoryCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HistoryCard>;

const Template: ComponentStory<typeof HistoryCard> = (args: any) => (
  <HistoryCard {...args} />
);

export const HistoryCardDefault = Template.bind({});

HistoryCardDefault.args = {
  title: "Front End Web Developer",
  subTitle: "PIXELWARS INC.",
  description:
    "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
} as const;

HistoryCardDefault.parameters = {
  layout: "centered",
} as const;
