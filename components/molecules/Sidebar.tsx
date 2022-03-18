import {
  LayoutButton,
  LayoutButtonProps,
} from "$components/atoms/button/LayoutButton";
import { useMedia } from "$utils/hooks/useMedia";
import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { below } from "styles/viewPorts";

export interface SidebarProps {
  title: string;
  avatar: string;
  buttons: LayoutButtonProps[];
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { title, avatar, buttons, className } = props;

  /** Custom Hooks */
  const isBelowLargeDevices = useMedia(below.Large);

  return (
    <Container className={className}>
      <ImageContainer>
        <Image
          src={avatar}
          alt=""
          width="100%"
          height="100%"
          layout="responsive"
        />
      </ImageContainer>
      {!isBelowLargeDevices && <Title>{title}</Title>}
      {buttons.map((button, index) => (
        <LayoutButton key={index} {...button} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e282e;
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  color: white;
  background-color: #34a369;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
`;
