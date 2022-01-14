import Link from "next/link";
import Image from "next/image";

import { ItemHightlightedWrapper, ItemWrapper } from "./styles";

export function PostItemHighlighted() {
  return (
    <ItemHightlightedWrapper>
      <div className="left">
        <div className="top">
          <h3>Desenvolvendo uma aplicação em React.js</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac vulputate dolor. Nulla id mi faucibus, cursus lorem eget, porta
            odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            ut imperdiet nulla. Duis vel diam non nunc maximus accumsan. Nam
            placerat bibendum odio vel dignissim. Aenean ornare laoreet metus.
            Fusce sodales purus purus, ac ultricies purus pellentesque quis.
            Vestibulum efficitur...
          </p>
        </div>
        <span className="bottom">
          <p>24/12/2021</p>
          <Link href="">
            <a>Ler mais</a>
          </Link>
        </span>
      </div>
      <div className="img-wrapper">
        <Image
          src="/blog-placeholder.png"
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
        <Link href="">
          <a>Ler mais</a>
        </Link>
      </span>
    </ItemWrapper>
  );
}
