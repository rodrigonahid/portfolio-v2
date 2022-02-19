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
    data: {
      title: {
        text: string;
      }[];
      image: {
        alt: string;
        url: string;
      };
      content: {
        type: string;
        text: string;
      }[];
    };
    first_publication_date: string;

    slugs: string[];
  };
}

export function PostsSingleContent({ singlePost }: PostsSingleContentProps) {
  return (
    <PostsSingleContentWrapper>
      <Container>
        <ImageWrapper>
          {singlePost.data.image && (
            <Image
              src={singlePost.data.image.url}
              layout="fill"
              objectFit="contain"
              alt={singlePost.data.image.alt}
            />
          )}
        </ImageWrapper>
        <PostSingleHeaderContent>
          {singlePost.data.content.map((post, index) => post.text)}
        </PostSingleHeaderContent>
      </Container>
    </PostsSingleContentWrapper>
  );
}
