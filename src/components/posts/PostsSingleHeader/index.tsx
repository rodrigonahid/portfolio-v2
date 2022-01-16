import { Container } from "../../../styles/grid";
import { PostSingleHeaderContent } from "../PostsSingleContent/styles";
import { PostSingleHeaderWrapper, PostSingleWrapper } from "./styles";

export function PostsSingleHeader() {
  return (
    <PostSingleWrapper>
      <Container>
        <PostSingleHeaderWrapper>
          <h1>Desenvolvendo uma aplicação em React.js</h1>
          <p>
            Written by John doe <span>Monday May 20</span>
          </p>
        </PostSingleHeaderWrapper>
      </Container>
    </PostSingleWrapper>
  );
}
