import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import TypingText from "../atoms/TypingText";
import { above } from "styles/viewPorts";
import { ITypeWriter } from "@vegadev/react-type-writer";
import { Trans } from "next-i18next";

export interface HomeProps {
  image: string;
  thumbnail: string;
  id: string;
  textToType: ITypeWriter["text"];
  className?: string;
}

export const Home: FC<HomeProps> = (props) => {
  const { image, thumbnail, id, textToType, className } = props;

  return (
    <Container id={id} className={className}>
      <Image
        src={image}
        layout="fill"
        objectFit="cover"
        alt="homeImage"
        placeholder="blur"
        blurDataURL={thumbnail}
      />
      <TextContainer>
        <Trans i18nKey={"my-info"}>
          <Details>Hi, I am</Details>
          <Name>Erfan Asadi</Name>
        </Trans>

        <StyledTypingText text={textToType} delay={60} infiniteLoop />
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);

  @media ${above.Medium} {
    height: 100vh;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;

const StyledTypingText = styled(TypingText)`
  height: 40px;
`;

const Name = styled.div`
  font-size: 32px;
  @media ${above.Medium} {
    font-size: 64px;
  }
  font-weight: bold;
`;

const Details = styled.div`
  font-size: 16px;
  @media ${above.Medium} {
    font-size: 21px;
  }
`;

export default Home;
