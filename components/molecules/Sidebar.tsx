import {
  LayoutButton,
  LayoutButtonProps,
} from "$components/atoms/buttons/LayoutButton";
import { hideScrollBar } from "$components/layouts/hideScrollBar";
import { useMedia } from "$utils/hooks/useMedia";
import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { below } from "styles/viewPorts";
import HomeSvg from "assets/icons/home.svg";
import ResumeSvg from "assets/icons/resume.svg";
import PersonSvg from "assets/icons/person.svg";
import ContactSvg from "assets/icons/contact.svg";

export interface SidebarProps {
  title: string;
  avatar: string;
  activeButtonId: string;
  onButtonClick?: (id: string) => void;
  className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { title, avatar, activeButtonId, className, onButtonClick } = props;

  const { t } = useTranslation();

  const buttons: LayoutButtonProps[] = [
    {
      id: "home",
      icon: <HomeSvg />,
      title: t("home"),
      href: "#home",
    },
    {
      id: "about",
      icon: <PersonSvg />,
      title: t("about-me"),
      href: "#about",
    },
    {
      id: "resume",
      icon: <ResumeSvg />,
      title: t("resume"),
      href: "#resume",
    },
    {
      id: "contact",
      icon: <ContactSvg />,
      title: t("contact"),
      href: "#contact",
    },
  ];

  /** Custom Hooks */
  const isBelowLargeDevices = useMedia(below.Large);

  return (
    <Container className={className}>
      <ImageContainer>
        <Image
          src={avatar}
          alt=""
          width="100%"
          height="100%"
          layout="responsive"
        />
      </ImageContainer>
      {!isBelowLargeDevices && <Title>{title}</Title>}
      {buttons.map((button, index) => (
        <LayoutButton
          onClick={() => onButtonClick && onButtonClick(button.id)}
          key={index}
          {...button}
          active={activeButtonId === button.id}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1e282e;
  ${hideScrollBar}
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  color: white;
  background-color: #34a369;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
`;
