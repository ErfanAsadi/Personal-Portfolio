import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
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
  const newButtons = args.buttons.map((button) => ({
    ...button,
    onClick: () => setActiveButtonId(button.id),
  }));
  const [activeButtonId, setActiveButtonId] = useState("home");
  return (
    <Container>
      <Sidebar {...args} activeButtonId={activeButtonId} buttons={newButtons} />
    </Container>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  title: "Erfan Asadi",
  avatar: "/avatar.jpg",
  buttons: [
    { id: "home", icon: <AngrySvg />, title: "HOME" },
    { id: "about", icon: <AngrySvg />, title: "ABOUT ME" },
    { id: "resume", icon: <AngrySvg />, title: "RESUME" },
    { id: "portfolio", icon: <AngrySvg />, title: "PORTFOLIO" },
    { id: "blog", icon: <AngrySvg />, title: "BLOG" },
    { id: "contact", icon: <AngrySvg />, title: "CONTACT" },
  ],
};

Primary.parameters = {
  layout: "centered",
};

const Container = styled.div`
  height: 100vh;
  width: 140px;
`;
