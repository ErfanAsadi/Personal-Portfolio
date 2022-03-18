import { Sidebar } from "$components/molecules/Sidebar";
import styled from "@emotion/styled";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import AngrySvg from "assets/icons/angry.svg";
import { useDirection } from "$utils/hooks/useDirection";
import { below } from "styles/viewPorts";
import { useMedia } from "$utils/hooks/useMedia";
import { Navbar } from "./Navbar";

export interface LayoutProps {
  className?: string;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { className, children } = props;

  /** Libs */
  const { t } = useTranslation(["common"]);

  /** Custom Hooks */
  const isBelowLargeDevices = useMedia(below.Large);

  const direction = useDirection();
  const isRtl = direction === "rtl";

  /** States */
  const [openSideNav, setOpenSideNav] = useState(false);
  const isSideNavOpen = openSideNav || !isBelowLargeDevices;

  const title = "Erfan Asadi";
  const sideBarProps = {
    title,
    avatar: "/avatar.jpg",
    buttons: [
      { icon: <AngrySvg />, title: t("home") },
      { icon: <AngrySvg />, title: t("about-me") },
      { icon: <AngrySvg />, title: t("resume") },
      { icon: <AngrySvg />, title: t("portfolio") },
      { icon: <AngrySvg />, title: t("blog") },
      { icon: <AngrySvg />, title: t("contact") },
    ],
  };

  return (
    <Container className={className}>
      <SideNav $isOpen={isSideNavOpen} $isRtl={isRtl}>
        <Sidebar {...sideBarProps} />
      </SideNav>
      <Content $isOpen={isSideNavOpen} $isRtl={isRtl}>
        {isBelowLargeDevices && (
          <Navbar
            title={title}
            onMenuClick={() => setOpenSideNav((prev) => !prev)}
          />
        )}
        <Children>{children}</Children>
      </Content>
    </Container>
  );
};

interface ComponentProps {
  $isOpen?: boolean;
  $isRtl?: boolean;
}

const sidebarWidth = "140px";

const Container = styled.div<ComponentProps>`
  width: 100%;
  height: 100%;
`;

const SideNav = styled.div<ComponentProps>`
  position: fixed;
  height: 100%;
  width: ${sidebarWidth};
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;
  left: ${({ $isRtl }) => (!$isRtl ? 0 : "unset")};
  right: ${({ $isRtl }) => ($isRtl ? 0 : "unset")};

  transform: ${({ $isOpen, $isRtl }) => {
    if ($isRtl) {
      return $isOpen ? "translateX(0)" : `translateX(${sidebarWidth})`;
    } else {
      return $isOpen ? "translateX(0px)" : `translateX(-${sidebarWidth})`;
    }
  }};
`;

const Content = styled.div<ComponentProps>`
  width: ${({ $isOpen }) =>
    $isOpen ? `calc(100% - ${sidebarWidth})` : "100%"};
  height: 100%;
  margin-left: ${({ $isOpen, $isRtl }) =>
    $isOpen && !$isRtl ? sidebarWidth : "unset"};

  margin-right: ${({ $isOpen, $isRtl }) =>
    $isOpen && $isRtl ? sidebarWidth : "unset"};
  transition: 0.5s;
`;

const Children = styled.div`
  @media ${below.Large} {
    margin-top: 60px;
  }
`;

export default Layout;
