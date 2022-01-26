import Image from "next/image";
import { useTranslation } from "next-i18next";

import { HeroContent, HeroImageWrapper, HeroWrapper, Section } from "./style";

interface HeroProps {
  translation: {
    welcome: string;
    title: string;
    description: string;
  };
}

export function Hero() {
  const { t } = useTranslation("common");

  return (
    <Section>
      <HeroWrapper>
        <HeroContent>
          <p>👋 {t("welcome")}</p>
          <h1>{t("title")}</h1>
          <h2>{t("description")}</h2>
        </HeroContent>
        <HeroImageWrapper>
          <p>👋 {t("welcome")}</p>

          <div className="imageWrapper">
            <Image
              src="/avatar.png"
              alt="avatar"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </HeroImageWrapper>
      </HeroWrapper>
    </Section>
  );
}
