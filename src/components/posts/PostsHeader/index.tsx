import { Container } from "../../../styles/grid";
import { Content, PostHeaderWrapper } from "./styles";

export function PostsHeader() {
  return (
    <PostHeaderWrapper>
      <Container>
        <Content>
          <h1>Artigos, videos e projetos</h1>
        </Content>
      </Container>
    </PostHeaderWrapper>
  );
}
