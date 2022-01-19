import { Container } from "../../../styles/grid";
import { PostItemHighlighted } from "../../PostItems";
import { PostContentOffset, PostsContentWrapper } from "./styles";

interface PostsProps {
  posts: object[];
}

export function PostsContent({ posts }: PostsProps) {
  return (
    <PostsContentWrapper>
      <Container>
        <PostContentOffset>
          {/* {posts.map((post) => {
            // <PostItemHighlighted content={post.} />;
          })} */}
        </PostContentOffset>
      </Container>
    </PostsContentWrapper>
  );
}
