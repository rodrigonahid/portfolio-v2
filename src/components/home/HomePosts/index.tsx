import Link from "next/link";
import { useTranslation } from "next-i18next";

import { Container } from "../../../styles/grid";
import {
  PictureProps,
  PostItem,
  PostItemHighlighted,
} from "../../global/PostItems";

import { HomePostsWrapper, ItemRow, PostsTitle, VerTudoButton } from "./styles";

interface HomePostsProps {
  content: {
    attributes: {
      Title: string;
      Content: string;
      Date: string;
      Picture: PictureProps;
    };
    id: number;
  }[];
}

export function HomePosts({ content }: HomePostsProps) {
  const { t } = useTranslation("posts");

  return (
    <HomePostsWrapper>
      <Container>
        <PostsTitle>
          <div className="left">
            <h2>{t("sectionTitle")}</h2>
          </div>
          <div className="right">
            <Link href="/posts" passHref>
              <VerTudoButton>
                <span>{t("button")}</span>
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
          {content?.map((post, index) => {
            if (index === 0) {
              return (
                <PostItemHighlighted
                  id={post.id}
                  attributes={post.attributes}
                />
              );
            } else {
              return <PostItem id={post.id} attributes={post.attributes} />;
            }
          })}

          <span className="button-link">
            <Link href="/posts" passHref>
              <VerTudoButton>
                <span>{t("button")}</span>
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
