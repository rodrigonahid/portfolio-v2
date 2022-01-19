import Link from "next/link";
import Image from "next/image";

import { ItemHightlightedWrapper, ItemWrapper } from "./styles";
import { useContext } from "react";
import { ApiVariableContext } from "../../contexts/apiVariable";

interface ContentProps {
  content: {
    Title: string;
    Content: string;
    Date: string;
    Picture: PictureProps;
  };
  id: number;
}

export interface PictureProps {
  data: {
    attributes: {
      url: string;
    };
  };
}

export function PostItemHighlighted({ id, content }: ContentProps) {
  const apiUrl = useContext(ApiVariableContext);

  return (
    <ItemHightlightedWrapper>
      <div className="left">
        <div className="top">
          <h3>{content.Title}</h3>
          <p>{content.Content}</p>
        </div>
        <span className="bottom">
          <p>{content.Date}</p>
          <Link href={`/posts/${id}`}>
            <a>Ler mais</a>
          </Link>
        </span>
      </div>
      <div className="img-wrapper">
        <Image
          src={apiUrl + content.Picture.data.attributes.url}
          alt="placeholder img"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </ItemHightlightedWrapper>
  );
}

export function PostItem() {
  return (
    <ItemWrapper>
      <div className="top">
        <h3>Desenvolvendo uma aplicação em React.js</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          vulputate dolor. Nulla id mi faucibus, cursus lorem eget, porta odio.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          imperdiet nulla. Duis vel diam non nunc maximus accumsan. Nam placerat
          bibendum odio vel dignissim. Aenean ornare laoreet metus. Fusce
          sodales purus purus, ac ultricies purus pellentesque quis. Vestibulum
          efficitur...
        </p>
      </div>
      <span className="bottom">
        <p>24/12/2021</p>
        <Link href="/posts">
          <a>Ler mais</a>
        </Link>
      </span>
    </ItemWrapper>
  );
}
