import Image from "next/image";
import { Container } from "../../../styles/grid";
import { PictureProps } from "../../global/PostItems";
import { ApiVariableContext } from "../../../contexts/apiVariable";

import {
  ImageWrapper,
  PostSingleHeaderContent,
  PostsSingleContentWrapper,
} from "./styles";
import { useContext } from "react";

interface PostsSingleContentProps {
  attributes: {
    Content: string;
    Picture: PictureProps;
  };
}

export function PostsSingleContent({ attributes }: PostsSingleContentProps) {
  const api = useContext(ApiVariableContext);

  return (
    <PostsSingleContentWrapper>
      <Container>
        <ImageWrapper>
          <Image
            src={api + attributes.Picture.data.attributes.url}
            layout="fill"
            objectFit="contain"
            alt="placeholder img"
          />
        </ImageWrapper>
        <PostSingleHeaderContent>{attributes.Content}</PostSingleHeaderContent>
      </Container>
    </PostsSingleContentWrapper>
  );
}
