import styled from "@emotion/styled";
import { ITypeWriter, useTypeWriter } from "@vegadev/react-type-writer";
import { FC } from "react";

type TypingTextProps = ITypeWriter & {
  className?: string;
};

const TypingText: FC<TypingTextProps> = (props) => {
  const { text, delay, blinkerDelay, infiniteLoop, className } = props;
  const message = useTypeWriter({
    text,
    delay,
    blinkerDelay,
    infiniteLoop,
  });
  return <Container className={className}>{message}</Container>;
};

const Container = styled.div`
  color: white;
  font-size: 36px;
`;

export default TypingText;
