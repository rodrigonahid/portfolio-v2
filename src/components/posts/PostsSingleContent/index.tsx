import Image from "next/image";

import { Container } from "../../../styles/grid";
import { ApiVariableContext } from "../../../contexts/apiVariable";

import {
  ImageWrapper,
  PostSingleHeaderContent,
  PostsSingleContentWrapper,
} from "./styles";
import HTMLReactParser from "html-react-parser";

interface PostsSingleContentProps {
  singlePost: {
    feature_image: string;
    html: string;
  };
}

export function PostsSingleContent({ singlePost }: PostsSingleContentProps) {
  return (
    <PostsSingleContentWrapper>
      <Container>
        <ImageWrapper>
          <Image
            src={singlePost.feature_image}
            layout="fill"
            objectFit="contain"
            alt="placeholder img"
          />
        </ImageWrapper>
        <PostSingleHeaderContent>
          {HTMLReactParser(singlePost.html)}
        </PostSingleHeaderContent>
      </Container>
    </PostsSingleContentWrapper>
  );
}
