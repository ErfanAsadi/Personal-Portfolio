import styled from "@emotion/styled";
import { debounce } from "lodash-es";
import React, { useState, useEffect, FC } from "react";
import AngrySvg from "assets/icons/angry.svg";

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
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <Container $visible={visible} className={className}>
      <IconContainer onClick={onMenuClick}>
        <AngrySvg />
      </IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};

const navbarHeight = "60px";

const Container = styled.div<{ $visible?: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  height: ${navbarHeight};
  width: 100%;
  background-color: #1e282e;
  text-align: center;
  transition: top 0.3s;
  top: ${({ $visible }) => ($visible ? 0 : `- ${navbarHeight}`)};
  color: white;
`;

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  padding: 10px;
  border-right: 1px solid #666;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;

const Title = styled.div`
  padding: 0 20px;
  font-size: 22px;
  color: white;
`;
