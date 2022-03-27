import {
  WorkProcessCard,
  WorkProcessCardProps,
} from "$components/atoms/cards/WorkProcessCard";
import styled from "@emotion/styled";
import { FC } from "react";

export interface WorkProcessProps {
  items: WorkProcessCardProps[];
  lineWidth?: number;
  className?: string;
}

export const WorkProcess: FC<WorkProcessProps> = (props) => {
  const { items, lineWidth = 25, className } = props;

  return (
    <Container className={className}>
      {items.map(({ title, icon }, index) => (
        <>
          <StyledWorkProcessCard
            key={`WorkProcessCard_${index}`}
            title={title}
            icon={icon}
          />
          {index < items.length - 1 && <Line lineWidth={lineWidth} />}
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Line = styled.div<Pick<WorkProcessProps, "lineWidth">>`
  width: ${({ lineWidth }) => `${lineWidth}px`};
  border-top: 3px dashed white;
`;

const StyledWorkProcessCard = styled(WorkProcessCard)`
  margin-bottom: 10px;
`;
