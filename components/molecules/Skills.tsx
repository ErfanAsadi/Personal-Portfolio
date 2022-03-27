import { FC } from "react";
import styled from "@emotion/styled";
import Progressbar, { ProgressbarProps } from "$components/atoms/Progressbar";
import SubSectionHeader from "$components/atoms/headers/SubSectionHeader";

export interface SkillsProps {
  title: string;
  items: ProgressbarProps[];
  className?: string;
}

export const Skills: FC<SkillsProps> = (props) => {
  const { title, items, className } = props;
  return (
    <Container className={className}>
      <StyledSubSectionHeader title={title} />
      {items.map((item, index) => (
        <Progressbar {...item} key={index} lineColor="#3dc780" />
      ))}
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
  padding: 40px 0;
`;
const StyledSubSectionHeader = styled(SubSectionHeader)`
  margin: 0 auto;
  margin-bottom: 40px;
`;

export default Skills;
