import { FC } from "react";
import styled from "@emotion/styled";
import SubSectionHeader from "$components/atoms/headers/SubSectionHeader";
import {
  CommentCard,
  CommentCardProps,
} from "$components/atoms/cards/CommentCard";

export interface CommentsProps {
  title: string;
  items: CommentCardProps[];
  className?: string;
}

export const Comments: FC<CommentsProps> = (props) => {
  const { title, items, className } = props;
  return (
    <Container className={className}>
      <StyledSubSectionHeader title={title} />
      {items.map((item, index) => (
        <CommentCardContainer key={index}>
          <CommentCard {...item} />
        </CommentCardContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const StyledSubSectionHeader = styled(SubSectionHeader)`
  margin: 40px auto;
`;
const CommentCardContainer = styled.div`
  margin: 40px 0;
`;

export default Comments;
