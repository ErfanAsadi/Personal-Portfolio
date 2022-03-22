import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";

export interface LayoutButtonProps {
  id: string;
  title: string;
  icon: ReactElement;
  active?: boolean;
  href?: string;
  prefetchDelay?: number;
  className?: string;
  onClick?: () => void;
}

const BaseLayoutButton: FC<LayoutButtonProps> = (props) => {
  const { title, icon, active, onClick } = props;
  return (
    <Container onClick={onClick}>
      <IconWrapper $active={active}>{icon}</IconWrapper>
      <Title $active={active}>{title}</Title>
    </Container>
  );
};

export const LayoutButton: FC<LayoutButtonProps> = (props) => {
  const { href, prefetchDelay = 0 } = props;

  const router = useRouter();
  const delayedPrefetch = prefetchDelay > 0;

  useEffect(() => {
    if (delayedPrefetch && href) {
      setTimeout(() => {
        router.prefetch(href);
      }, prefetchDelay);
    }
  }, [href, prefetchDelay, delayedPrefetch, router]);

  if (href) {
    return (
      <Link href={href} prefetch={!delayedPrefetch}>
        <a>
          <BaseLayoutButton {...props} />
        </a>
      </Link>
    );
  } else {
    return <BaseLayoutButton {...props} />;
  }
};

interface ComponentProps {
  $active?: boolean;
}

const Container = styled.div`
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #3e4b5e;
  background-color: #1e282e;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    & > div {
      color: #dedede;
    }
    & > div > svg {
      fill: #dedede;
    }
  }
`;

const IconWrapper = styled.div<ComponentProps>`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  text-align: center;

  & > svg {
    fill: ${({ $active }) => ($active ? "#ffffff" : "#777")};
  }
`;

const Title = styled.div<ComponentProps>`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#777")};
  text-transform: uppercase;
`;
