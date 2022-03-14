import {
  LayoutButton,
  LayoutButtonProps,
} from "$components/atoms/button/LayoutButton";
import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

interface WorkProcessProps {
  avatar: string;
  buttons: LayoutButtonProps[];
  className?: string;
}

export const Sidebar: FC<WorkProcessProps> = (props) => {
  const { avatar, buttons, className } = props;

  return (
    <Container className={className}>
      <ImageContainer>
        <StyledImage src={avatar} alt="" placeholder="blur" />
      </ImageContainer>
      {buttons.map((button, index) => (
        <LayoutButton key={index} {...button} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #1e282e;
`;

const ImageContainer = styled.div`
  height: 180px;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
