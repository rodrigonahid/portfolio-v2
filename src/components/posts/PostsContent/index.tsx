import { useEffect, useState } from "react";
import { Container } from "../../../styles/grid";
import { PictureProps, PostItemHighlighted } from "../../global/PostItems";
import { PostContentOffset, PostsContentWrapper } from "./styles";

interface PostsProps {
  posts: {
    attributes: {
      Title: string;
      Content: string;
      Date: string;
      Picture: PictureProps;
    };
    id: number;
  }[];
}

export function PostsContent({ posts }: PostsProps) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (posts) {
      setIsLoading(true);
    }
  }, [posts]);

  return (
    <PostsContentWrapper>
      <Container>
        {isLoading && (
          <PostContentOffset>
            {posts.map((post) => (
              <PostItemHighlighted
                key={post.id}
                attributes={post.attributes}
                id={post.id}
              />
            ))}
          </PostContentOffset>
        )}
      </Container>
    </PostsContentWrapper>
  );
}
