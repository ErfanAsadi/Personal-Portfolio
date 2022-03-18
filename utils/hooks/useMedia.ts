import { useEffect, useState } from "react";

export const useMedia = (query: string): boolean | undefined => {
  const [matches, setMatches] = useState<boolean | undefined>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (): void => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
};
