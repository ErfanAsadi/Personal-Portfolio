import { FC } from "react";
import styled from "@emotion/styled";
import { Client, ClientProps } from "$components/atoms/Client";

export interface ClientsProps {
  clients: ClientProps["client"][];
  className?: string;
}

export const Clients: FC<ClientsProps> = (props) => {
  const { clients, className } = props;
  return (
    <Container className={className}>
      {clients?.map((client) => (
        <Client key={`image_${client.name}`} client={client} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default Clients;
