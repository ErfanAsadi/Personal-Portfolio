import { FC } from "react";
import styled from "@emotion/styled";
import {
  WorkProcess,
  WorkProcessProps,
} from "$components/molecules/WorkProcess";
import SubSectionHeader from "$components/atoms/headers/SubSectionHeader";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "$components/atoms/headers/SectionHeader";
import Services, { ServicesProps } from "$components/molecules/Services";
import PersonSvg from "assets/icons/person.svg";

export interface AboutProps {
  services: ServicesProps["services"];
  workProcessItems: WorkProcessProps["items"];
  className?: string;
}

export const About: FC<AboutProps> = (props) => {
  const { services, workProcessItems, className } = props;

  const { t } = useTranslation();

  return (
    <Container className={className}>
      <SectionHeader title={t("about-me")} icon={<PersonSvg />} />
      <StyledSubSectionHeader title={t("services")} />
      <Services services={services} />
      <StyledSubSectionHeader title={t("work-process")} />
      <StyledWorkProcess items={workProcessItems} lineWidth={50} />
    </Container>
  );
};

const Container = styled.div``;

const StyledWorkProcess = styled(WorkProcess)`
  margin: 40px auto;
  text-align: center;
`;

const StyledSubSectionHeader = styled(SubSectionHeader)`
  margin: 70px auto;
  margin-bottom: 40px;
`;

export default About;
