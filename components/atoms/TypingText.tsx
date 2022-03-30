import { ITypeWriter, useTypeWriter } from "$utils/hooks/useTypeWriter";
import { FC } from "react";

const TypingText: FC<ITypeWriter> = (props) => {
  const { dynamicTexts, delay, blinkerDelay, infiniteLoop } = props;
  const { text } = useTypeWriter({
    dynamicTexts,
    delay,
    blinkerDelay,
    infiniteLoop,
  });
  return <>{text}</>;
};

export default TypingText;
