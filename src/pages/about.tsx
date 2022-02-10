import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { staticProps } from ".";
import { Footer } from "../components/global/Footer";
import { Header } from "../components/global/Header";
import { getPosts } from "../services/api";
import {
  AboutWrapper,
  AboutContainer,
  ImageWrapper,
  ContentWrapper,
  DownloadButton,
  SocialIcons,
} from "../styles/about";
import { Container } from "../styles/grid";

export default function About() {
  return (
    <>
      <Header />
      <AboutWrapper>
        <AboutContainer>
          <ImageWrapper>
            <span className="img-wrapper">
              <Image
                src="https://avatars.githubusercontent.com/rodrigonahid"
                layout="fill"
                alt="profile picture"
              />
            </span>
          </ImageWrapper>
          <ContentWrapper>
            <div>
              <h1>Sobre mim</h1>
              <p>
                Pensando mais a longo prazo, o acompanhamento das preferências
                de consumo é uma das consequências dos índices pretendidos.
              </p>
            </div>

            <div className="button-wrapper">
              <DownloadButton href="/Curriculo.pdf" download="w3logo">
                <Image
                  src="/icons/download.svg"
                  alt="download"
                  height="18"
                  width="16"
                />

                <span>Baixar curriculo</span>
              </DownloadButton>
            </div>
          </ContentWrapper>
        </AboutContainer>
        <Container>
          <SocialIcons>
            <h3>Acompanhe meu trabalho no:</h3>
            <ul>
              <li>
                <Link href="https://www.linkedin.com/in/rodrigo-nahid/">
                  <a target="_blank">
                  <Image
                  src="/social-icons/linkedin.svg"
                  height={40}
                  width={40}
                  alt="linkedin"
                />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/rodrigonahid1/">
                  <a target="_blank">
                  <Image
                    src="/social-icons/instagram.svg"
                    height={40}
                    width={40}
                    alt="instagram"
                  />
                  </a>
                </Link>
              </li>
              <li>
               <Link href="https://www.youtube.com/channel/UCwvXKJT8-9ZPitA7p34K9M">
                <a target="_blank">
                <Image
                  src="/social-icons/youtube.svg"
                  height={40}
                  width={40}
                  alt="youtube"
                />
                </a>
               </Link>
              </li>
              <li>
                <Link href="https://github.com/rodrigonahid">
                  <a target="_blank">
                    <Image
                      src="/social-icons/github.svg"
                      height={40}
                      width={40}
                      alt="github"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </SocialIcons>
        </Container>
      </AboutWrapper>
      <Footer />
    </>
  );
}
export async function getStaticProps({ locale }: staticProps) {
  const posts = await getPosts(locale);
  
  return {
    props: {
      posts,
      locale,
      ...(await serverSideTranslations(locale, [
        "header",
        "footer",
      ])),
    },
  };
}