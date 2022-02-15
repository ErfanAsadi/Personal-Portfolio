import {
  WorkProcessCard,
  WorkProcessCardProps,
} from "$components/atoms/WorkProcessCard";
import styled from "@emotion/styled";
import { FC } from "react";

interface WorkProcessProps {
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
          <WorkProcessCard
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
`;

const Line = styled.div<Pick<WorkProcessProps, "lineWidth">>`
  height: 3px;
  width: ${({ lineWidth }) => `${lineWidth}px`};
  background-color: white;
`;
