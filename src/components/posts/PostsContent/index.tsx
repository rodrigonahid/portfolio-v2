import { Container } from "../../../styles/grid";
import { PostItemHighlighted } from "../../PostItems";
import { PostContentOffset, PostsContentWrapper } from "./styles";

export function PostsContent() {
  return (
    <PostsContentWrapper>
      <Container>
        <PostContentOffset>
          <PostItemHighlighted />
          <PostItemHighlighted />
          <PostItemHighlighted />
          <PostItemHighlighted />
        </PostContentOffset>
      </Container>
    </PostsContentWrapper>
  );
}
