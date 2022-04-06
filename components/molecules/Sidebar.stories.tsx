import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import styled from "@emotion/styled";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Molecules / Sidebar  ",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => {
  const [activeButtonId, setActiveButtonId] = useState("home");
  return (
    <Container>
      <Sidebar
        {...args}
        activeButtonId={activeButtonId}
        onButtonClick={(id) => setActiveButtonId(id)}
      />
    </Container>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: "Erfan Asadi",
  avatar: "/avatar.jpg",
};

Primary.parameters = {
  layout: "centered",
};

const Container = styled.div`
  height: 100vh;
  width: 140px;
`;
