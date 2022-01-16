import { Container } from "../../../styles/grid";
import { PostSingleHeader, PostSingleWrapper } from "./styles";

export function PostSingle() {
  return (
    <PostSingleWrapper>
      <Container>
        <PostSingleHeader>
          <h1>Desenvolvendo uma aplicação em React.js</h1>
          <p>
            Written by John doe <span>Monday May 20</span>
          </p>
        </PostSingleHeader>
      </Container>
    </PostSingleWrapper>
  );
}
