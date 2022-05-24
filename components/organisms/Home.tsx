import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import TypingText from "../atoms/TypingText";
import { useMedia } from "$utils/hooks/useMedia";
import { below } from "styles/viewPorts";
import { ITypeWriter } from "@vegadev/react-type-writer";

export interface HomeProps {
  image: string;
  id: string;
  textToType: ITypeWriter["text"];
  className?: string;
}

export const Home: FC<HomeProps> = (props) => {
  const { image, id, textToType, className } = props;

  const hideTypingText = useMedia(below.Large);

  return (
    <Container id={id} className={className}>
      <Image src={image} layout="fill" objectFit="cover" alt="homeImage" />
      {!hideTypingText && <StyledTypingText text={textToType} infiniteLoop />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  margin-top: 100px;
`;

const StyledTypingText = styled(TypingText)`
  position: absolute;
  width: 100%;
  height: 100px;
  line-height: 100px;
  bottom: 10%;
`;

export default Home;
