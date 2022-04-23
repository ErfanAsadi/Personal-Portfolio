import { FC } from "react";
import styled from "@emotion/styled";
import HistoryCard from "$components/atoms/cards/HistoryCard";
import { css } from "@emotion/react";
import { useDirection } from "$utils/hooks/useDirection";
import Image from "next/image";

export interface ActivitiesHistoryProps {
  title: string;
  icon: string;
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

  const direction = useDirection();
  const isRtl = direction === "rtl";

  return (
    <Container $isRtl={isRtl} className={className}>
      <HeadItem>
        <BigCircleWithIcon $isRtl={isRtl}>
          <IconContainer>
            <Image height={"30px"} width={"30px"} src={icon} alt={icon} />
          </IconContainer>
        </BigCircleWithIcon>

        <Title $isRtl={isRtl}>{title}</Title>
        <br />
        <br />
      </HeadItem>

      {histories.map((history, index) => (
        <Item $active={index === 0} key={index} $isRtl={isRtl}>
          <Content>
            <TitleContainer>
              <Triangle $isRtl={isRtl} />
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

interface ComponentsProps {
  $isRtl?: boolean;
}

const Container = styled.div<ComponentsProps>`
  padding: 0;
  list-style: none;
  ${({ $isRtl }) =>
    $isRtl
      ? css`
          text-align: right;
          border-right: 4px solid #fff;
          padding-right: 18px;
        `
      : css`
          text-align: left;
          border-left: 4px solid #fff;
          padding-left: 18px;
        `};
`;

const Title = styled.div<ComponentsProps>`
  width: fit-content;
  height: 50px;
  line-height: 50px;
  font-size: 26px;

  ${({ $isRtl }) =>
    $isRtl
      ? css`
          margin-right: 20px;
        `
      : css`
          margin-left: 20px;
        `};
`;

const BigCircleWithIcon = styled.div<ComponentsProps>`
  width: 50px;
  height: 50px;
  background: #8ecd86;
  position: absolute;
  border-radius: 50%;
  top: 0;
  ${({ $isRtl }) =>
    $isRtl
      ? css`
          right: -20px;
          transform: translatex(50%);
        `
      : css`
          left: -20px;
          transform: translatex(-50%);
        `};
`;

const HeadItem = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
`;

interface ItemProps {
  $active?: boolean;
  $hideCircle?: boolean;
  $isRtl?: boolean;
}

const Item = styled.div<ItemProps>`
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
    ${({ $isRtl }) =>
      $isRtl
        ? css`
            right: -20px;
            transform: translatex(50%);
          `
        : css`
            left: -20px;
            transform: translatex(-50%);
          `};
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

const Triangle = styled.div<ComponentsProps>`
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
  background-color: #8ecd86;

  ${({ $isRtl }) =>
    $isRtl
      ? css`
          border-right: 10px solid #ecf0f0;
        `
      : css`
          border-left: 10px solid #ecf0f0;
        `};
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
