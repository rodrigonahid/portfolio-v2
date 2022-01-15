import Link from "next/link";
import { Container } from "../../styles/grid";
import { PostItem, PostItemHighlighted } from "../PostItems";

import { HomePostsWrapper, ItemRow, PostsTitle, VerTudoButton } from "./styles";

export function HomePosts() {
  return (
    <HomePostsWrapper>
      <Container>
        <PostsTitle>
          <div className="left">
            <h2>Artigos, vídeos e projetos</h2>
          </div>
          <div className="right">
            <Link href="" passHref>
              <VerTudoButton>
                <span>Ver tudo</span>
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.37999 19.01C0.86999 19.5 1.65999 19.5 2.14999 19.01L10.46 10.7C10.85 10.31 10.85 9.68005 10.46 9.29005L2.14999 0.980049C1.65999 0.490049 0.86999 0.490049 0.37999 0.980049C-0.11001 1.47005 -0.11001 2.26005 0.37999 2.75005L7.61999 10L0.36999 17.25C-0.11001 17.73 -0.11001 18.5301 0.37999 19.01Z"
                    fill="#E1E1E6"
                  />
                </svg>
              </VerTudoButton>
            </Link>
          </div>
        </PostsTitle>
        <ItemRow>
          <PostItemHighlighted />
          <div className="rows">
            <PostItem />
            <PostItem />
            <PostItem />
          </div>
          <span className="button-link">
            <Link href="" passHref>
              <VerTudoButton>
                <span>Ver tudo</span>
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.37999 19.01C0.86999 19.5 1.65999 19.5 2.14999 19.01L10.46 10.7C10.85 10.31 10.85 9.68005 10.46 9.29005L2.14999 0.980049C1.65999 0.490049 0.86999 0.490049 0.37999 0.980049C-0.11001 1.47005 -0.11001 2.26005 0.37999 2.75005L7.61999 10L0.36999 17.25C-0.11001 17.73 -0.11001 18.5301 0.37999 19.01Z"
                    fill="#E1E1E6"
                  />
                </svg>
              </VerTudoButton>
            </Link>
          </span>
        </ItemRow>
      </Container>
    </HomePostsWrapper>
  );
}
