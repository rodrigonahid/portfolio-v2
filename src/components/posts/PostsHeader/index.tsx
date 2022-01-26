import { useTranslation } from "next-i18next";
import { Container } from "../../../styles/grid";
import { Content, PostHeaderWrapper } from "./styles";

export function PostsHeader() {
  const { t } = useTranslation("posts");
  return (
    <PostHeaderWrapper>
      <Container>
        <Content>
          <h1>{t("sectionTitle")}</h1>
        </Content>
      </Container>
    </PostHeaderWrapper>
  );
}
