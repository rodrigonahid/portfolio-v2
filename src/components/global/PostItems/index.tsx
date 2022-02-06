import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { ItemHightlightedWrapper, ItemWrapper } from "./styles";
import { useContext } from "react";
import { ApiVariableContext } from "../../../contexts/apiVariable";
import { PostsProps } from "../../../pages";

interface attributesProps {
  content: {
    id: string;
    title: string;
    html: string;
    created_at: string;
  };
}

export function PostItemHighlighted({ content }: attributesProps) {
  console.log(content);
  const apiUrl = useContext(ApiVariableContext);

  const { t } = useTranslation("posts");

  return (
    <ItemHightlightedWrapper>
      {/* <div className="left">
        <div className="top">
          <h3>{content.title}</h3>
          {content.html}
        </div>
        <span className="bottom">
          <p>{content.created_at}</p>
          <Link href={`/posts/${content.id}`}>
            <a>{t("singleLink")}</a>
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
      </div> */}
    </ItemHightlightedWrapper>
  );
}

export function PostItem({ content }: attributesProps) {
  const { t } = useTranslation("posts");

  return (
    <ItemWrapper>
      {/* <div className="top">
        <h3>{content.title}</h3>
        {content.html}
      </div>
      <span className="bottom">
        <p>{content.title}</p>
        <Link href={`/posts/${content.id}`}>
          <a>{t("singleLink")}</a>
        </Link>
      </span> */}
    </ItemWrapper>
  );
}
