import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Comments } from "./Comments";

export default {
  title: "Molecules / Comments",
  component: Comments,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Comments>;

const Template: ComponentStory<typeof Comments> = (args: any) => (
  <Comments {...args} />
);

export const CommentsDefault = Template.bind({});

const item = {
  title: "Vincet Wood",
  info: "CEO/GRAVITY INC.",
  description:
    "He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy.",
  image: "/UserImage.jpg",
};

CommentsDefault.args = { title: "Comments", items: [item, item] };

CommentsDefault.parameters = {
  layout: "centered",
} as const;
