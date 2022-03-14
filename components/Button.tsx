import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

interface ButtonProps {
  title?: string;
  href?: string;
  prefetchDelay?: number;
  onClick?: () => void;
}

const BaseButton: FC<ButtonProps> = (props) => {
  const { title, onClick } = props;
  return <div onClick={onClick}>{title}</div>;
};

export const Button: FC<ButtonProps> = ({
  title,
  href,
  prefetchDelay = 0,
  onClick,
}) => {
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
        <a>{title}</a>
      </Link>
    );
  } else {
    return <BaseButton title={title} onClick={onClick} />;
  }
};
