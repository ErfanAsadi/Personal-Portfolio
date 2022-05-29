import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

export interface CommentCardProps {
  image: string;
  title: string;
  info: string;
  description: string;
  className?: string;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { image, title, info, description, className } = props;

  return (
    <Container className={className}>
      <ImageContainer>
        <StyledImage src={image} alt="User Avatar" width={70} height={70} />
      </ImageContainer>
      <InnerContainer>
        <Title>{title}</Title>
        <Info>{info}</Info>
        <Description>{description}</Description>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 300px;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -30px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
`;

const InnerContainer = styled.div`
  text-align: center;
  width: 100%;
  padding: 56px 0 24px 0;
  height: fit-content;
  background-color: white;
  border-radius: 8px;
`;

const Title = styled.div`
  margin: 2px auto;
  width: fit-content;
  height: fit-content;
  font-size: 18px;
  font-weight: bold;
`;

const Info = styled.div`
  margin: 2px auto;
  width: fit-content;
  height: fit-content;
  font-size: 13px;
  color: #666666;
`;

const Description = styled.div`
  width: calc(100% - 40px);
  height: fit-content;
  margin: 5px auto;
  overflow: hidden;
  text-align: justify;
  text-justify: inter-word;
  font-size: 14px;
`;
