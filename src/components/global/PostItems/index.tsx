import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import HTMLReactParser from "html-react-parser";

import { ItemHightlightedWrapper, ItemWrapper } from "./styles";
import formatDate from "../../../utils/formatDate";

interface attributesProps {
  post: {
    data: {
      title: {
        text: string;
      }[];
      image: {
        alt: string;
        url: string;
      };
    };
    first_publication_date: string;

    slugs: string[];
  };
}

export function PostItemHighlighted({ post }: attributesProps) {
  const { t } = useTranslation("posts");
  console.log(post.data);
  return (
    <ItemHightlightedWrapper>
      <div className="left">
        <div className="top">
          <h3>{post.data.title[0].text}</h3>
          {/* {HTMLReactParser(post.html)} */}
        </div>
        <span className="bottom">
          <p>{formatDate(post.first_publication_date)}</p>
          <Link href={`/posts/${post.slugs[0]}`}>
            <a>{t("singleLink")}</a>
          </Link>
        </span>
      </div>
      <div className="img-wrapper">
        {post.data?.image.url && (
          <Link href={`/posts/${post.slugs[0]}`}>
            <a>
              <Image
                src={post.data.image.url}
                alt={post.data.image.alt ?? "highlight image"}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        )}
      </div>
    </ItemHightlightedWrapper>
  );
}

export function PostItem({ post }: attributesProps) {
  const { t } = useTranslation("posts");

  return (
    <ItemWrapper>
      {/* <div className="top">
        <h3>{post.title}</h3>
        {HTMLReactParser(post.html)}
      </div>
      <span className="bottom">
        <p>{post.created_at}</p>
        <Link href={`/posts/${post.slug}`}>
          <a>{t("singleLink")}</a>
        </Link>
      </span> */}
    </ItemWrapper>
  );
}
