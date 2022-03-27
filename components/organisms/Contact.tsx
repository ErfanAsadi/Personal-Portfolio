import { FC } from "react";
import styled from "@emotion/styled";

export interface ContactProps {
  className?: string;
}

export const Contact: FC<ContactProps> = (props) => {
  const { className } = props;
  return <Container className={className}>{props.children}</Container>;
};

const Container = styled.div``;

export default Contact;
