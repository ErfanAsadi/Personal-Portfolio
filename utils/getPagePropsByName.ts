import { PageName } from "./sharedTypes/IApp";

interface PagePropsByName {
  nameSpaces: any[];
  transition: any;
}

export const getPagePropsByName = (pageName: PageName): PagePropsByName => {
  const defaultNamespaces = ["common"];
  const defaultPageTransition = {
    key: pageName,
    variants: {},
  };

  const pageConfigs: any = {
    home: {
      namespaces: [],
      transition: {},
    },
    sample: {
      namespaces: ["sample"],
      transition: {
        initial: "hidden",
        animate: "enter",
        exit: "exit",
        variants: {
          hidden: {
            y: 0,
            opacity: 0,
            transition: {
              type: "spring",
              damping: 20,
              stiffness: 100,
              when: "afterChildren",
            },
          },
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 20,
              stiffness: 100,
              when: "afterChildren",
            },
          },
          exit: {
            y: -50,
            opacity: 0,
            transition: {
              type: "spring",
              damping: 20,
              stiffness: 100,
              when: "afterChildren",
            },
          },
        },
      },
    },
  };

  return {
    nameSpaces: [...defaultNamespaces, ...pageConfigs.sample.namespaces],
    transition: {
      ...defaultPageTransition,
      ...pageConfigs.sample.transition,
    },
  };
};
