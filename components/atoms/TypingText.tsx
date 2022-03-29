import { useTypeWriter } from "$utils/hooks/useTypeWriter";

const TypingText = () => {
  const { text } = useTypeWriter({
    dynamicTexts: ["Developer.", "Programmer.", "A slave."],
    delay: 1000,
    blinkerDelay: 500,
  });
  return <>{text}</>;
};

export default TypingText;
