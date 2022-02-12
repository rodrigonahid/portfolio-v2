import Image from "next/image";

import { Container } from "../../../styles/grid";

import {
  ImageWrapper,
  PostSingleHeaderContent,
  PostsSingleContentWrapper,
} from "./styles";
import HTMLReactParser from "html-react-parser";

interface PostsSingleContentProps {
  singlePost: {
    html: string;
    feature_image?: string;
  };
}

export function PostsSingleContent({ singlePost }: PostsSingleContentProps) {
  return (
    <PostsSingleContentWrapper>
      <Container>
        <ImageWrapper>
          {singlePost.feature_image && (
            <Image
              src={singlePost.feature_image}
              layout="fill"
              objectFit="contain"
              alt="placeholder img"
            />
          )}
        </ImageWrapper>
        <PostSingleHeaderContent>
          {HTMLReactParser(singlePost.html)}
        </PostSingleHeaderContent>
      </Container>
    </PostsSingleContentWrapper>
  );
}
