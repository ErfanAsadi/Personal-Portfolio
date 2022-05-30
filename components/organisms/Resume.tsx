import { FC } from "react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "$components/atoms/headers/SectionHeader";
import { below } from "styles/viewPorts";
import Skills, { SkillsProps } from "$components/molecules/Skills";
import Comments, { CommentsProps } from "$components/molecules/Comments";
import ActivitiesHistory, {
  ActivitiesHistoryProps,
} from "$components/molecules/ActivitiesHistory";
import PersonSvg from "assets/icons/person.svg";

export interface ResumeProps {
  activities: Exclude<ActivitiesHistoryProps, "className">[];
  skills: Exclude<SkillsProps, "className">[];
  comments: Exclude<CommentsProps, "className">;
  className?: string;
}

export const Resume: FC<ResumeProps> = (props) => {
  const { activities, skills, comments, className } = props;

  const { t } = useTranslation();

  return (
    <Container className={className}>
      <SectionHeader title={t("resume")} icon={<PersonSvg />} />
      <ResumeContainer>
        <ActivitiesContainer>
          {activities.map((item, index) => (
            <ActivitiesHistory {...item} key={index} />
          ))}
        </ActivitiesContainer>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skills {...skill} key={skill.title} />
          ))}

          <Comments {...comments} />
        </SkillsContainer>
      </ResumeContainer>
    </Container>
  );
};

const Container = styled.div``;

const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${below.Xlarge} {
    flex-direction: column;
  }
`;

const ActivitiesContainer = styled.div`
  width: 60%;
  padding: 0 40px;
  @media ${below.Xlarge} {
    width: 100%;
  }

  & > div {
    margin-bottom: 120px;
  }
`;

const SkillsContainer = styled.div`
  width: calc(40% - 40px);
  padding: 0 20px;
  @media ${below.Xlarge} {
    width: 100%;
  }
`;

export default Resume;
