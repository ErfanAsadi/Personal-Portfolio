import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";
import styled from "@emotion/styled";
import AngrySvg from "assets/icons/angry.svg";
import { above } from "styles/viewPorts";

export default {
  title: "Atoms / Cards / ServiceCard",
  component: ServiceCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args: any) => (
  <Container>
    <ServiceCard {...args} />
  </Container>
);

export const ServiceCardDefault = Template.bind({});

ServiceCardDefault.args = {
  title: "Game Developer",
  description:
    "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
  icon: <AngrySvg />,
} as const;

ServiceCardDefault.parameters = {
  layout: "centered",
} as const;

const Container = styled.div`
  min-width: 200px;
  height: 200px;
  @media ${above.Medium} {
    width: 400px;
  }
`;
