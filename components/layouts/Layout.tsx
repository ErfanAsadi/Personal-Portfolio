import { Sidebar, SidebarProps } from "$components/molecules/Sidebar";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { useDirection } from "$utils/hooks/useDirection";
import { below } from "styles/viewPorts";
import { useMedia } from "$utils/hooks/useMedia";
import { Navbar } from "./Navbar";
import { hideScrollBar } from "./hideScrollBar";

export interface LayoutProps {
  title: string;
  sidebar: Exclude<SidebarProps, "className">;
  className?: string;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { title, sidebar, className, children } = props;

  /** Custom Hooks */
  const isBelowLargeDevices = useMedia(below.Large);

  const direction = useDirection();
  const isRtl = direction === "rtl";

  /** States */
  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(() => {
    setOpenSideNav(!isBelowLargeDevices);
  }, [isBelowLargeDevices]);

  return (
    <Container className={className}>
      <SideNav $isOpen={openSideNav} $isRtl={isRtl}>
        <Sidebar {...sidebar} />
      </SideNav>
      <Content $isOpen={openSideNav} $isRtl={isRtl}>
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
  ${hideScrollBar}

  transform: ${({ $isOpen, $isRtl }) => {
    if ($isRtl) {
      return $isOpen ? "translateX(0)" : `translateX(${sidebarWidth})`;
    } else {
      return $isOpen ? "translateX(0px)" : `translateX(-${sidebarWidth})`;
    }
  }};
`;

const Content = styled.div<ComponentProps>`
  min-width: ${({ $isOpen }) =>
    $isOpen ? `calc(100% - ${sidebarWidth})` : "100%"};
  height: 100%;
  margin-left: ${({ $isOpen, $isRtl }) =>
    $isOpen && !$isRtl ? sidebarWidth : "unset"};
  margin-right: ${({ $isOpen, $isRtl }) =>
    $isOpen && $isRtl ? sidebarWidth : "unset"};
  transition: 0.5s;
`;

const Children = styled.div`
  height: 100%;
  @media ${below.Large} {
    margin-top: 60px;
  }
`;

export default Layout;
