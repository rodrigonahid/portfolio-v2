import { useTranslation } from "next-i18next";
import { Container } from "../../../styles/grid";
import formatDate from "../../../utils/formatDate";
import { PostSingleHeaderWrapper, PostSingleWrapper } from "./styles";

interface PostSingleHeaderProps {
  singlePost: {
    title: string;
    created_at: string;
  };
}

export function PostsSingleHeader({ singlePost }: PostSingleHeaderProps) {
  const { t } = useTranslation("posts");
  return (
    <PostSingleWrapper>
      <Container>
        <PostSingleHeaderWrapper>
          <h1>{singlePost.title}</h1>
          <p>
            {t("postedAt")} <span>{formatDate(singlePost.created_at)}</span>
          </p>
        </PostSingleHeaderWrapper>
      </Container>
    </PostSingleWrapper>
  );
}
