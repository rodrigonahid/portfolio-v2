import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HTMLReactParser from "html-react-parser";

import { ItemHightlightedWrapper, ItemWrapper } from "./styles";

interface attributesProps {
  post: {
    id: string;
    title: string;
    slug: string;
    html: string;
    created_at: string;
    feature_image: string;
  };
}

export function PostItemHighlighted({ post }: attributesProps) {
  console.log(post);
  const { t } = useTranslation("posts");

  const formatDate = (timestamp: string) => {
    const date = timestamp.split("T");
    const formatted = date[0].replaceAll("-", "/");
    return formatted;
  };

  return (
    <ItemHightlightedWrapper>
      <div className="left">
        <div className="top">
          <h3>{post.title}</h3>
          {HTMLReactParser(post.html)}
        </div>
        <span className="bottom">
          <p>{formatDate(post.created_at)}</p>
          <Link href={`/posts/${post.id}`}>
            <a>{t("singleLink")}</a>
          </Link>
        </span>
      </div>
      <div className="img-wrapper">
        <Image
          src={post.feature_image}
          alt="placeholder img"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </ItemHightlightedWrapper>
  );
}

export function PostItem({ post }: attributesProps) {
  const { t } = useTranslation("posts");

  return (
    <ItemWrapper>
      <div className="top">
        <h3>{post.title}</h3>
        {post.html}
      </div>
      <span className="bottom">
        <p>{post.created_at}</p>
        <Link href={`/posts/${post.id}`}>
          <a>{t("singleLink")}</a>
        </Link>
      </span>
    </ItemWrapper>
  );
}
