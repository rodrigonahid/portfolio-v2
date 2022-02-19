import { useTranslation } from "next-i18next";
import { Container } from "../../../styles/grid";
import formatDate from "../../../utils/formatDate";
import { PostSingleHeaderWrapper, PostSingleWrapper } from "./styles";

interface PostSingleHeaderProps {
  singlePost: {
    data: {
      title: {
        text: string;
      }[];
    };
    first_publication_date: string;
  };
}

export function PostsSingleHeader({ singlePost }: PostSingleHeaderProps) {
  const { t } = useTranslation("posts");
  return (
    <PostSingleWrapper>
      <Container>
        <PostSingleHeaderWrapper>
          <h1>{singlePost.data.title[0].text}</h1>
          <p>
            {t("postedAt")}{" "}
            <span>{formatDate(singlePost.first_publication_date)}</span>
          </p>
        </PostSingleHeaderWrapper>
      </Container>
    </PostSingleWrapper>
  );
}
