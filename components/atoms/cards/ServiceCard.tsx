import { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import { above } from "styles/viewPorts";

export interface ServiceCardProps {
  icon: ReactElement;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard: FC<ServiceCardProps> = (props) => {
  const { icon, title, description, className } = props;
  return (
    <Container className={className}>
      <IconContainer>{icon}</IconContainer>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;

  @media ${above.Medium} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 100px;
  padding: 20px 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media ${above.Medium} {
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  @media ${above.Medium} {
    text-align: center;
  }
`;

const Description = styled.div`
  width: 100%;
  padding-left: 20px;
  text-align: left;
  font-size: 14px;
  color: #999999;

  @media ${above.Medium} {
    text-align: center;
    padding: 0;
  }
`;

export default ServiceCard;
