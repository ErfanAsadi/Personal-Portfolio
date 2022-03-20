import { FC } from "react";
import styled from "@emotion/styled";

export interface ProgressbarProps {
  title?: string;
  value?: number;
  textColor?: string;
  backgroundColor?: string;
  lineColor?: string;
  lineHeight?: number;
  className?: string;
}

export const Progressbar: FC<ProgressbarProps> = (props) => {
  const {
    title,
    value,
    textColor,
    backgroundColor,
    lineColor,
    lineHeight,
    className,
  } = props;

  return (
    <Container className={className}>
      <InnerContainer>
        <Title textColor={textColor}>{title}</Title>
        <Backline backgroundColor={backgroundColor} lineHeight={lineHeight}>
          <FilledLine value={value} lineColor={lineColor} />
        </Backline>
      </InnerContainer>
      <Value>{value}</Value>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

interface TitleProps {
  textColor?: string;
}

const Title = styled.div<TitleProps>`
  width: 100%;
  height: 20px;
  margin: 10px 0;
`;

const InnerContainer = styled.div`
  width: calc(100% - 40px);
`;

interface BacklineProps {
  lineHeight?: number;
  backgroundColor?: string;
}

const Backline = styled.div<BacklineProps>`
  width: 100%;
  height: ${({ lineHeight }) => lineHeight ?? 8}px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#e6e6e6"};
  display: flex;
`;

interface FilledLineProps {
  lineColor?: string;
  value?: number;
}

const FilledLine = styled.div<FilledLineProps>`
  width: ${({ value }) => value ?? 0}%;
  height: 100%;
  background-color: ${({ lineColor }) => lineColor ?? "#00bcd4"};
`;

const Value = styled.div`
  width: 20px;
  height: 100%;
`;

export default Progressbar;
