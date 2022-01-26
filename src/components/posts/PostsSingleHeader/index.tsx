import { useTranslation } from "next-i18next";
import { Container } from "../../../styles/grid";
import { PostSingleHeaderWrapper, PostSingleWrapper } from "./styles";

interface PostSingleHeaderProps {
  attributes: {
    Title: string;
    Date: string;
  };
}

export function PostsSingleHeader({ attributes }: PostSingleHeaderProps) {
  const { t } = useTranslation("posts");
  return (
    <PostSingleWrapper>
      <Container>
        <PostSingleHeaderWrapper>
          <h1>{attributes.Title}</h1>
          <p>
            {t("postedAt")} <span>{attributes.Date}</span>
          </p>
        </PostSingleHeaderWrapper>
      </Container>
    </PostSingleWrapper>
  );
}
