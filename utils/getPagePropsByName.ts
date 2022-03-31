import { GetStaticPropsContext } from "next";
import { PageName } from "./sharedTypes/IApp";

interface PagePropsByName {
  nameSpaces: any[];
  transition: any;
  pageData: any;
}

export const getPagePropsByName = (
  pageName: PageName,
  ctx: GetStaticPropsContext
): PagePropsByName => {
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
    pageData: data[ctx.locale ?? "en"],
  };
};

// this will be removed when we move it to a cms
const data: any = {
  en: {
    activities: [
      {
        title: "WORK HISTORY1",
        icon: "/images/angry.png",
        histories: [
          {
            title: "Front-end Developer",
            subTitle: "GOOGLE INC.",
            description:
              "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
            date: "DEC 2013 - CURRENT",
          },
          {
            title: "EXCLUSIVE AUTHOR",
            subTitle: "ENVATO INC.",
            description:
              "I am an Elite Author at Envato. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
            date: "2006",
          },
        ],
      },
      {
        title: "WORK HISTORY2",
        icon: "/images/angry.png",
        histories: [
          {
            title: "Front-end Developer",
            subTitle: "GOOGLE INC.",
            description:
              "I currently work for Pixelwars creative studio. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
            date: "DEC 2013 - CURRENT",
          },
          {
            title: "EXCLUSIVE AUTHOR",
            subTitle: "ENVATO INC.",
            description:
              "I am an Elite Author at Envato. I create usable web interfaces, front end coding stuff and almost anything. But i love what i do.",
            date: "2006",
          },
        ],
      },
    ],

    skills: [
      // codingSkillsProps
      {
        title: "CODING SKILLS",
        items: [
          { title: "HTML", value: 90 },
          { title: "CSS", value: 70 },
          { title: "JS", value: 60 },
        ],
      },
      // designSkillsProps
      {
        title: "DESIGN SKILLS",
        items: [
          { title: "PHOTOSHOP", value: 90 },
          { title: "ILLUSTRATOR", value: 40 },
          { title: "INDESIGN", value: 60 },
          { title: "XD", value: 30 },
        ],
      },
    ],
    workProcessItems: [
      {
        icon: "/images/angry.png",
        title: "Discover",
      },
      {
        icon: "/images/angry.png",
        title: "IDEA",
      },
      {
        icon: "/images/angry.png",
        title: "DESIGN",
      },
      {
        icon: "/images/angry.png",
        title: "DEVELOP",
      },
      {
        icon: "/images/angry.png",
        title: "TEST",
      },
      {
        icon: "/images/angry.png",
        title: "LAUNCH",
      },
    ],
    serviceCardData: [
      {
        icon: "/images/angry.png",
        title: "COPYWRITER",
        description:
          "I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.",
      },
      {
        icon: "/images/angry.png",
        title: "GAME DEV",
        description:
          "I can design beautiful type faces for both digital and print media. It is a long established fact that a reader will be distracted.",
      },
      {
        icon: "/images/angry.png",
        title: "MANAGEMENT",
        description:
          "I write about web design. It is a long established fact that a reader will be distracted by the readable content.",
      },
      {
        icon: "/images/angry.png",
        title: "PROBLEM SOLVER",
        description:
          "I have strong project management skills. It is a long established fact that a reader will be distracted by the readable content.",
      },
    ],
    sideBarProps: {
      title: "Erfan Asadi",
      avatar: "/avatar.jpg",
      buttons: [
        {
          id: "home",
          icon: "/images/angry.png",
          title: "home",
          href: "#home",
        },
        {
          id: "about",
          icon: "/images/angry.png",
          title: "about-me",
          href: "#about",
        },
        {
          id: "resume",
          icon: "/images/angry.png",
          title: "resume",
          href: "#resume",
        },
        {
          id: "contact",
          icon: "/images/angry.png",
          title: "contact",
          href: "#contact",
        },
      ],
    },
    commentsProps: {
      title: "Comments",
      items: [
        {
          title: "Vincet Wood",
          info: "CEO/GRAVITY INC.",
          description:
            "He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant",
          image: "/avatar.jpg",
        },
        {
          title: "Vincet Wood2",
          info: "CEO/GRAVITY INC.",
          description:
            "He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant. He helped me  so much.He is a great and hardworking guy. I am so proud of I have him as my assisstant. He helped me so much. Also I am proud of I have his as my assisstant",
          image: "/avatar.jpg",
        },
      ],
    },
  },
};
