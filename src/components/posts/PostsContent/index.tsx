import { useEffect, useState } from "react";
import { Container } from "../../../styles/grid";
import { PostItemHighlighted } from "../../global/PostItems";
import { PostContentOffset, PostsContentWrapper } from "./styles";

interface PostsProps {
  posts: {
    data: {
      title: {
        text: string;
      }[];
      image: {
        alt: string;
        url: string;
      };
      content: {
        type: string;
        text: string;
      }[];
    };
    first_publication_date: string;
    id: string;
    slugs: string[];
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
              <PostItemHighlighted key={post.id} post={post} />
            ))}
          </PostContentOffset>
        )}
      </Container>
    </PostsContentWrapper>
  );
}
