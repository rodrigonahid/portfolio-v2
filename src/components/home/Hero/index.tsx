import Image from "next/image";
import { HeroContent, HeroImageWrapper, HeroWrapper, Section } from "./style";

interface HeroProps {
  translation: {
    welcome: string;
    title: string;
    description: string;
  };
}

export function Hero({ translation }: HeroProps) {
  return (
    <Section>
      <HeroWrapper>
        <HeroContent>
          <p>👋 {translation.welcome}</p>
          <h1>{translation.title}</h1>
          <h2>{translation.description}</h2>
        </HeroContent>
        <HeroImageWrapper>
          <p>👋 Fala dev!</p>

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
