import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export interface ClientProps {
  client: {
    name: string;
    logo: string;
  };
  className?: string;
}

export const Client: FC<ClientProps> = (props) => {
  const { client, className } = props;

  return (
    <Container key={`image_${client.name}`} className={className}>
      <Image src={client.logo} alt={client.name} width={80} height={80} />
      <Name>{client.name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  width: 150px;
  margin-top: 10px;
`;
