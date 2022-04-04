import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

export interface WorkProcessCardProps {
  icon: string;
  title: string;
  className?: string;
}

export const WorkProcessCard: FC<WorkProcessCardProps> = (props) => {
  const { icon, title, className } = props;

  return (
    <Container className={className}>
      <IconContainer>
        <Image height={"25px"} width={"25px"} src={icon} alt={icon} />
      </IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 0 12px 12px 12px;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const IconContainer = styled.div`
  height: 40px;
  text-align: center;
  padding-top: 15px;
`;

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;
