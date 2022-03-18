import { Sidebar, SidebarProps } from "$components/molecules/Sidebar";
import styled from "@emotion/styled";
import { FC, useState } from "react";
import { useDirection } from "$utils/hooks/useDirection";
import { below } from "styles/viewPorts";
import { useMedia } from "$utils/hooks/useMedia";
import { Navbar } from "./Navbar";

export interface LayoutProps {
  title: string;
  sidebar: SidebarProps;
  className?: string;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { title, sidebar, className, children } = props;

  console.log("props: ", props);
  console.log("sidebar: ", sidebar);

  /** Custom Hooks */
  const isBelowLargeDevices = useMedia(below.Large);

  const direction = useDirection();
  const isRtl = direction === "rtl";

  /** States */
  const [openSideNav, setOpenSideNav] = useState(false);
  const isSideNavOpen = openSideNav || !isBelowLargeDevices;

  return (
    <Container className={className}>
      <SideNav $isOpen={isSideNavOpen} $isRtl={isRtl}>
        <Sidebar {...sidebar} />
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
