import styled from "@emotion/styled";
import { debounce } from "lodash-es";
import React, { useState, useEffect, FC, useCallback } from "react";
import MenuSvg from "assets/icons/menu.svg";

interface NavbarProps {
  title: string;
  onMenuClick: () => void;
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { title, onMenuClick, className } = props;

  /** States */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  /** Handler Functions */
  const handleScroll = useCallback(
    () =>
      debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible(
          (prevScrollPos > currentScrollPos &&
            prevScrollPos - currentScrollPos > 70) ||
            currentScrollPos < 10
        );

        setPrevScrollPos(currentScrollPos);
      }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Container $visible={visible} className={className}>
      <IconContainer onClick={onMenuClick}>
        <MenuSvg />
      </IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const navbarHeight = "60px";

const Container = styled.div<{ $visible?: boolean }>`
  position: fixed;
  width: 100%;
  height: ${navbarHeight};
  top: ${({ $visible }) => ($visible ? 0 : `-${navbarHeight}`)};
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #1e282e;
  color: white;
  transition: top 0.3s;
  z-index: 1;
`;

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  padding: 10px;
  border-right: 1px solid #666;
  cursor: pointer;

  & > svg {
    fill: white;
  }
`;

const Title = styled.div`
  padding: 0 20px;
  font-size: 22px;
  color: white;
`;
