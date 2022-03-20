import { FC } from "react";
import styled from "@emotion/styled";

export interface HistoryCardProps {
  title?: string;
  subTitle: string;
  description: string;
  className?: string;
}

export const HistoryCard: FC<HistoryCardProps> = (props) => {
  const { title, subTitle, description, className } = props;
  return (
    <Container className={className}>
      <Title>{title}</Title>
      <Subtitle>{subTitle}</Subtitle>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
`;
const Subtitle = styled.div`
  font-size: 14px;
  color: #c2c5c8;
  margin-bottom: 5px;
`;
const Description = styled.div``;

export default HistoryCard;
