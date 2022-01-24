import { Container } from "../../../styles/grid";
import { PostSingleHeaderWrapper, PostSingleWrapper } from "./styles";

interface PostSingleHeaderProps {
  attributes: {
    Title: string;
    Date: string;
  };
}

export function PostsSingleHeader({ attributes }: PostSingleHeaderProps) {
  return (
    <PostSingleWrapper>
      <Container>
        <PostSingleHeaderWrapper>
          <h1>{attributes.Title}</h1>
          <p>
            Criado em <span>{attributes.Date}</span>
          </p>
        </PostSingleHeaderWrapper>
      </Container>
    </PostSingleWrapper>
  );
}
