import { FC } from "react";
import styled from "@emotion/styled";
import ServiceCard, {
  ServiceCardProps,
} from "$components/atoms/cards/ServiceCard";
import { above, device } from "styles/viewPorts";

export interface ServicesProps {
  services: Exclude<ServiceCardProps, "className">[];
  className?: string;
}

export const Services: FC<ServicesProps> = (props) => {
  const { services, className } = props;
  return (
    <Container className={className}>
      {services.map((service, index) => (
        <StyledServiceCard {...service} key={index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.Small} {
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      flex: 50%;
    }
  }

  @media ${device.Medium} {
    flex-direction: row;
    flex-wrap: wrap;
    & > div {
      flex: 50%;
    }
  }

  @media ${above.Medium} {
    flex-direction: row;
  }
`;

const StyledServiceCard = styled(ServiceCard)`
  margin: 0 10px;
`;

export default Services;
