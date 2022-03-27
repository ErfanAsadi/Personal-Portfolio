import { FC } from "react";
import styled from "@emotion/styled";

export interface SubSectionHeaderProps {
  title: string;
  className?: string;
}

export const SubSectionHeader: FC<SubSectionHeaderProps> = (props) => {
  const { title, className } = props;
  return <Container className={className}>{title}</Container>;
};

const Container = styled.div`
  text-align: center;
  width: fit-content;
  min-width: 200px;
  height: 40px;
  line-height: 40px;
  background-color: #34a369;
  color: white;
`;

export default SubSectionHeader;
