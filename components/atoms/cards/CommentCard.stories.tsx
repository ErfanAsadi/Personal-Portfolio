import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CommentCard } from "./CommentCard";

export default {
  title: "Atoms / Cards / CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: "Vincet Wood",
  info: "CEO/GRAVITY INC.",
  description:
    "He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy.",
  image: "/UserImage.jpg",
};

Primary.parameters = {
  layout: "centered",
};
