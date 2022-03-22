import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AngrySvg from "assets/icons/angry.svg";
import { LayoutButton } from "./LayoutButton";
import styled from "@emotion/styled";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Atoms / Buttons / LayoutButton",
  component: LayoutButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LayoutButton>;

const Template: ComponentStory<typeof LayoutButton> = (args) => {
  const [active] = useState(false);

  return (
    <Container>
      <LayoutButton
        {...args}
        active={active}
        href={"#about"}
        // onClick={() => setActive((prev) => !prev)}
      />
    </Container>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  icon: <AngrySvg />,
  title: "Vincet Wood",
};

Primary.parameters = {
  layout: "centered",
};

const Container = styled.div`
  width: 140px;
  height: 140px;
`;
