import Link from "next/link";
import Image from "next/image";

import { ItemHightlightedWrapper, ItemWrapper } from "./styles";
import { useContext } from "react";
import { ApiVariableContext } from "../../contexts/apiVariable";

interface attributesProps {
  attributes: {
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

export function PostItemHighlighted({ id, attributes }: attributesProps) {
  const apiUrl = useContext(ApiVariableContext);

  return (
    <ItemHightlightedWrapper>
      <div className="left">
        <div className="top">
          <h3>{attributes.Title}</h3>
          <p>{attributes.Content}</p>
        </div>
        <span className="bottom">
          <p>{attributes.Date}</p>
          <Link href={`/posts/${id}`}>
            <a>Ler mais</a>
          </Link>
        </span>
      </div>
      <div className="img-wrapper">
        <Image
          src={apiUrl + attributes.Picture.data.attributes.url}
          alt="placeholder img"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </ItemHightlightedWrapper>
  );
}

export function PostItem({ id, attributes }: attributesProps) {
  return (
    <ItemWrapper>
      <div className="top">
        <h3>{attributes.Title}</h3>
        <p>{attributes.Content}</p>
      </div>
      <span className="bottom">
        <p>{attributes.Date}</p>
        <Link href={`/posts/${id}`}>
          <a>Ler mais</a>
        </Link>
      </span>
    </ItemWrapper>
  );
}
