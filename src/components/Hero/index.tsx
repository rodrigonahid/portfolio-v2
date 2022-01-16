import Image from "next/image";
import { HeroContent, HeroImageWrapper, HeroWrapper, Section } from "./style";

export function Hero() {
  return (
    <Section>
      <HeroWrapper>
        <HeroContent>
          <p>👋 Fala dev!</p>
          <h1>
            Seja bem-vindo ao meu <br />
            portfolio!
          </h1>
          <h2>Página em construção!</h2>
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
