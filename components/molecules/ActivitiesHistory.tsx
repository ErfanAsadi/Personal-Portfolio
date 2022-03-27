import { FC, ReactElement } from "react";
import styled from "@emotion/styled";
import HistoryCard from "$components/atoms/cards/HistoryCard";

export interface ActivitiesHistoryProps {
  title: string;
  icon: ReactElement;
  histories: {
    title: string;
    subTitle: string;
    description: string;
    date: string;
  }[];
  className?: string;
}

export const ActivitiesHistory: FC<ActivitiesHistoryProps> = (props) => {
  const { title, icon, histories, className } = props;
  return (
    <Container className={className}>
      <HeadItem>
        <BigCircleWithIcon>
          <IconContainer>{icon}</IconContainer>
        </BigCircleWithIcon>

        <Title>{title}</Title>
        <br />
        <br />
      </HeadItem>

      {histories.map((history, index) => (
        <Item $active={index === 0} key={index}>
          <Content>
            <TitleContainer>
              <Triangle />
              <Text>{history.date}</Text>
            </TitleContainer>
            <br />
            <StyledHistoryCard
              title={history.title}
              subTitle={history.subTitle}
              description={history.description}
            />
          </Content>
          <br />
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  text-align: left;
  border-left: 4px solid #fff;
  list-style: none;
  padding-left: 18px;
`;

const Title = styled.div`
  width: fit-content;
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
  font-size: 26px;
`;

const BigCircleWithIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #8ecd86;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: -20px;
  transform: translatex(-50%);
`;

const HeadItem = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
`;

const Item = styled.div<{ $active?: boolean; $hideCircle?: boolean }>`
  position: relative;
  margin-top: 20px;
  width: 100%;

  &:after {
    content: "";
    width: 20px;
    height: 20px;
    background: ${({ $active }) => ($active ? "#8ecd86" : "#fff")};
    position: absolute;
    border-radius: 50%;
    top: 0;
    left: -20px;
    transform: translatex(-50%);
  }
`;

const Content = styled.div`
  margin: 0 20px;
`;

const TitleContainer = styled.div`
  width: fit-content;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  display: flex;
`;

const Triangle = styled.div`
  border-left: 10px solid #ecf0f0;
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  background-color: #8ecd86;
`;

const Text = styled.div`
  padding: 0 15px;
  color: white;
  font-size: 14px;
  background-color: #8ecd86;
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  fill: white;
`;

const StyledHistoryCard = styled(HistoryCard)`
  margin-left: 30px;
`;

export default ActivitiesHistory;
