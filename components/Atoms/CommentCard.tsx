import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

interface CommentCardProps {
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
      <InnerContainer>
        <ImageContainer>
          <StyledImage src={image} alt="User Avatar" width={70} height={70} />
        </ImageContainer>
        <Title>{title}</Title>
        <Info>{info}</Info>
        <Description>{description}</Description>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
`;

const ImageContainer = styled.div`
  margin-top: -30px;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  margin: 0 auto;
  margin-top: -25px;
`;

const InnerContainer = styled.div`
  position: absolute;
  text-align: center;
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  margin: 2px auto;
  width: fit-content;
  height: fit-content;
`;

const Info = styled.div`
  margin: 2px auto;
  width: fit-content;
  height: fit-content;
  font-size: 10px;
  color: grey;
`;

const Description = styled.div`
  width: 280px;
  height: fit-content;
  max-height: 100px;
  margin: 5px auto;
  overflow: hidden;
  font-size: 12px;
`;
