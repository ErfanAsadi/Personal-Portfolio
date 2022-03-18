import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactElement, useEffect } from "react";

export interface LayoutButtonProps {
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
  width: calc(100% - 40px);
  height: 50px;
  padding: 20px;
  border-bottom: 1px solid #7e6b6e;
  background-color: #1e282e;
  cursor: pointer;

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
    width: 100%;
    height: 100%;
    fill: ${({ $active }) => ($active ? "#ffffff" : "#ccc")};
  }
`;

const Title = styled.div<ComponentProps>`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: ${({ $active }) => ($active ? "#ffffff" : "#ccc")};
`;
