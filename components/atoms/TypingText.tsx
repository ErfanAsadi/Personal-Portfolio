import { ITypeWriter, useTypeWriter } from "@vegadev/react-type-writer";
import { FC } from "react";

const TypingText: FC<ITypeWriter> = (props) => {
  const { text, delay, blinkerDelay, infiniteLoop } = props;
  const message = useTypeWriter({
    text,
    delay,
    blinkerDelay,
    infiniteLoop,
  });
  return <>{message}</>;
};

export default TypingText;
