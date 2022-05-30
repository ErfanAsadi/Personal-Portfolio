import styled from "@emotion/styled";
import { ITypeWriter, useTypeWriter } from "@vegadev/react-type-writer";
import { FC } from "react";
import { above } from "styles/viewPorts";

type TypingTextProps = ITypeWriter & {
  prefix?: string;
  postfix?: string;
  className?: string;
};

const TypingText: FC<TypingTextProps> = (props) => {
  const {
    text,
    prefix = "",
    postfix = "",
    delay,
    blinkerDelay,
    infiniteLoop,
    className,
  } = props;
  const message = useTypeWriter({
    text,
    delay,
    blinkerDelay,
    infiniteLoop,
  });
  return (
    <Container className={className}>
      {`${prefix} ${message} ${postfix}`}
    </Container>
  );
};

const Container = styled.div`
  color: white;
  font-size: 18px;
  @media ${above.Medium} {
    font-size: 24px;
  }
`;

export default TypingText;
