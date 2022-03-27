import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export interface HomeProps {
  image: string;
  id: string;
  className?: string;
}

export const Home: FC<HomeProps> = (props) => {
  const { image, id, className } = props;
  return (
    <Container id={id} className={className}>
      <Image src={image} layout="fill" objectFit="cover" alt="homeImage" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;