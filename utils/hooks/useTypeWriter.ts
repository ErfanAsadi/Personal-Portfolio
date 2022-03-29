import { useEffect, useState } from "react";

export interface ITypeWriter {
  dynamicTexts: string[];
  delay?: number;
  blinkerDelay?: number;
}

export const useTypeWriter = (args: ITypeWriter): any => {
  const { dynamicTexts, delay = 1000, blinkerDelay = 500 } = args;

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [showBlinker, setShowBlinker] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter

  useEffect(() => {
    if (
      index === dynamicTexts.length - 1 &&
      subIndex === dynamicTexts[index].length
    ) {
      return;
    }

    if (
      subIndex === dynamicTexts[index].length + 1 &&
      index !== dynamicTexts.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    let typeSpeed = 0;
    if (reverse) {
      typeSpeed = 75;
    } else if (subIndex === dynamicTexts[index].length) {
      typeSpeed = delay;
    } else {
      typeSpeed = 150;
    }
    typeSpeed = Math.max(
      typeSpeed,
      // eslint-disable-next-line radix
      parseInt(`${Math.random() * 350}`)
    );

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setShowBlinker((prev) => !prev);
    }, blinkerDelay);
    return () => clearTimeout(timeout2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBlinker]);

  const finalTextResult = `${dynamicTexts[index].substring(0, subIndex)}${
    showBlinker ? "|" : " "
  }`;
  return {
    text: finalTextResult,
  };
};
