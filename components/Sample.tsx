import styled from "@emotion/styled";
import { FC } from "react";
import AngrySvg from "assets/icons/angry.svg";
import { useTranslation } from "next-i18next";

export const Sample: FC = () => {
  const { t } = useTranslation(["common", "sample"]);

  return (
    <Container>
      <Text1>{t("sample:sample")}</Text1>
      <Text2>{t("sample:sample")}</Text2>
      <StyledButton>
        <AngrySvg width={"20px"} height={"20px"} />
        {t("sample:click-me")}
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.palette?.primary?.main};
`;

const Text1 = styled.div`
  font-family: "Roboto", "Noto Naskh Arabic", sans-serif;
  font-size: 48px;
  font-weight: 600;
`;
const Text2 = styled.div`
  font-family: "Mitr", "Lalezar", sans-serif;
  font-weight: 600;
  font-size: 48px;
`;

const StyledButton = styled.div`
  width: 100px;
  height: 40px;
  margin-top: 80px;
  color: black;
  background-color: ${({ theme }) => theme.palette?.secondary?.main};
`;
