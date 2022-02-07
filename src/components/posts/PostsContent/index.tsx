import { useEffect, useState } from "react";
import { Container } from "../../../styles/grid";
import { PostItemHighlighted } from "../../global/PostItems";
import { PostContentOffset, PostsContentWrapper } from "./styles";

interface PostsProps {
  posts: {
    id: string;
    title: string;
    slug: string;
    html: string;
    created_at: string;
    feature_image: string;
  }[];
}

export function PostsContent({ posts }: PostsProps) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(posts);
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
              <PostItemHighlighted key={post.id} post={post} />
            ))}
          </PostContentOffset>
        )}
      </Container>
    </PostsContentWrapper>
  );
}
