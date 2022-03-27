import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
import { LayoutButton } from "./LayoutButton";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Atoms / Buttons / LayoutButton",
  component: LayoutButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LayoutButton>;

const Template: ComponentStory<typeof LayoutButton> = (args) => {
  const router = useRouter();
  const activeId = router.asPath.split("#")[1];

  return (
    <Container>
      <LayoutButton {...args} active={activeId === "about"} href={"#about"} />
    </Container>
  );
};

export const ActiveButtonWithId = Template.bind({});

ActiveButtonWithId.args = {
  icon: <AngrySvg />,
  title: "Vincet Wood",
};

ActiveButtonWithId.parameters = {
  layout: "centered",
  nextRouter: {
    path: "/",
    asPath: "/#about",
  },
};

export const ButtonWithId = Template.bind({});

ButtonWithId.args = {
  icon: <AngrySvg />,
  title: "Vincet Wood",
};

ButtonWithId.parameters = {
  layout: "centered",
  nextRouter: {
    path: "/",
    asPath: "/",
  },
};

export const ButtonWithOnClick: ComponentStory<typeof LayoutButton> = (
  args
) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <LayoutButton
        {...args}
        active={isActive}
        onClick={() => setIsActive((prev) => !prev)}
      />
    </Container>
  );
};

ButtonWithOnClick.args = {
  icon: <AngrySvg />,
  title: "Vincet Wood",
};

ButtonWithOnClick.parameters = {
  layout: "centered",
  nextRouter: {
    path: "/",
    asPath: "/",
  },
};

const Container = styled.div`
  width: 140px;
  height: 140px;
`;
